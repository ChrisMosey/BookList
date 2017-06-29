import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider } from "react-redux";

import { Hello } from "./components/Hello";
import Books from "./components/Books";
import store from "./store";

const app: Element = document.getElementById("app");

ReactDOM.render(
	<Provider store={store}>
		<Books />
	</Provider>
, app);