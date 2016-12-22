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

				let user = window.user;
				user.attributes['login'] = this._component.getFormData()['login'];
				user.attributes['email'] = this._component.getFormData()['email'];
				user.attributes['password'] = this._component.getFormData()['password'];

				user.signup().then(
						result=> {
								if (result.status === 200) {
										user.attributes['id'] = 1;//TODO need id in cookie
										this.router.go('/login');
								}
								else
										alert("this login has been already in use");
						},
						error=> {
								alert("error send signup");
						}
				);


		})
	}
}


	// export
	window.SignupView = SignupView;

})();
