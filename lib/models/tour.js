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
    },
    stops: {
        type: Boolean,
        default: false
    },
    gear: {
        backpack: {
            brand: String,
            hipbelt: Boolean
        },
        shoes: String,
        baseWeight: Number
    }    
});

module.exports = mongoose.model('Tour', schema);