var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Forest Spirit", 
        image: "https://farm1.staticflickr.com/93/246477439_5ea3e472a0.jpg", 
        description: "Lorem Ipsum je jednostavno probni tekst koji se koristi u tiskarskoj i slovoslagarskoj industriji. Lorem Ipsum postoji kao industrijski standard još od 16-og stoljeća, kada je nepoznati tiskar uzeo tiskarsku galiju slova i posložio ih da bi napravio knjigu s uzorkom tiska. Taj je tekst ne samo preživio pet stoljeća, već se i vinuo u svijet elektronskog slovoslagarstva, ostajući u suštini nepromijenjen. Postao je popularan tijekom 1960-ih s pojavom Letraset listova s odlomcima Lorem Ipsum-a, a u skorije vrijeme sa software-om za stolno izdavaštvo kao što je Aldus PageMaker koji također sadrži varijante Lorem Ipsum-a."
    },
    {
        name: "Snow Path", 
        image: "https://farm1.staticflickr.com/112/316612921_f23683ca9d.jpg", 
        description: "Lorem Ipsum je jednostavno probni tekst koji se koristi u tiskarskoj i slovoslagarskoj industriji. Lorem Ipsum postoji kao industrijski standard još od 16-og stoljeća, kada je nepoznati tiskar uzeo tiskarsku galiju slova i posložio ih da bi napravio knjigu s uzorkom tiska. Taj je tekst ne samo preživio pet stoljeća, već se i vinuo u svijet elektronskog slovoslagarstva, ostajući u suštini nepromijenjen. Postao je popularan tijekom 1960-ih s pojavom Letraset listova s odlomcima Lorem Ipsum-a, a u skorije vrijeme sa software-om za stolno izdavaštvo kao što je Aldus PageMaker koji također sadrži varijante Lorem Ipsum-a."
    },
    {
        name: "Free for all", 
        image: "https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg", 
        description: "Lorem Ipsum je jednostavno probni tekst koji se koristi u tiskarskoj i slovoslagarskoj industriji. Lorem Ipsum postoji kao industrijski standard još od 16-og stoljeća, kada je nepoznati tiskar uzeo tiskarsku galiju slova i posložio ih da bi napravio knjigu s uzorkom tiska. Taj je tekst ne samo preživio pet stoljeća, već se i vinuo u svijet elektronskog slovoslagarstva, ostajući u suštini nepromijenjen. Postao je popularan tijekom 1960-ih s pojavom Letraset listova s odlomcima Lorem Ipsum-a, a u skorije vrijeme sa software-om za stolno izdavaštvo kao što je Aldus PageMaker koji također sadrži varijante Lorem Ipsum-a."
    }
        
];

function seedDB() {
    //Remove all campgrounds
    Campground.remove({}, function(err) {
        // if(err) {
        //     console.log(err);
        // }
        // console.log("removed campgrounds");
        //     //add a few campgrounds
        //     data.forEach(function(seed){
        //     Campground.create(seed, function (err, campground) {
        //         if(err) {
        //             console.log(err);
        //         } else {
        //             console.log("added a campground");
        //             //Create a comment
        //             Comment.create(
        //                 {
        //                     text: "This place is great but I wish there was internet",
        //                     author: "Homer"
        //                 }, function (err, comment){
        //                         if(err) {
        //                             console.log(err);
        //                         } else {
        //                             campground.comments.push(comment);
        //                             campground.save();
        //                             console.log("Created new comment");
        //                         }
        //                 });
        //         }
        //     });
        // });
    });
    //add a few comments
}

module.exports = seedDB;