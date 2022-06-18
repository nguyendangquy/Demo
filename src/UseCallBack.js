import { useCallback, useState } from "react"
import ReactMemo from "./ReactMemo"

//- Reference type: kiểu dữ liệu tham chiếu(func, object, array):
//Mỗi khi tạo hàm mới sẽ lưu hàm vào bộ nhớ trả ra cái tham chiếu, mỗi một lần tạo hàm mới thì có 1 tham chiếu mới. 
//So sánh địa chỉ ô nhớ chứ k so sánh nội dung.
//- React memo() 
//UseCallback: khi re-render, deps trống sẽ trả lại tham chiếu trước đó. Sử dụng component con React memo thì sd Usecallback

function UseCallBack() {
    const [count, setCount] = useState(0)

    const handleIncrease = useCallback(() => {
        setCount(prevCount => prevCount + 1)
    }, [])

    return (
        <div>
            <ReactMemo onIncrease = {handleIncrease} />
            <h1>{count}</h1>
            
        </div>
    )
}

export default UseCallBack