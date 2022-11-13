/**
Exercise 1:
Create a Function that takes a name and converts it to capitalised form; 
Firsts leter Uppercase and rest of the letters Lowercase */


const nameCaser = (name) => {
    const specialChar = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (/\d/.test(name)){
        return "Error: Name contians a Number"
    } else if (specialChar.test(name)){
        return "Error: Name contains Special Charachters"
    } else if ((name.indexOf(" "))>0){
        let s = name.indexOf(" ")
        return name[0].toUpperCase() + name.substring(1,s+1).toLowerCase() + name[s+1].toUpperCase() + name.substring(s+2).toLowerCase()
    }
    return name[0].toUpperCase()+name.substring(1).toLowerCase()
}


//Please input your name below:
console.log(nameCaser("rHonNnie aLLan"))







