module.exports = []

var moment = require('moment')

module.exports.push(
  { _id: 'e1'
  , title: 'QA with David Beckham'
  , liveDate: moment().subtract('weeks', 1).toDate()
  , eventDate: moment().add('days', 1).add('minutes', 1).toDate()
  , score: '0.1'
  })

module.exports.push(
  { _id: 'e2'
  , title: 'Meet the Team'
  , liveDate: moment().subtract('days', 1).add('minutes', 1).toDate()
  , eventDate: moment().add('weeks', 1).toDate()
  , score: '0.9'
  })

module.exports.push(
  { _id: 'e3'
  , title: 'An evening with Elvis'
  , liveDate: moment().subtract('years', 45).toDate()
  , eventDate: moment().subtract('years', 44).toDate()
  , score: '1.2'
  })

module.exports.push(
  { _id: 'e4'
  , title: 'Eating with posh'
  , liveDate: moment().subtract('months', 1).add('minutes', 1).toDate()
  , eventDate: moment().subtract('days', 1).toDate()
  , score: '1.6'
  })

module.exports.push(
  { _id: 'e5'
  , title: 'Question Time'
  , liveDate: moment().subtract('hours', 1).toDate()
  , eventDate: moment().add('months', 1).toDate()
  , score: '1'
  })
