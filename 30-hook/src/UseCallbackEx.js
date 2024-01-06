import React, { useState, useCallback } from 'react';

function UseCallbackEx() {
  const [text, setText] = useState('');

  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  return (
    <>
      <h1>useCallback ex</h1>
      <input type="text" onChange={onChangeText} />
    </>
  );
}

export default UseCallbackEx;
