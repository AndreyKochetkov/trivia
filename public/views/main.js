(function () {
	'use strict';

	const View = window.View;
	const Form = window.Form;
	const User = window.User;
	const Menu = window.Menu;

	class MainView extends View {
		constructor(options = {}) {
			super(options);
			this._el = document.querySelector('.js-main');

			this.hide();
			console.log("вызван MainView");

			console.log("MainView" + this._el.outerHTML);

			this._component = new Menu({
				el: this._el,
				data: {
					controls: [
						{
							text: 'Sign In',
							attrs: {
								id: 'js-btn-signin',
								type: 'button'
							}
						}, {
							text: 'Sign Up',
							attrs: {
								id: 'js-btn-signup',
								type: 'button'
							}
						}, {
							text: 'Leader Board',
							attrs: {
								id: 'js-btn-scores-main',
								type: 'button'
							}
						}
					]
				}
			});



		}

		init(options = {}) {


			console.log("вызван init");

			let signinButton = document.getElementById('js-btn-signin');
			signinButton.addEventListener('click', event => {
				event.preventDefault();
				this.router.go('/login');
			});

			let signupButton = document.getElementById('js-btn-signup');
			signupButton.addEventListener('click', event => {
				event.preventDefault();
				this.router.go('/signup');
			});

			let scoresButton = document.getElementById('js-btn-scores-main');
			scoresButton.addEventListener('click', event => {
				event.preventDefault();
				this.router.go('/scores');
			});



		}
	}


	// export
	window.MainView = MainView;

})();
