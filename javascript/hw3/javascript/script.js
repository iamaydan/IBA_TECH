function createNewUser() {
    user.firstName = prompt("Please, enter your name : ");
    user.lastName = prompt("Please, enter your lastname : ");
    let user = {
        name: this.firstName,
        surname: this.lastName,
        getLogin: function (name, surname) {
            return ((name[0] + surname).toLowerCase);
        }
    };
    return user.getLogin();
}

createNewUser();
