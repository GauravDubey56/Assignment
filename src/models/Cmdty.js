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
const Cmdty = mongoose.model('Cmdty', CmdtySchema);
Cmdty.prototype.checkNameId = async function (cmdtyID, cmdtyName){
    const cmdtyObj = await Cmdty.findOne({
        cmdtyID, cmdtyName
    })
    if(cmdtyObj) return true;
    else return false;
}
module.exports = Cmdty;