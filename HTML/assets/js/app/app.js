var App = {
	init : function () {
        //Reload
        if (document.location.hostname == "localhost") {
            var js = document.createElement("script");

            js.type = "text/javascript";
            js.src = 'http://localhost:35729/livereload.js';

            document.body.appendChild(js);
        }

        //Init
		$.each(App, function (key, value) {
			var func = 'App.' + key + '.init';

			try {
				if ( eval("typeof "+ func +" === 'function'") ) {
					if (key != 'init') {
						eval(func)();
					}
				}
			} catch(err) {
				//return false;
			}
		});
	}
};