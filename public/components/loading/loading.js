(function () {
	'use strict';

	const Block = window.Block;

	class Loading extends Block {
		constructor(options) {
			super('div', options);
      console.log("loading +"  + this._el.outerHTML)
			this._el.classList.add('loading');


			console.log("создан loading" + this._el.outerHTML);


		}

	}


	//export
	window.Loading = Loading;

})();
