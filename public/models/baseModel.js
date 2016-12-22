(function () {
    'use strict';

    class Model {

        constructor(attributes = {}) {
            Object.keys(attributes).forEach(key => {
                if (attributes[key] === undefined) {
                    delete attributes[key];
                }
            });
            this.attributes = Object.assign({}, this.defaults, attributes);
        }

        get defaults() {
            return {};
        }

        get baseUrl() {
            return `tankssteam.herokuapp.com/api`;
        }

        send(method, url,  data = {}) {
            return new Promise((resolve, reject) => {
                let TIME_OUT = 5000;

                let message = createLoadingMessage(document.querySelector('.js-allforms'), 'Loading...');

                let xhr = new XMLHttpRequest();
                xhr.open(method, url, false);
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.withCredentials = true;

                xhr.ontimeout = function (e) {
                    alert("sorry, server sleep");
                };

                xhr.onreadystatechange = function () {
                    document.body.appendChild(message);
                    if (xhr.readyState === 4) {
                        document.body.removeChild(message);
                        resolve(xhr);
                    }
                };

                xhr.onerror = function () {
                    reject();
                };

                xhr.send(JSON.stringify(data));
            });
        }
    }

    window.Model = Model;
})();
