var mongoose = require('mongoose');
var Campground = require('./models/campground');
var Comment = require('./models/comment');

var data = [
    {
        name:'Mountain_1', 
        image:'https://farm4.staticflickr.com/3953/15613249585_d1e45f2ee5.jpg',
        description:'Road to Mountain1'
    },
    {
        name:'Mountain_2', 
        image:'http://photosforclass.com/download/15232292419',
        description:'Road to Mountain2'    
    },
    {
        name:'Mountain_3', 
        image:'https://farm8.staticflickr.com/7224/7384323418_6793f7fb25.jpg',
        description:'Road to Mountain3'    
    }
];

function seedDB(){
    Campground.remove({}, function(err){
        if (err) console.log(err);
        console.log('Removed campgrounds!');
        // add a few campgrounds
        data.forEach(function(datum){
            Campground.create(datum, function(err, campground){
                if (err) console.log(err);
                else {
                    console.log('added a campground');
                    // create a comment
                    Comment.create(
                        {
                            text:'This place is great, but I prefer Internet',
                            author:'Homer'
                        }, function(err, comment){
                            if (err) console.log(err);
                            else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log('Created a comment');
                            }
                        });
                        
                }
            });
        });
    });
}

module.exports = seedDB;
