import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import StateProvider from './StateProvider'
import Login from './components/Login'
import AppLayout from './components/AppLayout'
import "../node_modules/video-react/dist/video-react.css";
import 'antd/dist/antd.min.css';

const App = () => (
	<>

	<Switch>
		<Route path="/login" component={Login}/>
		<Route path="/" component={AppLayout}/>
	</Switch>
	</>
);

const AppContainer = () => (
	<StateProvider>
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	</StateProvider>
);

export default AppContainer;