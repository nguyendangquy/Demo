import {useState, createContext} from 'react'
import Content from './context/Content'
import './context/Theme.css'

export const ThemeContext = createContext();

function UseContext() {
    const [theme, setTheme] = useState('dark')
    const toggleTheme = () => {
        setTheme(theme=== 'dark' ? 'Light' : 'dark')
    }
    return (
        <ThemeContext.Provider value={theme}>
            <div>
                <button onClick={toggleTheme}>Toggle theme</button>
                <Content/>
            </div>

        </ThemeContext.Provider>
    )
}
export default UseContext