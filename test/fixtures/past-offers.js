module.exports = []

var moment = require('moment')

module.exports.push(
  { _id: 'o6'
  , title: 'Last week\'s top offer'
  , liveDate: moment().subtract('weeks', 1).add('minutes', 1).toDate()
  , expiryDate: moment().subtract('days', 1).toDate()
  , score: '2'
  })

module.exports.push(
  { _id: 'o7'
  , title: 'Another past good offer'
  , liveDate: moment().subtract('weeks', 1).toDate()
  , expiryDate: moment().subtract('days', 1).toDate()
  , score: '1.8'
  })
