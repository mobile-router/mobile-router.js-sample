;(function() {
	var contactsData = [
		{
			id: 1,
			name: 'Alice',
			items: [
				{
					id: 'a',
					type: 'phone number',
					value: '18888888888'
				},
				{
					id: 'b',
					type: 'email',
					value: 'alice@xxxx.com'
				}
			]
		},
		{
			id: 42,
			name: 'Blob',
			items: [
				{
					id: 'a',
					type: 'blog',
					value: 'http://blog.aijc.net'
				},
				{
					id: 'b',
					type: 'fax',
					value: '555-999-9999'
				}
			]
		},
		{
			id: 123,
			name: 'Eve',
			items: [
				{
					id: 'a',
					type: 'full name',
					value: 'Eve Adamsdottir'
				}
			]
		}
	];
	var currentContact = null;
	var currentContactItem = null;

	app.contactsService = {
		getAll: function() {
			return contactsData;
		},
		currentContact: function(contactId) {
			if (contactId === undefined) {
				return currentContact;
			}
			M.each(contactsData, function(ct) {
				if (ct.id == contactId) {
					currentContact = ct;
					return false;
				}
			});
			return currentContact;
		},
		currentContactItem: function(itemId) {
			if (itemId === undefined) {
				return currentContactItem;
			}
			if (!currentContact) return null;
			M.each(currentContact.items, function(item) {
				if (item.id == itemId) {
					currentContactItem = item;
					return false;
				}
			});
			return currentContactItem;
		}
	};

}());