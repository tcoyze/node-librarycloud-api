/*
  The MIT License (MIT)

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
*/

var libcloud = require("./app.js") // You will use: require("node-librarycloud-api")
// Create the search criteria
var search = {
  q: "math",
  limit: 15,
  start: 20
}

// Search
libcloud.item.search(search,function(err, res){
  console.log(res.items[0]);
  console.log(res.items[0].mods.recordInfo)
  // Take the first record from the search and GET it
  // libcloud.item.get(ID_GOES_HERE,function(err, res)
  //  {
  //    console.log("Item...")
  //    console.log(res);
  //    console.log(err);
  //    cb();
  //  })
})

libcloud.collections.search(search,function(err, res){
  console.log(res);
  // Take the first record from the search and GET it
  // libcloud.collections.get(ID_GOES_HERE,function(err, res)
  //  {
  //    console.log("Collections...")
  //    console.log(res);
  //    console.log(err);
  //    cb();
  //  })
})
