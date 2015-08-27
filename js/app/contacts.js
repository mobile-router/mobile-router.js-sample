;(function() {
	var contactsData = app.contactsService.getAll();
	function buildContacts(len) {
		var ret = '';
		for (var i = 1; i <= len; i++) {
			ret += '<li><a href="contacts/' + contactsData[i - 1].id + '">' + contactsData[i - 1].name + '</a></li>';
		}
		return ret;
	}
	function getTemplate() {
		return [
			'<div class="aside fix">',
				'<ul class="nav nav-list">',
					'<li><a href="contacts">All Contacts</a></li>',
					'<li class="nav-header">Top Contacts</li>',
					buildContacts(2),
				'</ul>',
			'</div>',
			'<div class="content">',
				'<div>',
					'<h2>All Contacts</h2>',
					'<ul>' + buildContacts(3) + '</ul>',
				'</div>',
			'</div>'
		].join('');
	}
	function onEnter() {
		console.log('contacts onEnter', arguments, this);
		app.contacts.checkNav('contacts');
		app.home.checkNav('contacts');
	}
	function onLeave() {
		console.log('contacts onLeave', arguments, this);
	}
	function controller() {
		console.log('contacts controller', arguments, this);
	}

	function destroy() {
		console.log('contacts destroy', arguments, this);
	}

	app.contacts = {
		getTemplate: getTemplate,
		onEnter: onEnter,
		controller: controller,
		onLeave: onLeave,
		destroy: destroy,

		checkNav: function(href) {
			var nav = $('.aside .nav-list');
			nav.find('a').removeClass('active');
			href && nav.find('a[href="' + href + '"]').addClass('active');
		}
	};

}());