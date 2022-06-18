import {memo} from 'react'

//Xử lý component tránh bị re-render không cần thiết
function ReactMemo({onIncrease }) {
    console.log('re-render')
    return (
        <div>
            <h2>React memo</h2>
            <button onClick = {onIncrease}>Click</button>
        </div>
    )
}

export default memo (ReactMemo)