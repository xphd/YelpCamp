var mongoose = require('mongoose');

var commentSchema = mongoose.Schema({
    text: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Uesr'
        },
        username: String
    }
});

var Comment = mongoose.model('comment', commentSchema);
module.exports = Comment;