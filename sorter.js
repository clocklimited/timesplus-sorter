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
      if (aDate < now) {
        // … and B is undefined, B comes first
        if (typeof bDate === 'undefined') return 1
        // … and B is in the future, B comes first
        if (bDate > now) return 1
        // … otherwise both are in the past, so most recent comes first
        return bDate - aDate
      }

      // If B is in the past, A must come first, because:
      //   1. If A was in the past, this function would have already returned
      //      from the if block above
      //   2. Wether A is undefined OR in the future, it should come first,
      //      and these are the only 2 possibilities
      if (bDate < now) return -1

      // If either date does not exist, the other one must come first because
      // the function only has future (or non-existent) dates at this point
      if (typeof aDate === 'undefined') return 1
      if (typeof bDate === 'undefined') return -1

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

  }

}

/*
 * Returns either the item's expiryDate or eventDate,
 * or undefined if neither exist.
 */
function getItemDate(item) {
  return item.expiryDate || item.eventDate
}
