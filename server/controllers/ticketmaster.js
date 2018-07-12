const ticketmaster = require('ticketmaster');

class TicketMaster {
  static allEvent (req, res) {
    ticketmaster('UJoSGON0AX0CleYYdOyGNRY4rDmKpuSF').discovery.v2.event.all()
    .then( (result) => {
    
      res
        .status(200)
        .json(result)
      // "result" is an object of Ticketmaster events information
    });

  }
}

module.exports = TicketMaster