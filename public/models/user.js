(function () {
    const Model = window.Model;

    class User extends Model {

        constructor(attributes) {
            super(attributes);

            this.attributes['id'] = -1;
        }

        get userUrl() {
            return `http://${this.baseUrl}/user`;
        }

        get sessionUrl(){
            return `http://${this.baseUrl}/session`;
        }

        get defaults() {
            return {
                login: 'anon',
                email: 'anon@mail.ru',
                password: '123',
                id: -1
            }
        }

        signin(){
            let request = {
                login: this.attributes['login'],
                password: this.attributes['password']
            };
            return this.send('POST', this.sessionUrl, request)
        }

        logout(){
            return this.send('DELETE', this.sessionUrl, {})
        }

        signup() {
            let request = {
                login: this.attributes['login'],
                email: this.attributes['email'],
                password: this.attributes['password']
            };
            return this.send('POST', this.userUrl, request);
        }

        detectSession(){
            return this.send('GET', this.sessionUrl, {});
        }

    }

    window.User = User;
})();
