(function () {
	'use strict';

	const Router = window.Router;
	const MainView = window.MainView;
	const ScoresView = window.ScoresView;
	const GameView = window.GameView;
	const SignupView = window.SignupView;
	const LoginView = window.LoginView;

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
