import React from "react"
import { render } from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
// import { PersistGate } from "redux-persist/integration/react"

import App from "./App"

// import { store, persistor } from "./store/store"
import { store } from "./store/store"

import "./index.scss"

const rootElement = document.getElementById("root")

render(
	<React.StrictMode>
		<Provider store={store}>
			{/* <PersistGate loading={null} persistor={persistor}> /\/\ disabled for redux-toolkit */}
			<BrowserRouter>
				<App />
			</BrowserRouter>
			{/* </PersistGate> /\/\ disabled for redux-toolkit */}
		</Provider>
	</React.StrictMode>,
	rootElement,
)
