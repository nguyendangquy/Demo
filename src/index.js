import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import TodoList from './TodoList';
//import TwowayBinding from './TwowayBinding';
import reportWebVitals from './reportWebVitals';
import ReactRouter from './ReactRouter';
import UseContext from './UseContext';

//Fake comment
function emitComent(id) {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`lesson - ${id}`, {
        detail: `Nội dung comment của lesson ${id}`
      })
    )
  }, 2000)
}
emitComent(1)
emitComent(2)
emitComent(3)

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <TwowayBinding/> */}
    {/* <TodoList/> */}
    {/* <UseContext/> */}
    {/* <Router>
      <ReactRouter/>
    </Router> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
