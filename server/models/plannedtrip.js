const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const plannedTripSchema = new Schema ({
  name:String,
  UserId: { type: Schema.Types.ObjectId, ref: 'User' },
  EventId:Number,
})

const User = mongoose.model('User', userSchema);

module.exports = User;