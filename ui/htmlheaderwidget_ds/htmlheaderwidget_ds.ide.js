TW.IDE.Widgets.htmlheaderwidget_ds = function () {

	this.widgetIconUrl = function () {
		return '../Common/extensions/HTMLHeaderWidget/ui/htmlheaderwidget_ds/default_widget_icon.ide.png';
	};

	this.widgetProperties = function () {
		return {
			'name': 'HTMLHeaderWidget',
			'description': '',
			'category': ['Common'],
			'properties': {
				'Title': {
					'description': 'Document title to be used',
					'isBindingTarget': true,
					'isEditable': true,
					'baseType': 'STRING'
				},
				'Favicon': {
					'description': 'Favicon to be used. Should be square and not too big (to be a normal favicon).',
					'isBindingTarget': true,
					'isEditable': true,
					'baseType': 'IMAGELINK',
				}
			}
		}
	};

	this.widgetServices = function () {
		return {
			'SetFavicon': { 'warnIfNotBound': false },
			'SetDocumentTitle': { 'warnIfNotBound': false }
		};
	};

	this.afterSetProperty = function (name, value) {
		var refreshHtml = false;
		switch (name) {
			case "DisplayName":
				refreshHtml = true;
				break;
			default:
				break;
		}
		return refreshHtml;
	};

	this.validate = function () {
		var result = [];

		return result;
	};

	this.renderHtml = function () {
		// return any HTML you want rendered for your widget
		// If you want it to change depending on properties that the user
		// has set, you can use this.getProperty(propertyName).
		return '<div class="widget-content widget-htmlheaderwidget_ds">' +
			'<span class="htmlheaderwidget_ds-property">' + this.properties.DisplayName + " - invisible @ runtime" + '</span>' +
			'</div>';
	};

	this.afterRender = function () {
		// NOTE: this.jqElement is the jquery reference to your html dom element
		// 		 that was returned in renderHtml()
		// get a reference to the value element
		valueElem = this.jqElement.find('.htmlheaderwidget_ds-property');
	};

};