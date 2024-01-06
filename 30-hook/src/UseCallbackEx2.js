import React, { useState, useEffect, useCallback } from "react";
import axios from 'axios';

function UseCallbackEx2() {
  // 상태 변수 post와 postId를 정의합니다.
  const [post, setPost] = useState({});
  const [postId, setPostId] = useState(1);

  // useCallback을 사용하여 메모이제이션(캐싱)된 함수 getPost를 선언합니다.
  const getPost = useCallback(async () => {
    console.log('data fetching');

    // axios를 사용하여 postId에 해당하는 포스트를 가져옵니다.
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    
    // 가져온 포스트 데이터를 상태 변수 post에 업데이트합니다.
    setPost(res.data);
  }, [postId]); // 의존성 배열에 postId를 추가하여 postId가 변경될 때마다 함수를 재생성합니다.

  // useEffect를 사용하여 컴포넌트가 처음 렌더링될 때 getPost 함수를 호출합니다.
  useEffect(() => {
    getPost();
  }, [getPost]); // 의존성 배열에 getPost를 추가하여 getPost 함수가 변경될 때마다 useEffect가 다시 실행됩니다.

  // JSX를 반환합니다.
  return (
    <>
      <h1>useCallback ex2</h1>
      {/* 포스트의 id가 있으면 포스트의 제목을, 없으면 '로딩중'을 표시합니다. */}
      {post.id ? post.title : '로딩중'}
    </>
  );
}

export default UseCallbackEx2;
