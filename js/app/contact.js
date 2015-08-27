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
		var id = this.params.contactId;
		var contact = app.contactsService.currentContact(id);
		return [
			'<h2>' + contact.name + '</h2>',
			'<ul>' + buildItems(contact) + '</ul>',
			'<div class="slideContent"></div>',
		].join('');
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
	}
	function destroy() {
		console.log('contact destroy', arguments, this);
	}

	app.contact = {
		getTemplate: getTemplate,
		onEnter: onEnter,
		controller: controller,
		onLeave: onLeave,
		destroy: destroy
	};

}());