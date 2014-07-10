var assert = require('assert')
  , offerFixtures = require('./fixtures/offers')
  , eventFixtures = require('./fixtures/events')
  , sort = require('../')

describe('Sorter', function () {

  it('should return results in a new array', function () {
    var fixtures = offerFixtures.slice(0)
      , sorted = sort(fixtures, 'Newest')
    sorted.pop()
    assert.equal(sorted.length, fixtures.length - 1)
  })

  it('should throw an error if the sort criteria is not supported', function () {
    assert.throws(function () {
      sort([], 'Jim')
    })
  })

  describe('sorting offers', function () {

    describe('by criteria: "Newest"', function () {

      it('should order by most recent liveDate', function () {

        var ordered = sort(offerFixtures, 'Newest')
          , expectedOrder = [ 'o5', 'o2', 'o1', 'o3', 'o4' ]

        ordered.forEach(function (item, i) {
          assert.equal(item._id, expectedOrder[i], 'offer ' + item._id + ' is not expected at index ' + i)
        })

        assert.equal(ordered.length, expectedOrder.length)

      })

    })

    describe('by criteria: "Ending Soon"', function () {

      it('should order by most soon expiryDate', function () {

        var ordered = sort(offerFixtures, 'Ending Soon')
          , expectedOrder = [ 'o1', 'o5', 'o2', 'o4', 'o3' ]

        ordered.forEach(function (item, i) {
          assert.equal(item._id, expectedOrder[i], 'offer ' + item._id + ' is not expected at index ' + i)
        })

        assert.equal(ordered.length, expectedOrder.length)

      })

    })

  })

  describe('sorting events', function () {

    describe('by criteria: "Event Date"', function () {

      it('should order by most soon eventDate', function () {

        var ordered = sort(eventFixtures, 'Event Date')
          , expectedOrder = [ 'e1', 'e2', 'e5', 'e4', 'e3' ]

        ordered.forEach(function (item, i) {
          assert.equal(item._id, expectedOrder[i], 'event ' + item._id + ' is not expected at index ' + i)
        })

        assert.equal(ordered.length, expectedOrder.length)

      })

    })

    describe('by criteria: "Newest"', function () {

      it('should order by most recent liveDate', function () {

        var ordered = sort(eventFixtures, 'Newest')
          , expectedOrder = [ 'e5', 'e2', 'e1', 'e4', 'e3' ]

        ordered.forEach(function (item, i) {
          assert.equal(item._id, expectedOrder[i], 'event ' + item._id + ' is not expected at index ' + i)
        })

        assert.equal(ordered.length, expectedOrder.length)

      })

    })

  })

  describe('sorting mixed offers and events', function () {

    describe('by criteria: "Newest"', function () {

      it('should order by most recent liveDate', function () {

        var fixtures = eventFixtures.concat(offerFixtures)
          , ordered = sort(fixtures, 'Newest')
          , expectedOrder = [ 'o5', 'e5', 'e2', 'o2', 'o1', 'e1', 'o3', 'e4', 'o4', 'e3' ]

        ordered.forEach(function (item, i) {
          assert.equal(item._id, expectedOrder[i], 'item ' + item._id + ' is not expected at index ' + i)
        })

        assert.equal(ordered.length, expectedOrder.length)

      })

    })

    describe('by criteria: "Ending Soon"', function () {

      it('should order by most soon expiryDate/eventDate, then no expiryDate, then past events', function () {

        var fixtures = eventFixtures.concat(offerFixtures)
          , ordered = sort(fixtures, 'Ending Soon')
          , expectedOrder = [ 'o1', 'e1', 'o5', 'o2', 'e2', 'o4', 'e5', 'o3', 'e4', 'e3' ]

        ordered.forEach(function (item, i) {
          assert.equal(item._id, expectedOrder[i], 'item ' + item._id + ' is not expected at index ' + i)
        })

        assert.equal(ordered.length, expectedOrder.length)

      })

      it('should sort non-expiring offer before a past event', function () {

        var ordered = sort([ offerFixtures[2], eventFixtures[2], offerFixtures[2]  ], 'Ending Soon')
          , expectedOrder = [ 'o3', 'o3', 'e3' ]

        ordered.forEach(function (item, i) {
          assert.equal(item._id, expectedOrder[i], 'item ' + item._id + ' is not expected at index ' + i)
        })

        assert.equal(ordered.length, expectedOrder.length)

      })

    })

  })

})
