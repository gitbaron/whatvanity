#!/usr/bin/env node

function vanityToNum(phoneNumber) {
    //console.debug("1. Got the number:'" + phoneNumber + "'");
    if (phoneNumber == null) throw "Input is Null";
    
    // clean out any non-alpha-numeric character
    phNum = phoneNumber.trim().replace(/[^a-zA-Z0-9]/g, "");
    //console.debug("2. After replacing special characters:'" + phNum + "'");

    // check if the remaining phone number is the right length
    if (phNum.length < 10) throw phNum+" is too small to be a phone number!";

    // cut down to 11 or 10 numbers
    phNum = phNum.substr(0, 11);
    //console.debug("3. After trimming to phone number length:'" + phNum + "'");

    phNum = phNum.replace(/[abcABC]/g, "2")
        .replace(/[defDEF]/g, "3")
        .replace(/[ghiGHI]/g, "4")
        .replace(/[jklJKL]/g, "5")
        .replace(/[mnoMNO]/g, "6")
        .replace(/[pqrsPQRS]/g, "7")
        .replace(/[tuvTUV]/g, "8")
        .replace(/[wxyzWXYZ]/g, "9");
    //console.debug("4. After replacing letters:'" + phNum + "'");
    return phNum;
}

module.exports = vanityToNum;
