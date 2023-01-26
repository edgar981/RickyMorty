import React from 'react'
import ReactDOM from 'react-dom'
// import {createRoot} from "react-dom/client";
import './index.css'
import App from './App'
import {BrowserRouter} from "react-router-dom";
import store from './redux/store'
import {Provider} from "react-redux";

// const container = document.getElementById('app');
// const root = createRoot(container);
//
// root.render(<Provider store={store} >
//     <BrowserRouter>
//         <React.StrictMode>
//             <App />
//         </React.StrictMode>
//     </BrowserRouter>
// </Provider>)

ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root"));