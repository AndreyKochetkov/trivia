(function () {
	'use strict';

	const Router = window.Router;
	const MainView = window.MainView;
	const ScoresView = window.ScoresView;
	const GameView = window.GameView;
	const SignupView = window.SignupView;
	const LoginView = window.LoginView;

	let user = new User('login', 'email', 'password', 'id');
	window.user = user;
	user.detectSession().then(
			result=>{
					if (result.status === 200) {
							let responseDataFields = JSON.parse(result.response);
							user.attributes['login'] = responseDataFields['login'];
							user.attributes['email'] = responseDataFields['email'];
							user.attributes['id'] = 1;//TODO id

							//TODO if router faster then net - it's fail... (async)
							if (user.attributes['id']!==-1 && (window.location.pathname)!==('/leaderboard/')){
									router.go('/login')
							}
					}
			},
			error=> {
					alert("error detectSession");
			}
	);
	// TIP: роуты нужно указывать от наиболее специфичного к наименее специфичному
	// З.Ы. чтобы более ранние роуты не были префиксами более поздних ;]
	(new Router)
		.addRoute('/game', GameView)
		.addRoute('/scores', ScoresView)
		.addRoute('/signup', SignupView)
		.addRoute('/login', LoginView)
		.addRoute('/', MainView)
		.start();
})();
