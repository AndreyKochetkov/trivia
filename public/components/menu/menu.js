(function () {
	'use strict';

	// import
	const Block = window.Block;
	const Button = window.Button;

	class Menu extends Block {

		/**
		 * Конструктор класса Menu
		 */
		constructor(options = {data: {}}) {
			super('div');
			this.data = options.data;
			this._el = options.el;
			this.render();
		}

		/**
		 * Обновляем HTML
		 */
		render() {

			this._installControls();
		}


		/**
		 * Вставить управляющие элементы
		 */
		_installControls() {
			let {controls = []} = this.data;

			controls.forEach(data => {
				let control = new Button(data);
				this._el.appendChild(control._get());
			});
		}



	}

	//export
	window.Menu = Menu;
})();
