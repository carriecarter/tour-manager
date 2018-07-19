const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    activities: {
        type: String,
        enum: ['Donny Vomit', 'Tilly Tiger', 'Sammy Swords', 'Clemmy Clown'],
    },
    launchDate: {
        type: Date,
        default: Date.now
    },
    stop: {
        location: {
            city: String,
            state: String,
            zip: Number,
        },
        weather: String,
        attendance: {
            type: Number,
            min: 1
        }
    }    
});

module.exports = mongoose.model('Tour', schema);