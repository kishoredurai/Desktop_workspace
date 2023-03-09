import React, { useEffect, useRef } from 'react';

function Test() {
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket('ws://localhost:5000/dashboard/sysinfo');

    ws.current.onopen = () => {
      console.log('WebSocket connected');
    };

    ws.current.onclose = () => {
      console.log('WebSocket disconnected');
    };

    ws.current.onmessage = (event) => {
      console.log(event.data);
    };

    return () => {
      ws.current.close();
    };
  }, []);

  const sendMessage = (message) => {
    ws.current.send(message);
  };

  return (
    <div>
      <button onClick={() => sendMessage('Hello!')}>Send Message</button>
    </div>
  );


}

export default Test;
