//Exercise 2:
/**
Create an IF statement that tells if a phone number 
is in International format and starts with a plus character */


function getPhoneNumber(num){    
    if (/[a-zA-Z]/.test(num)){
        return "Error: Number contains Letters"
    } else if (num.length < 13) {
        return "Error: Phone number too short"
    } else if (num.length > 13){
        return "Error: Phone number too long"
    } else if (num.includes("+358")){
        return "Great! Your number has been Saved :)"
    } return "Error: Please add a country code"
}

//Please input phone number below:
console.log(getPhoneNumber("+358481648310"))