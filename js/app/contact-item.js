;(function() {

	function getTemplate() {
		var path = this.path.substr(1);
		var contactItem = app.contactsService.currentContactItem(this.params.itemId);
		return [
			'<h3>' + contactItem.type + '<a href="#" data-href="' + path + '/edit">Edit</a></h3>',
			'<p>' + contactItem.value + '</p>'
		].join('');
	}
	function controller() {
		console.log('contactItem controller', arguments, this);
	}

	function destroy() {
		console.log('contactItem destroy', arguments, this);
	}

	app.contactItem = {
		getTemplate: getTemplate,
		controller: controller,
		destroy: destroy
	};

}());