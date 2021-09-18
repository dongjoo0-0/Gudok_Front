export default getPosts = (limit, offset, search, subscribe) => {
  const axios = require('axios');

  // test data
  const data = [
    {
      "post": {
        "id" : "3",
        "custom_name" : "web develop",
        "link" : "http://www.~~~~",
        "title" : "How To Use MySQL",
        "content" : "MYSQL belongs to relational DBMS~~~~~~",
        "image" : "image",
        "updatedAt" : "2021-08-10 15:07:17.546598",
      }
    },
    {
      "post": {
        "id" : "4",
        "custom_name" : "sports",
        "link" : "http://www.~~~~",
        "title" : "Can Arsenal be in the top 4 in the EPL?",
        "content" : "Now Arsenal is ranked 20th",
        "image" : "image",
        "updatedAt" : "2021-08-27 15:07:17.546598",
      }
    }
  ]
  // distructuring data
  const posts = data.map((item) => item.post);
  /*
  axios
    .get("/post", 
      {params: {
        limit: limit,
        offset: offset, 
        search: search, 
        subscribe: subscribe}})
    .then(response => {
      console.log(response)
      return response.posts
    })
    .catch(function(error) {
      console.log(error)
    })
*/
  return posts
};