import React from 'react'
import Routes from './Routes'
import { Provider } from 'react-redux'
import GlobalStyle from './styleGlobal'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Store from './store'
function App () {
  return (
    <div className="App">
      <GlobalStyle />
      <Provider store={Store}>
        <ToastContainer />
        <Routes />
      </Provider>
    </div>
  )
}

export default App
