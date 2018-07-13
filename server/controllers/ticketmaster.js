const ticketmaster = require('ticketmaster');
const axios = require('axios')
const jwt = require('jsonwebtoken');
const User = require('../models/user')

class TicketMaster {
  static allEvent(req, res) {
    console.log(process.env.TM_KEY)
    axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${process.env.TM_KEY}`)
      .then(response => {
        res
          .status(200)
          .json(response.data)
      })

      .catch(err => {
        res
          .status(401)
          .json(err)
      })
  }

  static allVenue(req, res) {
    axios.get(`https://app.ticketmaster.com/discovery/v2/venues.json?apikey=${process.env.TM_KEY}`)
      .then(response => {
        // console.log(response)
        res
          .status(200)
          .json(response.data)
      })

      .catch(err => {
        res
          .status(401)
          .json(err)
      })
  }

  static allAttractions(req, res) {
    axios.get(`https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=${process.env.TM_KEY}`)
      .then(response => {
        res
          .status(200)
          .json(response.data)
      })

      .catch(err => {
        res
          .status(401)
          .json(err)
      })
  }

  static findEvent(req, res) {
    let token = req.headers.tokenUser;

    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    User.findOne({
      id : decoded.id
    })
      .then(userData => {
        axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?geoPoint=${userData.geoHash}&size=${req.body.size}&radius=${req.body.radius}&countryCode=US&apikey=${process.env.TM_KEY}`)
          .then(response => {
            res
              .status(200)
              .json(response.data)
          })
    
          .catch(err => {
            res
              .status(401)
              .json(err)
          })

      })
  }
}

module.exports = TicketMaster