import {Routes, Route, Link} from 'react-router-dom'

import HomePage from './pages/Home'
import NewPage from './pages/News'
import Contact from './pages/Contact'

function ReactRouter() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home page</Link>
                    </li>
                    <li>
                        <Link to="/news">New page</Link>
                    </li>
                    <li>
                        <Link to="/contact">Home page</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path = "/" element = {<HomePage/>}/>
                <Route path = "/news" element = {<NewPage/>}/>
                <Route path = "/contact" element = {<Contact/>}/>
            </Routes>
        </div>
    )
}
export default ReactRouter