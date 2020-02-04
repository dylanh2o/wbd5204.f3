import React from 'react';
import {Link, Redirect, Route, Switch} from 'react-router-dom';
import {useStateValue} from "../StateProvider";
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import Galerie from '../pages/Galerie';
import Contact from '../pages/Contact';
import {AnimatePresence} from "framer-motion";


const AppLayout = () => {
	const [{user}] = useStateValue();

	return user === null ? <Redirect to="/login"/> : (
		<>
			<div class="Menu">
				<Link to="/">Home</Link>
				&nbsp;|&nbsp;
				<Link to="/Blog">Blog</Link>
				&nbsp;|&nbsp;
				<Link to="/Galerie">Galerie</Link>
				&nbsp;|&nbsp;
				<Link to="/contact">Contact</Link>
			</div>
			<Route
				render={({location}) => (
					<AnimatePresence initial={false} exitBeforeEnter>
						<Switch location={location} key={location.pathname}>
							<Route path="/" exact component={Home}/>
							<Route path="/Blog" component={Blog}/>
							<Route path="/Galerie" component={Galerie}/>
							<Route path="/Contact" component={Contact}/>
						</Switch>
					</AnimatePresence>
				)}
			/>

		</>
	);
};

export default AppLayout;