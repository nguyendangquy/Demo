import {useMemo, useState, useRef} from 'react'
//useMemo: tránh thực hiện lại 1 logic không cần thiết => tăng tính hiệu năng ứng dụng
function UseMemo () {
    const [name, setName] = useState() 
    const [price, setPrice] = useState()
    const [products, setProducts] = useState([])
    const nameRef = useRef()
    const handleAdd = () => {
        setProducts([...products, { //set cho n mảng mới giải product cũ vào và thêm sản phẩm {} ở sau.
            name,
            price: Number(price) //chuyển thành kiểu số
        }])
        setName('')
        setPrice('')
        nameRef.current.focus()
    }
    const total = useMemo(() => {
        const result = products.reduce((result, prod) => {
            console.log('Tính toán lại')
            return result + prod.price
        },0)
        return result
    }, [products])
    return (
        <div style={{padding: '20px'}}>
            <input
                ref={nameRef}
                value={name}
                placeholder='Enter name'
                onChange={(e) => setName(e.target.value)} 
            />
            <br/>
            <input
                value={price}
                placeholder='Enter price' 
                onChange={(e) => setPrice(e.target.value)} 
            />
            <br/>
            total: {total}
            <br/>
            <button onClick = {handleAdd}>Add</button>
            <ul>
                {
                    products.map((product, index) => (
                        <li key = {index}>{product.name} - {product.price}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default UseMemo