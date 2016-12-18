var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var Comment = require("../models/comment");
var middleware = require("../middleware")
//=======================
//CAMPGROUNDS ROUTES
//=======================

//INDEX - show all campgrounds
router.get("/", function (req, res) {
    console.log(req.user);
    //Get all campgrounds from DB 
    Campground.find({}, function (err, allCampgrounds) {
        if(err) {
            console.log(err);
        } else {
            res.render("campgrounds/index", {campgrounds: allCampgrounds});
        }
    });
}); 

//CREATE - add new campground to DB
router.post("/", middleware.isLoggedIn, function (req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var author = {
        id:req.user._id,
        username: req.user.username
    };
    var newCampground = {name:name, image:image, description:desc, author: author};
    //Create new campground and save to DB
    Campground.create (newCampground, function (err, newlyCreated) {
        if(err) {
            console.log(err);
        } else {
            //redirect back to campgrounds page
            console.log(newlyCreated);
            res.redirect("/campgrounds");
        }
    });
});

//NEW - show form to create new campground
router.get("/new", middleware.isLoggedIn, function (req, res) {
    res.render("campgrounds/new");
});


//SHOW - shows more info about one campground
router.get("/:id", function(req, res) {
    //find the campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground) {
        if(err) {
            console.log(err);
        } else {
            console.log(foundCampground);
            //render show template with that campground
            res.render("campgrounds/show", {campground:foundCampground});
        }
    });
});

//EDIT - shows edit form for one campground
router.get("/:id/edit", middleware.checkCampgroundOwnership, function (req, res) {
        //we pass req.foundCampground from checkCampgroundOwnership middleware
        res.render("campgrounds/edit", {campground: req.foundCampground});
});

//UPDATE - update particual campground, then redirect somewhere
router.put("/:id", middleware.checkCampgroundOwnership, function (req, res) {
    //find and update the correct campground
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function (err, updatedCampground) {
        if(err) {
            res.redirect("/campgrounds");
        } else {
            //redirect somewhere
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});

//DESTROY - delete campground 
router.delete("/:id", middleware.checkCampgroundOwnership, function(req, res) {
    Comment.remove({ //Remove comments related to campground from database
        _id: {
            //we pass req.foundCampground from checkCampgroundOwnership middleware
            $in: req.foundCampground.comments
        }
    }, function (err, result) {
        if (err) {
            console.log(err);
        }
    });
    //Remove the campground
    req.foundCampground.remove(function (err, deletedCampground) {
        if(err) {
            console.log(err);
            res.redirect ("/campgrounds");
        } else {
            res.redirect("/campgrounds");
        }
    });
});





module.exports = router;