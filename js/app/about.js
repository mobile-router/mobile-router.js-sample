;(function() {

	function getTemplate() {
		return [
			'<h2>mobile-router.js resources</h2>',
			'<ul>',
				'<li><a href="https://github.com/dolymood/mobile-router.js-sample" target="_blank">Source for this Sample</a></li>',
				'<li><a href="https://github.com/dolymood/mobile-router.js" target="_blank">Github Main Page</a></li>',
				'<li><a href="http://mrdocs.aijc.net" target="_blank">Docs</a></li>',
				'<li><a href="http://mr.aijc.net" target="_blank">Online demo</a></li>',
				'<li><a href="http://mrs.aijc.net" target="_blank">This sample</a></li>',
			'</ul>'
		].join('');
	}
	function onEnter() {
		console.log('about onEnter', arguments, this);
		app.home.checkNav('about');
	}
	function onLeave() {
		console.log('about onLeave', arguments, this);
	}
	function controller() {
		console.log('about controller', arguments, this);
	}

	function destroy() {
		console.log('about destroy', arguments, this);
	}

	app.about = {
		getTemplate: getTemplate,
		onEnter: onEnter,
		onLeave: onLeave,
		controller: controller,
		destroy: destroy
	};

}());