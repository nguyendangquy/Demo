//UseReducer: Dùng State giải quyết đc thì useReducer cũng giải quyết được và ngược lại. Thường dùng cho tình huống phức tạp
//1. init state: 0
//2. actions: Up(state + 1) / Down(state - 1)
//3. useReducer
//4. dispatch(kích hoạt 1 cái action)
//khi ấn dispatch lấy cái action DOWN_ACTION này sau đấy gọi hàm reducer().
import React from 'react'
import {useReducer} from 'react'
function Usereducer() {
    //initstate
    const initState = 0
    //actions
    const UP_ACTION = 'up'
    const DOWN_ACTION = 'down'
    //reducer: là 1 hàm nhận vào state hiện tại và 1 cái hành động. trả về state mới
  const reducer = (state, action) => {
      console.log('running action')
    switch(action) {
        case UP_ACTION:
            return state + 1 // lấy state cũ +1 trả về state mới
        case DOWN_ACTION:
            return state - 1
        default: //khuyến cáo sử dụng default cho switch case
            throw new Error('Invalid action')
    }
  }
  const [count, dispatch] = useReducer(reducer, initState) // đối số 1: reducer, đs2: initState
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
        <button onClick={() => dispatch(UP_ACTION)}>Up</button>
    </div>
  )
}

export default Usereducer