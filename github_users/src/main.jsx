import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GithubUsers from './components/GithubUsers.jsx'
import Toggle from './components/Toggle.jsx'
import Home from './CartPro/Home.jsx'
import Cart from './CartPro/Cart.jsx' 
import Login from './components/Login.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>
  // <Cart />
  <GithubUsers />
  //  <Toggle/>
  // <Home />
  // <Login />
  ,
)
