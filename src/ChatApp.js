import { useEffect, useState } from "react";

function ChatApp() {
    const courses = [
        {
            id: 1,
            name: 'Khoá học ReactJS'
        },
        {
            id: 2,
            name: 'Khóa học Html Css cơ bản'
        },
        {
            id: 3,
            name: 'Khóa học Javascript cơ bản'
        }
    ]
    const [lessonId, setLessonId] = useState(1)
    useEffect(() => {
        const handleComment = ({detail}) => {
            console.log(detail)
        }
        window.addEventListener(`lesson - ${lessonId}`, handleComment)
        return () => {
            window.removeEventListener(`lesson - ${lessonId}`, handleComment)
        }
    }, [lessonId])
        
    return (
        <div style={{padding: 20}}>
            <ul>
                {
                    courses.map(course => (
                        <li
                            key={course.id}
                            style = {{
                                color: lessonId === course.id ? 'red' : '#333'
                            }}
                            onClick = {() => setLessonId(course.id)}
                        >
                            {course.name}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ChatApp