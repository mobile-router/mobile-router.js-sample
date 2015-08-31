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
		{
			path: '/redirectTo/:rtPath',
			redirectPushState: false,
			redirectTo: function(rtPath) {
				console.log('redirectTo', arguments, this);
				return '/' + rtPath;
			}
		},
		// contacts
		{
			path: '/contacts',
			getTemplate: app.contacts.getTemplate,
			onEnter: app.contacts.onEnter,
			onLeave: app.contacts.onLeave,
			callback: app.contacts.controller,
			onDestroy: app.contacts.onDestroy,

			redirectTo: '/contacts/list',
			redirectPushState: false,

			children: {
				viewsSelector: '.content',
				cacheViewsNum: 1,

				routes: [
					{
						// all contacts
						path: '/list',
						getTemplate: app.list.getTemplate,
						onEnter: app.list.onEnter,
						onLeave: app.list.onLeave,
						callback: app.list.controller,
						onDestroy: app.list.onDestroy
					},
					{
						// contacts.detail
						path: '/:contactId',
						getTemplate: app.contact.getTemplate,
						onActive: app.contact.onActive,
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
		cacheViewsNum: 2,
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