import { useRef, useState } from "react";
// Lưu được giá trị bất kỳ qua một tham chiếu bên ngoài component

function UseRef() {
  const [number, setNumber] = useState(60);
  let timerID = useRef();

  const handleStart = () => {
    timerID.current = setInterval(() => {
      setNumber((prev) => prev - 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(timerID.current);
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default UseRef;
