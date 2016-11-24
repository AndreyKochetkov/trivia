(function () {
	'use strict';

	const Block = window.Block;

	class Loading extends Block {
		constructor(options) {
			super('div', options);
      console.log("loading +"  + this._el.outerHTML)
			this._el.classList.add('loading');
			this._parent = options.el;
			this.render();

			console.log("создан loading" + this._el.outerHTML);


		}
		render() {
			this._parent.appendChild(this._get());
		}

	}


	//export
	window.Loading = Loading;

})();
