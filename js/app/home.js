;(function() {
	var contactsData = app.contactsService.getAll();
	function getTemplate() {
		return [
			'<h2>Welcome to the mobile-router.js Demo</h2>',
			'<p>Click these links-',
				'<a href="contacts/' + contactsData[0].id + '">' + contactsData[0].name + '</a>',
				' or ',
				'<a href="contacts/' + contactsData[1].id + '">' + contactsData[1].name + '</a>',
			'</p>'
		].join('')
	}
	function onEnter() {
		console.log('home onEnter', arguments, this);
		app.home.checkNav('');
	}
	function onLeave() {
		console.log('home onLeave', arguments, this);
	}
	function controller() {
		$('.header .nav a').removeClass('active');
		console.log('home controller', arguments, this);
	}

	function destroy() {
		console.log('home destroy', arguments, this);
	}

	app.home = {
		getTemplate: getTemplate,
		onEnter: onEnter,
		onLeave: onLeave,
		controller: controller,
		destroy: destroy,
		checkNav: function(href) {
			var navs = $('.header .nav');
			navs.find('a').removeClass('active');
			if (href) {
				navs.find('a[href="' + href + '"]').addClass('active');
			}
		}
	};

}());