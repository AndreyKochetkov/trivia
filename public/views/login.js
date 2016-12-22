(function () {
	'use strict';

	const View = window.View;
	const Form = window.Form;
	const User = window.User;

	class LoginView extends View {
		constructor(options = {}) {
			console.log("коструктор LoginView")
			super(options);
			this._el = document.querySelector('.js-login');
			this.hide();
			this._component = new Form({
				el: this._el,
				data: {
					title: 'Login',
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
							text: 'Sing In',
							attrs: {
								type: 'submit'
							}
						}, {
							text: 'Sign Up',
							attrs: {
								id: 'js-btn-signup-signin',
								type: 'button'
							}
						}, {
							text: 'Back',
							attrs: {
								id: 'js-btn-back-signin',
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
				user.attributes['login']=signInForm.getFormData()['login'];
				user.attributes['password']=signInForm.getFormData()['password'];
				user.signin().then(
					result=> {
						if (result.status === 200) {
							let responseDataFields = JSON.parse(result.response);
							user.attributes['email'] = responseDataFields['email'];
							user.attributes['id'] = 1;//TODO need id in cookie
							this.router.go('/login');
						}
						else
							alert("this wrong password");
					},
					error=> {
						alert("??!!");
					}
				);
			});

			let signupButton = document.getElementById('js-btn-signup-signin');
			signupButton.addEventListener('click', event => {
				event.preventDefault();
				this.router.go('/signup');
			});

      let backButton = document.getElementById('js-btn-back-signin');
			backButton.addEventListener('click', event => {
				event.preventDefault();
				this.router.go('/');
			});
		}
	}


	// export
	window.LoginView = LoginView;

})();
