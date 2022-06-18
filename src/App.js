import { useState } from "react";
import "./App.css";
import UseEffect from "./UseEffect";
import AvatarPreview from "./AvatarPreview";
import ChatApp from "./ChatApp";
import UseRef from "./UseRef";
import UseCallBack from "./UseCallBack";
import UseMemo from "./UseMemo";
import Baitap1 from "./Baitap1";
import TodoList from "./TodoList";
import Usereducer from "./UseReducer/Usereducer";

//const orders = [100, 200, 300];
// const gifts = [
//     'desktop', 'laptop', 'ipad', 'iphone'
// ]
function App() {
  //Click tăng 1 đvị
  /* const [counter, setCounter] = useState(1);
  const handlerCounter = () => {
    setCounter(counter + 1);
    //setCounter(prevState => prevState + 1)
  }

  // Tính tổng orders
  const total = orders.reduce((total, rul) => total + rul);
  const [order, setOrders] = useState(total);
  const handlerTotal = () => {
    setOrders(order + 1)
  }

  //Object users info
  const [info, setInfo] = useState({
    name: 'DangQuy',
    age: 22,
    address: 'Dong Anh, HN',
  })

  const handleUpdateInfo = () => {
    console.log('da')
    setInfo({
      ...info,
      bio: 'Thich mau hong'
    })
  }


  return (
    <div className="App" style = {{padding: 20}}>
        <h1>{counter}</h1>
        <button onClick={handlerCounter}>Click me</button>

        <h2>{order}</h2>
        <button onClick={handlerTotal}>Total Order</button>

        <h3>{JSON.stringify(info)}</h3>
        <button onClick={handleUpdateInfo}>Update Info</button>

    </div>
  ); */

  /*   const [gift, setGift] = useState()
  const randomGifts = () => {
      const index = Math.floor(Math.random() * gifts.length);
      setGift(gifts[index])
  }
  return (
    <div className='App'>
        <h1>{gift || 'Chưa có phần thưởng'}</h1>
        <button onClick={randomGifts}>Lấy thưởng</button>
    </div>
  ) */

  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)}>Toogle</button>
      {/* {show && <UseEffect />} */}
      {/* {show && <AvatarPreview/>} */}
      {/* {show && <ChatApp/>} */}
      {/* {show && <UseRef />} */}
      {/* {show && <UseCallBack/>} */}
      {/* <UseMemo/> */}
      {show && <TodoList />}
      {/* <Baitap1/> */}
      {/* <Usereducer/> */}
    </div>
  );
}

export default App;
