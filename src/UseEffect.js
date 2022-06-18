import { useEffect, useState } from "react";

//Mounted đưa 1 component vào để sử dụng, UnMounted gỡ nó ra k sd nữa
//1. Callback luôn được gọi sau khi component được mounted
//2. Cleanup Func luôn dc gọi trước khi component unmounted (để dọn dẹp dữ liệu trong bộ nhớ, tránh bị dò rỉ bộ nhớ)
//3. Cleanup Func luôn dc gọi trước khi callback đc gọi (trừ lần mounted)

//1. useEffect (callback)
// - Gọi callback sau khi component được re-render
// - Gọi callback sau khi component thêm element vào DOM
//2. useEffect (callback, [])
// - Chỉ gọi 1 lần sau khi component được mounted
//3. useEffect (callback, [deps])
// - Gọi callback mỗi khi deps được thay đổi

const tabs = ["posts", "comments", "albums"];
function UseEffect() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  const [showGotoTop, setShowGotoTop] = useState(false);
  // const [time, setTime] = useState(180)

  // useEffect(() => {
  //     document.title = title
  // })

  //Dùng đối số thứ 2: [] Không bị gọi nhiều API liên tục, chỉ gọi 1 lần
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [type]);

  useEffect(() => {
    const handleScorll = () => {
      if (window.scrollY >= 500) {
        setShowGotoTop(true);
      } else {
        setShowGotoTop(false);
      }
    };
    window.addEventListener("scroll", handleScorll);
    //Cleanup Function
    return () => {
      window.removeEventListener("scroll", handleScorll);
    };
  }, []);

  const handleGotoBack = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // useEffect(() => {
  //     const timerId =  setInterval(() => {
  //         setTime(prevTime => prevTime - 1)
  //     }, 1000)
  //     return () => clearInterval(timerId)

  // }, [])
  return (
    <div style={{ padding: 20 }}>
      {/* <h1 style={{textAlign: 'center'}}>{time}</h1> */}
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setType(tab)}
          style={type === tab ? { color: "#fff", backgroundColor: "#333" } : {}}
        >
          {tab}
        </button>
      ))}
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>
      {showGotoTop && (
        <button
          onClick={handleGotoBack}
          style={{ position: "fixed", right: 20, bottom: 20 }}
        >
          Go to Top
        </button>
      )}

      {console.log(title)}
    </div>
  );
}

export default UseEffect;
