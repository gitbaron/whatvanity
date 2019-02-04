#!/usr/bin/env node

function vanityToNum(phoneNumber) {
    //console.debug("Got the number:'" + phoneNumber + "'");
    if (phoneNumber != null) {
        // clean out any special characters
        phNum = phoneNumber.trim().replace(/[ ().-]/g, "");
        //console.debug("After replacing special characters:'" + phNum + "'");

        // check the right length
        if (phNum.length >= 10) {
            // check if it indeed is a Vanity number
            var vanity = /[a-zA-Z]/
            if (vanity.test(phNum)) {
                // cut down to 11 or 10 numbers
                phNum = phNum.toLowerCase().substr(0, 11);
                //console.debug("After trimming to phone number length:'" + phNum + "'");
                phNum = phNum.replace(/[abc]/g, "2")
                    .replace(/[def]/g, "3")
                    .replace(/[ghi]/g, "4")
                    .replace(/[jkl]/g, "5")
                    .replace(/[mno]/g, "6")
                    .replace(/[pqrs]/g, "7")
                    .replace(/[tuv]/g, "8")
                    .replace(/[wxyz]/g, "9");
                //console.debug("After replacing letters:'" + phNum + "'");
            } else {
                //console.info("Not a vanity number:'" + phNum + "'");
            }
            return phNum;
        } else {
            //console.error("Too small to be a phone number:'" + phNum + "'");
            throw phNum+" is too small to be a phone number!";
        }
    } else {
        //console.error("Input is Null");
        throw "Input is Null";
        ;
    }
}

//console.log(vanityToNum("1800 Progressive"));
module.exports = vanityToNum;
