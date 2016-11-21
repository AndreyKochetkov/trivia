(function () {
	'use strict';

	class Block {
		constructor(name, options = {}) {
			console.log(name);
			this._el = document.createElement(name);
			console.log(this._el.outerHTML)
			this.setAttrs(options.attrs);

			this._options = options;
			// console.log(options);
			if (options.id) {
				this._el.id = options.id;
			}
		}

		setAttrs(attrs = {}) {
			console.log("вызван setAttrs")
			Object.keys(attrs).forEach(name => {
				this._el.setAttribute(name, attrs[name]);
			});
		}

		renderTo(element) {
			console.log("вызван renderTo")
			element.appendChild(this._el);
		}

		append(element) {
			console.log("вызван append");
			if (element instanceof Block) {
				this._el.appendChild(element._get());
			} else {
				console.log("в else");
				this._el.appendChild(element);
			}
		}

		/**
		 * Подписка на событие
		 * @param {string} type - имя события
		 * @param {function} callback - коллбек
		 */
		on(type, callback) {
			this._el.addEventListener(type, callback);
		}

		/**
		 * Отписка от события
		 * @param {string} type - имя события
		 * @param {function} callback - коллбек
		 */
		stop(type, callback) {
			this._el.removeEventListener(type, callback);
		}

		toString() {
			return this._el.outerHTML;
		}

		_get() {
			return this._el;
		}
	}

	//   export
	window.Block = Block;
})();
