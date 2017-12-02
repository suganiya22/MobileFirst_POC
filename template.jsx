export default ({ markup, helmet,preloadedState}) => {
	return `<!doctype html>
<html ${helmet.htmlAttributes.toString()}>
<head>
	${helmet.title.toString()}
	${helmet.meta.toString()}
	${helmet.link.toString()}
	<link rel="stylesheet" href="https://cdn.rawgit.com/twbs/bootstrap/48938155eb24b4ccdde09426066869504c6dab3c/dist/css/bootstrap.min.css"/>
</head>
<body style="width:100%; height: auto;padding:20px; background-color:#e2e8ec;" ${helmet.bodyAttributes.toString()}>
	<div  id="root">${markup}</div>
	<script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
      </script>
	<script src="/static/client.js" async></script>
</body>
</html>`;
};