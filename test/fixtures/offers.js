module.exports = []

var moment = require('moment')

module.exports.push(
  { _id: 'o1'
  , title: 'Hypnotist eBook'
  , liveDate: moment().subtract('weeks', 1).add('minutes', 1).toDate()
  , expiryDate: moment().add('days', 1).toDate()
  })

module.exports.push(
  { _id: 'o2'
  , title: 'Win £1,000'
  , liveDate: moment().subtract('days', 1).toDate()
  , expiryDate: moment().add('weeks', 1).toDate()
  })

module.exports.push(
  { _id: 'o3'
  , title: 'Eat Out'
  , liveDate: moment().subtract('weeks', 2).toDate()
  , expiryDate: null
  })

module.exports.push(
  { _id: 'o4'
  , title: 'Win an iPad'
  , liveDate: moment().subtract('months', 1).toDate()
  , expiryDate: moment().add('weeks', 2).toDate()
  })

module.exports.push(
  { _id: 'o5'
  , title: 'Book for £2.99'
  , liveDate: moment().subtract('hours', 1).add('minutes', 1).toDate()
  , expiryDate: moment().add('days', 4).toDate()
  })
