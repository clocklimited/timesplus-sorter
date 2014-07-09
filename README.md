# timesplus-sorter

Sorts TimesPlus offers and events by named ordering criteria

## Installation

    npm install --save timesplus-sorter

## Usage

## var sort = require('timesplus-sorter')

## sort(items, criteria)

`items` should be an array of TimesPlus offers/events that have a `liveDate` and
either an `eventDate` or an `expiryDate`.

`criteria` can be one of `'Newest'`, `'Ending Soon'`, `'Event Date'`.

Returns a new array.

#### 'Newest'

Orders items by the nearest future `liveDate`.

#### 'Ending Soon'

Orders items by the nearest future `expiryDate` or `eventDate`, then items with no `expiryDate`, then past events.

#### 'Event Date'

Orders items by the nearest future `eventDate`.

## Credits
Built by developers at [Clock](http://clock.co.uk).

## Licence
Licensed under the [New BSD License](http://opensource.org/licenses/bsd-license.php)
