import React, { Component } from 'react';
import Helmet from "react-helmet";
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import homepageStyles from './homepage.css';
import HeroComponent from './src/components/HeroComponent';
import {block} from './src/components/json';

export default class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="container">
			    <Helmet
					htmlAttributes={{lang: "en", amp: undefined}} 
					titleTemplate="%s | React App"
					titleAttributes={{itemprop: "name", lang: "en"}}
					meta={[
						{name: "description", content: "IsomorphicAZ_Apps"},
						{name: "viewport", content: "width=device-width, initial-scale=1"},
					]}
				/>
				<Switch>
					<Route path="/carouselBanner" render={() => (<HeroComponent timeoutTime={5000} {...block} />)} />
				</Switch>
			</div>
		);
	}
}