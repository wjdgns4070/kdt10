import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AxiosEx = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // API 요청을 보내는 함수
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // 함수 호출
    fetchData();
  }, []); // 빈 배열은 컴포넌트가 마운트될 때 한 번만 실행

  return (
    <div>
      <h1>JSONPlaceholder Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.userId}>{post.id}.{post.title}
          <br />{post.body}<br /></li>
        ))}
      </ul>
    </div>
  );
};

export default AxiosEx;
