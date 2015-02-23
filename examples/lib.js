/*
  Example
*/

var libcloud = require("./app.js") // You will use: require("node-librarycloud-api")

// Create the search criteria
var search = {
  filter: ["keyword:finance"],
  limit: 15,
  start: 20
}

// Search
libcloud.item.search(search,function(res){
  console.log(res)

  // Take the first record from the search and GET it
  libcloud.item.get(res.docs[0].id,function(res)
   {
     console.log(res)
   })
})
