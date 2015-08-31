;(function() {
	function buildItems(contact) {
		var ret = '';
		if (!contact) return '<li>is null</li>';
		// type value id
		M.each(contact.items, function(item) {
			ret += '<li><a href="contacts/' + contact.id + '/item/' + item.id + '">' + item.type + '</a></li>';
		});
		return ret;
	}
	function getTemplate() {
		var contact = app.contactsService.currentContact(this.params.contactId);
		return [
			'<h2>' + contact.name + '</h2>',
			'<ul>' + buildItems(contact) + '</ul>',
			'<div class="slideContent"></div>',
		].join('');
	}
	function onActive(contactId) {
		console.log('contact onActive', arguments, this);
	}
	function onEnter(contactId) {
		console.log('contact onEnter', arguments, this);
		app.contacts.checkNav('contacts/' + contactId);
		app.contactsService.currentContact(contactId);
	}
	function controller(contactId) {
		console.log('contact controller', arguments, this);
	}
	function onLeave() {
		console.log('contact onLeave', arguments, this);
		app.contacts.checkNav(' ');
	}
	function destroy() {
		console.log('contact destroy', arguments, this);
	}

	app.contact = {
		getTemplate: getTemplate,
		onActive: onActive,
		onEnter: onEnter,
		controller: controller,
		onLeave: onLeave,
		destroy: destroy
	};

}());