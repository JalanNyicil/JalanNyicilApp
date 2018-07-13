
const ticketmaster = require('ticketmaster');

const axios = require('axios')



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

  static findEvent(req, res) {
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
}

module.exports = TicketMaster