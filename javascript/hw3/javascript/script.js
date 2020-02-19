function createNewUser() {
let name = prompt("Enter the fisrtname: ");
let surname = prompt("Enter the lastname: ");
let newUser = {
    firstName: name,
    lastName: surname,
    getLogin: function () {
        alert((this.firstName.charAt(0) + this.lastName).toLowerCase()) ;
    }
};
    newUser.getLogin();
}
    createNewUser();
