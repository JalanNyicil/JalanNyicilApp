const FB = require('fb');
const User = require('../models/user')
const jwt = require('jsonwebtoken');

class UserController {
  static register(req, res) {
    let token = req.body.token

    FB.setAccessToken(token);

    FB.api('me', { fields: ['id', 'name', 'email'], access_token: token }, (response) => {
      User.findOne({
        email: response.email
      })

        .then(userData => {
          if (userData === null) {
            User.create({
              name: response.name,
              email: response.email,
              fbid: response.id,
            })
  
              .then(resultInput => {
                let tokenUser = jwt.sign({ id: resultInput._id, name: resultInput.name, email: resultInput.email }, process.env.SECRET_KEY)
  
                res
                  .status(200)
                  .json(tokenUser)
              })

              .catch (err => {
                res
                  .status(400)
                  .json(err)
              })
          }
          else {
            let tokenUser = jwt.sign({ id: resultInput._id, name: resultInput.name, email: resultInput.email }, process.env.SECRET_KEY)
  
                res
                  .status(200)
                  .json(tokenUser)
          }
        })

        .catch(err => {
          res
            .status(400)
            .json(err)
        })
    });
  }
}

module.exports = UserController
