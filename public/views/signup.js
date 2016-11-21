(function () {
	'use strict';

	const View = window.View;
	const Form = window.Form;
	const User = window.User;

	class SignupView extends View {
		constructor(options = {}) {
			super(options);
			this._el = document.querySelector('.js-signup');
			this.hide();
			this._component = new Form({
				el: this._el,
				data: {
					title: 'Signup',
					fields: [
						{
							name: 'user',
							type: 'text',
							placeholder: 'Ваш логин'
						},
						{
							name: 'email',
							type: 'email',
							placeholder: 'Ваш email'
						}
					],
					controls: [
						{
							text: 'Sing Up',
							attrs: {
								type: 'submit'
							}
						}, {
							text: 'Back',
							attrs: {
								id: 'js-btn-back-signup',
								type: 'button'
							}
						}

					]
				}
			});
		}

		init(options = {}) {
			this._component.on('submit', event => {
				event.preventDefault();

				let formData = this._component.getFormData();
				const user = new User(formData.user, formData.email);

				user
					.signup()
					.then(() => {
						this.router.go('/game', user.json);
					})
					.catch(console.error);
			});

			let backButton = document.getElementById('js-btn-back-signup');
			backButton.addEventListener('click', event => {
				event.preventDefault();
				this.router.go('/');
			});


		}
	}


	// export
	window.SignupView = SignupView;

})();
