# HTMLHeaderWidgetTWX

ThingWorx widget can set document title and favicon during runtime.

Features:
* Change of document title
* Change of document favicon

## Configuration
### Designtime
- Mashup  Builder  
![Mashup builder](/readme/builder.png?raw=true)
* Set/Bind value title and or favicon
* Call the Set-services to execute
Tipp: In the master mashup just set the favicon. In each 'child' mashup set the title. So you can achieve a consistent favicon and adapt the title when e.g. navigating through menu items to the current menu items title.

### Runtime
- Only changes documents title / favicon
![Runtime](/readme/runtime.png?raw=true)

### Restrictions
* Changing these attributes via widget is not ideal as the changes will only be applied after the mashup has already loaded. Until then it will show the default favicon or title.
   * If possible you may change the favicon in the Tomcat installation and not use the widget. This is only possible for own servers where you have access.
   * Setting document title is only possible in a Master mashup. But this only takes a static value. No better way as of now to change title dynamically.
* Changing the title only works when the mashup has a Master mashup
   * otherwise there is a timing issue with setting the title which will show the name of the mashup (default behavior) instead. If you need it to work you may want to wrap the `document.title=` into a `setTimeout` call

## Build

Execute `gradlew clean build`.

Optional build parameters:
* BUILD_NUMBER
* BUILD_SOURCEBRANCH
* BUILD_SOURCEVERSION
* PACKAGE_VERSION

e.g. `gradlew clean build -PBUILD_NUMBER=123 -PBUILD_SOURCEBRANCH=123 -PBUILD_SOURCEVERSION=123 -PPACKAGE_VERSION=1.0.123`