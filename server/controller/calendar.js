var gcal     = require('google-calendar');
// var google_calendar = new gcal.GoogleCalendar('AIzaSyDFJ6u0YG1M5geWkmpDI4FsKsNTh96-OoE');
// console.log(google_calendar);
var google_calendar = new gcal.GoogleCalendar('CKjW8-zymdwCEhZwYW5nZ2lobWFyaW9AZ21haWwuY29t')
console.log(google_calendar)

// google_calendar.calendarList.list(function(err, calendarList) {
  

  
//   google_calendar.events.list(calendarId, function(err, calendarList) {
    
  
//   });
// });

class Controller{

    static getCal(req,res){
        google_calendar.calendarList.list(function(err,cal){
            res.json(cal)
        })
    }

}


// var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
// var passport = require('passport');
// var gcal     = require('google-calendar');
 
// passport.use(new GoogleStrategy({
//     clientID: config.consumer_key,
//     clientSecret: config.consumer_secret,
//     callbackURL: "http://localhost:8082/auth/callback",
//     scope: ['openid', 'email', 'https://www.googleapis.com/auth/calendar'] 
//   },
//   function(accessToken, refreshToken, profile, done) {
    
//     //google_calendar = new gcal.GoogleCalendar(accessToken);
    
//     return done(null, profile);
//   }
// ));




module.exports = Controller