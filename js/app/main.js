$(function() {
	M.router.init([
		// home
		{
			path: '/',
			getTemplate: app.home.getTemplate,
			onEnter: app.home.onEnter,
			onLeave: app.home.onLeave,
			callback: app.home.controller,
			onDestroy: app.home.destroy
		},
		// about
		{
			path: '/about',
			getTemplate: app.about.getTemplate,
			onEnter: app.about.onEnter,
			onLeave: app.about.onLeave,
			callback: app.about.controller,
			onDestroy: app.about.destroy
		},
		// contacts
		{
			path: '/contacts',
			getTemplate: app.contacts.getTemplate,
			onEnter: app.contacts.onEnter,
			onLeave: app.contacts.onLeave,
			callback: app.contacts.controller,
			onDestroy: app.contacts.destroy,

			children: {
				viewsSelector: '.content',
				cacheViewsNum: 2,

				routes: [
					{
						// contacts.detail
						path: '/:contactId',
						getTemplate: app.contact.getTemplate,
						onEnter: app.contact.onEnter,
						onLeave: app.contact.onLeave,
						callback: app.contact.controller,
						onDestroy: app.contact.destroy,

						children: {
							viewsSelector: '.slideContent',
							routes: [
								{
									// contacts.detail.item
									path: '/item/:itemId',
									getTemplate: app.contactItem.getTemplate,
									callback: app.contactItem.controller,
									onDestroy: app.contactItem.destroy
								},
								{
									// contacts.detail.item.edit
									path: '/item/:itemId/edit',
									cacheTemplate: false,
									getTemplate: app.contactEdit.getTemplate,
									callback: app.contactEdit.controller,
									onDestroy: app.contactEdit.destroy
								}
							]
						}
					}
				]
				
			}
		}
	], {
		viewsSelector: '.bdy .container',
		viewClass: 'page-view-float',
		// aniClass: 'turn',
		error: function() {
			M.router.navigate('/');
		}
	});

	M.router.on('routeChangeStart', function() {
		console.log('routeChangeStart', arguments);
	});

	M.router.on('routeChangeEnd', function() {
		console.log('routeChangeEnd', arguments);
	});

	M.history.start();
	M.history.on('change', function(type, state, oldState) {
		console.log('history', type, state, oldState);
	});
});