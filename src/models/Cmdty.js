const mongoose = require('mongoose');

const CmdtySchema = new mongoose.Schema({
    cmdtyID: {
        type: String,
        required: [true, 'Please add a custom id']
    },
    cmdtyName : {
        type: String,
        required: [true, 'Please add a cmdty name']
    }
})

module.exports = mongoose.model('Cmdty', CmdtySchema);