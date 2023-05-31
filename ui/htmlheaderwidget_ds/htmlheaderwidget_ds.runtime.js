TW.Runtime.Widgets.htmlheaderwidget_ds = function () {

	this.renderHtml = function () {
		return '<div class="widget-content widget-htmlheaderwidget_ds" style="display:none;"></div>';
	};

	this.afterRender = function () {
		// if we never show at runtime, we should hide ourselves completely - Safari and Firefox will show scrollbars if the container is too narrow / short
		this.jqElement.hide();
		this.jqElement.closest('.widget-bounding-box').hide();
	};

	this.updateFavicon = function () {
		var image = this.getProperty("Favicon");
		var isValid = image && !TW.IDE.isImageLinkUrl(image);
		if (isValid) {
			var imageUrl = "/Thingworx/MediaEntities/" + TW.encodeEntityName(image);

			// taken from https://stackoverflow.com/a/58947269
			var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
			link.type = 'image/png';
			link.rel = 'shortcut icon';
			link.href = imageUrl;
			document.getElementsByTagName('head')[0].appendChild(link);
		}
	}

	this.setDocumentTitle = function () {
		var title = this.getProperty("Title");
		if (title) {
			document.title = title;
		}
	}

	this.updateProperty = function (updatePropertyInfo) {
		switch (updatePropertyInfo.TargetProperty) {
			case 'Favicon':
				this.setProperty('Favicon', updatePropertyInfo.SinglePropertyValue);
				break;
			case 'Title':
				this.setProperty('Title', updatePropertyInfo.SinglePropertyValue);
				break;
			default:
				TW.log.error('htmlheaderwidget_ds widget, unexpected property update received "' + updatePropertyInfo.TargetProperty + '"');
		}
	};

	this.serviceInvoked = function (serviceName) {
		switch (serviceName) {
			case 'SetFavicon':
				this.updateFavicon();
				break;
			case 'SetDocumentTitle':
				this.setDocumentTitle();
				break;
			default:
				TW.log.error('htmlheaderwidget_ds widget, unexpected serviceName invoked "' + serviceName + '"');
		}
	};
};