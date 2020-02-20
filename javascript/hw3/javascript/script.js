function createNewUser() {
let name = prompt("Please, enter your name : ");
let surname = prompt("Please, enter your surname : ");

let newUser = {
    firstName: name,
    lastName: surname,
    getLogin: function () {
        alert((this.firstName.charAt(0) + this.lastName).toLowerCase()) ;
    }
};
    return newUser;
}

let user = new createNewUser();
user.getLogin();