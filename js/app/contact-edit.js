;(function() {

	function getTemplate() {
		var contactItem = app.contactsService.currentContactItem();
		return [
			'<h3>' + contactItem.type + '<a href="#">Done</a></h3>',
			'<input type="text" value="' + contactItem.value + '">'
		].join('');
	}
	function controller() {
		console.log('contactEdit controller', arguments, this);
		if (this.cached) return;
		var path = this.path;
		path = path.replace('/edit', '');
		var ele = $(this.element);
		var contactItem = app.contactsService.currentContactItem();
		ele.find('a').on('click', function(e) {
			e.preventDefault();
			contactItem.value = ele.find('input').val();
			M.router.navigate(path, {
				cacheTemplate: false
			});
			return false;
		});
	}

	function destroy() {
		console.log('contactEdit destroy', arguments, this);
	}

	app.contactEdit = {
		getTemplate: getTemplate,
		controller: controller,
		destroy: destroy
	};

}());