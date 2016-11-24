(function () {
	'use strict';

	const View = window.View;
	const Form = window.Form;
	const Trivia = window.Trivia;


	class GameView extends View {
		constructor(options = {}) {
			super(options);
			this._el = document.querySelector('.js-game');
			this.hide();
		}

		init(options = {}) {}



		resume () {
			super.resume();
			this._game = new Trivia (this._el);
			this._game.start();

		}
	}


	// export
	window.GameView = GameView;

})();
