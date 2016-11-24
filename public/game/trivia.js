(function () {
	'use strict';

	const Loading = window.Loading;
	const Menu = window.Menu

	class Trivia {

    constructor(element) {
			this._el = element
		}




		start() {
			/*
					LOADING
			*/

			let loadingBlock = document.getElementById("js-game-loading");
			let loading = new Loading ({
				el: loadingBlock,
				id: "loading_id"
			})

			/////// END ////////
			/*
					QUESTIONS
			*/
			let questionsBlock = document.getElementById("js-game-asks");
			let questions = new Menu ({
				el: questionsBlock,
				data: {
					controls: [
						{
							text: "question 1",
							type: 'button'
						}, {
							text: "question 2",
							type: 'button'
						} , {
							text: "question 3",
							type: 'button'
						} , {
							text: "question 4",
							id: 'button-kostul-q',
							type: 'button'
						}
					]
				}
			})

				/////// END ////////

			/*
					ANSWERS
			*/

			let answersBlock = document.getElementById("js-game-answers");
			let answers = new Menu ({
				el: answersBlock,
				data: {
					controls: [
						{
							text: "question",
							type: "div"

						}, {
							text: "answer 1",
							type: 'button'
						}, {
							text: "answer 2",
							type: 'button'
						} , {
							text: "answer 3",
							id: "final-kostul",
							type: 'button'
						} , {
							text: "answer 4",
							id: 'button-kostul-a',
							type: 'button'
						}
					]
				}
			})


				/////// END ////////

			/*
					FINAL MENU
			*/
			let finalMenuBlock = document.getElementById("js-game-final-menu");
			let finalMenu = new Menu ({
				el: finalMenuBlock,
				data: {
					controls: [
						{
							text: "play again",
							type: 'button'
						} , {
							text: "leader board",
							type: 'button'
						} , {
							text: "log out",
							id: 'button-kostul',
							type: 'button'
						}
					]
				}
			})


			/////// END ////////
			let fd = document.getElementById("final-kostul");
			fd.addEventListener('click', event => {
				event.preventDefault();

				finalMenuBlock.hidden = false;
				answersBlock.hidden = true;
				
			})


			this.wait_opponent();

		}

		wait_opponent(){
			/////// отладка /////
			console.log("init Trivia")

			let loadingDiv = document.getElementById('js-game-loading');
			loadingDiv.hidden = false;
			loadingDiv.addEventListener('click', event => {
				event.preventDefault();
				loadingDiv.hidden = true;
				let data = {
					fisrst_question: "fisrst_question",
					second_question: "second_question",
					third_question: "third_question",
					fourth_question: "fourth_question"
				}
				this.ask_questions(data)
				/*
				if (you_have_first_turn) {
					this.ask_questions(data)
				} else {
					this.answer(data)
				}

				*/

			});
			/////////////////////
		}


		ask_questions(request_data) {

			let questionsBlock = document.getElementById("js-game-asks");
			questionsBlock.hidden = false;

			//this._el.appendChild(document.createElement("div"));

			let loadingDiv = document.getElementById("button-kostul-q");
			loadingDiv.addEventListener('click', event => {
				event.preventDefault();

				questionsBlock.hidden = true;
				this.answer();
			})

		}

		answer(request_data) {
			let answersBlock = document.getElementById("js-game-answers");
			answersBlock.hidden = false;

			//this._el.appendChild(document.createElement("div"));

			let loadingDiv = document.getElementById("button-kostul-a");
			loadingDiv.addEventListener('click', event => {
				event.preventDefault();

				answersBlock.hidden = true;
				this.wait_opponent();
			})
		}


	}

	//export
	window.Trivia = Trivia;
})();
