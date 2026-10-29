function isStrongPassword(password) {
    const hasTwelveChar = password.length;
    const hasUpperCase = Boolean(password.match(/[A-z]/));
    const hasLoswerCase  = Boolean(password.match(/[a-z]/));
    const hasNumbers = Boolean(password.match(/[0-9]/));
    const hasSpecialChar = Boolean(password.match(/[!@#$%^&*()_+{}\[\]\|\/\<\>\?]/));

    if (hasTwelveChar === 12 && hasUpperCase && hasLoswerCase && hasNumbers && hasSpecialChar) {
        return true;
    } else {
        return false;
    } 
}

let password = prompt("Enter Password");
let isStrong = isStrongPassword(password);

if (isStrong) {
    console.log("Strong Password");
} else {
    console.log("Weak Password");
}