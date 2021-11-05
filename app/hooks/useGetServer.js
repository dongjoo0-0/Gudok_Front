import React, {useState, useEffect} from 'react';
import axios from 'axios';

// convert object id number to string to identify objects.
const convertIdToString = (object) => {
  object["id"] = object.id.toString();
  return object;
}

export function useGetServer(address) {
  const [posts, setPosts] = useState();
  // address: String that represents server address.
  useEffect(() => {
    axios
      .get(address)
      .then(response => {
        setPosts(response.data.posts.map(item => convertIdToString(item)));
        console.log("Finished loading posts");
      })
      .catch(error => {
        console.log(error);
        alert(error.message);
      });
  }, []);

  return posts;
};