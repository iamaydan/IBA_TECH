const MSG_USERNAME = 'Please, enter your name : ';
const MSG_AGE = 'Please, enter your age : ';
const MSG_WELCOME = 'Welcome, ';
const MSG_SURE = 'Are you sure you want to continue? ';
const MSG_NOT_ALLOWED = 'You are not allowed to visit this website.';


let username = null;
let entered_name = 'e.g. Alex';
do {
    const name = prompt(MSG_USERNAME,entered_name);
    if ( isAlphaOrSpace(name) && !isSpace(name) && name !== entered_name) username = name;
    else {
        entered_name = name;
        alert('Please, enter a valid name!');
    }
} while ( username == null);


let age = null;
let entered_age = 'e.g. 18';
do {
    const input = prompt(MSG_AGE, entered_age);
    const isError = ((input == null) || (input === '') || isNaN(+input) || input === entered_age);
    if (isError) {
        alert('Please, enter a valid age!');
        entered_age = input;
    }
    else age = input;
} while(age == null);

if (age < 18 ) alert(MSG_NOT_ALLOWED);
else if (age > 22) alert(MSG_WELCOME + username);
else {
    confirm(MSG_SURE) ?
    alert(MSG_WELCOME + username)
        :
    alert(MSG_NOT_ALLOWED);
}

function isAlphaOrSpace(str) {
    return /^[a-zA-Z ]+$/.test(str);
}

function isSpace(str) {
    return /^[ ]+$/.test(str);
}

