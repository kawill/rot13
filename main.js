// ## Easy Mode

// > About ROT13 : http://en.wikipedia.org/wiki/ROT13

// Write two functions, `encode()`, and `decode()`, that compute the plaintext ("hello") and ciphertext ("uryyb").

// Here's where discussion ended at:

// ```js
function encode(phrase){
    var result = "";
    // .. for each character in phrase
    if( var i = 0; i < phrase.length; i++){
        // get the charCode if letter at index i
        var cc = phrase[i].charCodeAt(0);
        // add 13 to the letter's charCode

        result += String.fromCharCode(cc+13);
    }

    else(123 = cc+13 <= 135 ) {
    result += String.fromCharCode((cc+13)-26);

}

    // {
        // [123 = "a", 124 = "b", 125 = "c", 126 = "d", 127 = "e", 128 = "f", 129 = "g", 130 = "h", 131 = "i", 132 = "j", 133 = "k", 134 = "l", 135 = "m"];
    // }

    return result;
}

console.log(encode("hello")); //---> "uryyb"

function decode(phrase){
    var result = "";
    // .. for each character in phrase
    if( var i = 0; i < phrase.length; i++){
        // get the charCode if letter at index i
        var cc = phrase[i].charCodeAt(0);
        // add 13 to the letter's charCode

        result += String.fromCharCode(cc-13);
    }

    else(84 = cc-13 <= 96 ) {
    result += String.fromCharCode((cc-13)+26);

}
    return result;
}

console.log(decode("uryyb")); //---> "hello"
// ```

// ## Hard Mode

// In addition to the [Easy Mode](#easy-mode), make `encode2()` and `decode2()` take an optional, extra argument that takes a `rotation`:

// ```js
function encode2(phrase, rotation){

}

console.log(encode("hello")); //---> "uryyb"

function decode2(phrase, rotation){

}

console.log(decode("uryyb")); //---> "hello"
// ```
