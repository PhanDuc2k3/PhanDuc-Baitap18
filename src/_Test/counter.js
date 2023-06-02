// Counter.js

import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleCount}>Count</button>
    </div>
  );
}
