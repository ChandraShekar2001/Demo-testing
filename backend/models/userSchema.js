const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name']
    },
    age:{
        type: Number,
        required: [true, 'Please provide an age']
    }
});


userSchema.methods.getJwtToken = () => {
    return jwt.sign({id:this._id}, 'ABCDEFGHIJK', {
        expiresIn: '1d'
    })
}

module.exports = mongoose.model('User', userSchema);