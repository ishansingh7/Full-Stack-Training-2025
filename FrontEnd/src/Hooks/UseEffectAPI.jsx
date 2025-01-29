import { useState, useEffect } from 'react';
import axios from 'axios';

const UseEffectApi = () => {
  var [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        console.log(res);
        setPost(res.data); 
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1> This page is meant for useEffect with API.</h1>
      <h2>The contents inside my JSONPlaceholder API posts:</h2>
      <ul>
        {post.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseEffectApi;
 