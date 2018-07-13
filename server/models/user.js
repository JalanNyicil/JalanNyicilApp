const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
  name:String,
  email:String,
  fbid:Number,
  geoHash:String,
  plannedTrips:[{ type: Schema.Types.ObjectId, ref: 'PlannedTrip' }]
})

const User = mongoose.model('User', userSchema);

module.exports = User;