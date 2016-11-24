(function () {
	'use strict';

	const Loading = window.Loading;
	const Menu = window.Menu

	class Trivia {

    constructor(element) {
			this._el = element
		}




		start() {
			let loadingBlock = document.getElementById("js-game-loading");
			let loading = new Loading ({id:"loading_id"})
			loadingBlock.appendChild(loading._get())
			loadingBlock.hidden = false;
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

			//this._el.appendChild(document.createElement("div"));

			let questions = new Menu ({
				el: questionsBlock,
				data: {
					controls: [
						{
							text: request_data.fisrst_question,
							type: 'button'
						}, {
							text: request_data.second_question,
							type: 'button'
						} , {
							text: request_data.third_question,
							type: 'button'
						} , {
							text: request_data.fourth_question,
							id: 'button-kostul',
							type: 'button'
						}
					]
				}
			})
			questionsBlock.hidden = false;
			let loadingDiv = document.getElementById("button-kostul");
			loadingDiv.addEventListener('click', event => {
				event.preventDefault();
				questionsBlock.hidden = true;
				this.wait_opponent();

			})

		}

	}

	//export
	window.Trivia = Trivia;
})();
