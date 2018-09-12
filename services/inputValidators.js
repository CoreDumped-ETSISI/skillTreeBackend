'use strict'

function validPassword(password) {
    if (!password || password.length === 0) return false;
    const passwordPattern = /[a-z0-9_]{8,30}/i; //TODO: Use constants
    return passwordPattern.test(password)
}
function validName(name) {
    if (!name || name.length === 0) return false;
    const namePattern = /[a-z ]{2,40}/i; //TODO: Use constants
    return namePattern.test(name)
}
function validEmail(email) {
    if (!email || email.length === 0) return false;
    const emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    return emailPattern.test(email);
}

module.exports = {
    validPassword,
    validEmail,
    validName
}