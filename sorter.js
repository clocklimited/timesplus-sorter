module.exports = sort

function sort(items, criteria) {

  // Copy the array first because Array.prototype.sort
  // modifies the array that it sorts
  items = items.slice()

  switch (criteria) {

  case 'Newest':

    return items.sort(function (a, b) {
      return b.liveDate - a.liveDate
    })

  case 'Ending Soon':

    return items.sort(function (a, b) {

      var aDate = getItemDate(a)
        , bDate = getItemDate(b)
        , now = new Date()

      // If A is in the past…
      if (aDate !== null && aDate < now) {
        // … and B is null, B comes first
        if (bDate === null) return 1
        // … and B is in the future, B comes first
        if (bDate > now) return 1
        // … otherwise both are in the past, so most recent comes first
        return bDate - aDate
      }

      // If B is in the past, A must come first, because:
      //   1. If A was in the past, this function would have already returned
      //      from the if block above
      //   2. Whether A is null OR in the future, it should come first,
      //      and these are the only 2 possibilities
      if (bDate !== null && bDate < now) return -1

      // If either date does not exist, the other one must come first because
      // the function only has future (or non-existent) dates at this point
      if (aDate === null) return 1
      if (bDate === null) return -1

      // Both dates are in the future, so soonest comes first
      return aDate - bDate

    })

  case 'Event Date':

    return items.sort(function (a, b) {
      var now = new Date()
      if (a.eventDate < now && b.eventDate < now) return b.eventDate - a.eventDate
      if (a.eventDate < now && b.eventDate > now) return 1
      if (a.eventDate > now && b.eventDate < now) return -1
      return a.eventDate - b.eventDate
    })

  case 'Most Relevant':

    function sortScore(a, b) {
      if (a.score < b.score) return 1
      if (a.score > b.score) return -1

      // The score must be equal
      return 0
    }

    var now = new Date()
      , pastItems = []
      , liveItems = []

    items.forEach(function (item) {
      if (item.expiryDate && item.expiryDate < now) return pastItems.push(item)
      if (item.eventDate && item.eventDate < now) return pastItems.push(item)

      liveItems.push(item)
    })

    return liveItems.sort(sortScore).concat(pastItems.sort(sortScore))

  default:
    throw new Error('Sort criteria "' + criteria + '" is not supported')

  }

}

/*
 * Returns either the item's expiryDate or eventDate,
 * or null if neither exist.
 */
function getItemDate(item) {
  if (item.eventDate) return item.eventDate
  if (item.expiryDate) return item.expiryDate
  return null
}
