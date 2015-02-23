node-librarycloud-api
=====================
A simple way to consume the LibraryCloud api at http://librarycloud.harvard.edu

## Installation

  'npm install node-librarycloud-api'

## Usage

*Currently, only the Item API is available.

*The API is not intended to be used to acquire Harvard data sets in their entirety. Not only is that an inefficient way to gather the data, it can also have an adverse affect on the performance of the API for others. Note also that the data sets are available for bulk download here: http://openmetadata.lib.harvard.edu/bibdata

'''javascript
// Initialize
var libcloud = require('node-librarycloud-api');
'''

'''javascript
// Create the search criteria
var search = {
  filter: ["keyword:finance"],
  limit: 15,
  start: 20
}
'''

'''javascript
// Search
libcloud.item.search(search,function(res){
  console.log(res)
})
'''

'''javascript
// Get a single record based on id
libcloud.item.get(123456,function(res)
   {
     console.log(res)
   })
'''

## Tests

  npm test

## Contributing

  If you find any flaws or would like to add features, feel free to merge your branch!

## Release History

* 0.0.1 Initial release

## The MIT License (MIT)

Copyright (c) 2015 Tyler Coyner

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
