import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import App from './app/app'
import store from './app/store'
import './style/style.scss'

const root = createRoot(document.querySelector('#root'))

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)