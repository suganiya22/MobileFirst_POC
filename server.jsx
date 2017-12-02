import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import {Helmet} from "react-helmet";
import Template from './template';
import {block} from "./src/components/json";
import App from './App';

export default function serverRenderer({ clientStats, serverStats }) {
	return (req, res, next) => {
		const context = {};
		const markup = ReactDOMServer.renderToString(
			<StaticRouter location={ req.url } context={ context }>
				<App  />
			</StaticRouter>
		);
        const helmet = Helmet.renderStatic();
        var myJsonData = JSON.stringify(block);
		res.status(200).send(Template({
			markup: markup,
            helmet: helmet,
            preloadedState:myJsonData
		}));
	};
}