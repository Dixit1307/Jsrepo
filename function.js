// reverse number

function reverse_a_number(n)
{
    n = n + ""; 
    return n.split("").reverse().join("");
}
console.log(Number(reverse_a_number(32243)));

//Check Palindrome

function isPalindrome(str) {
    let rev = str.split("").reverse().join("");

    if (rev == str) {
        return true
    }
    return false

}

let str1 = "racecar";
let str2 = "madam";
let str3 = "sir";

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));

// Capitalize First Letter of Each Word

const s1 = "javaScript";
const s2 = s1.charAt(0).toUpperCase() + s1.slice(1);
console.log(s2);


// javascript capitalize all letters

const sentence = "The quick brown fox jumps over the lazy dog.";

console.log(sentence.toUpperCase());

//Sort String Alphabetically

const s = "javascript";
const sorted = s.split("").sort().join("");

console.log(sorted); 

// string combination

let combinationsRecursive = (str, index = 0, current = '') => {
    if (index === str.length) {
        console.log(current); 
        return;
    }
    
    
    combinationsRecursive(str, index + 1, current + str[index]);
    
    combinationsRecursive(str, index + 1, current);
};

console.log(combinationsRecursive("dog"));

// prime number program

function isPrime(num) {

    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; 
        }
    }

    return true; 
}


let number = 17; 
if (isPrime(number)) {
    console.log(number + " is a prime number.");
} else {
    console.log(number + " is not a prime number.");
}

