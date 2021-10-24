

//subsequent divission to convert a number into a base
 //position 0 in the array
// is the bit with the less significance  
//return the converted number
const subsequent_div = (num, base)=>{
    //creates an empty arry in order to add the digits as elements in to the array
    var resuldiv =[];
    if(num>=base){  
        do{ 
            let Residual = num % base;
            num =  Math.trunc((num/base));//Deletes the decimal digits without making any aproximation
            resuldiv.push(Residual);
            //cheks if the divided number is lower than the base
            //so it can be added in to the array
            if(num< base){
                resuldiv.push(num);
            }       
        }while(num>=base);
    }
    else{
        resuldiv = num;
    }
    console.log(resuldiv);
    return resuldiv;
}
//Check if the number in the elected base is palyndrome
//return only if  its true palyndrom number or not
const check_palindromebase=(num,base)=>{
    var ispalindrom;
  
    var basednum = subsequent_div(num,base);
    if(num>=base){
         //first repetition compares the first digit with the last
        //sencond repetition compares the second digit with the penultimate number an so on
        for(var i =0;i<basednum.length;i++){
            if(basednum[i]!==basednum[basednum.length-1-i]){
                i = basednum.length;
                ispalindrom = false;
            }
            else {
                ispalindrom = true;
            }
        }   
    }
    else{
        ispalindrom= true;
    }
    var result = {palindromestate: ispalindrom, num: basednum}
    return result;
}
//search for the first base where the number is palyndrome
const  search_palindromenumbase=(num)=>{
    //check first if the nimber is palindrom in base 2
    base = 2;
    var palindrome_found = check_palindromebase(num,base);       
    while(!palindrome_found.palindromestate){
            base++;
            palindrome_found = check_palindromebase(num,base);  
    }
    
    var result = {base: base, palindrome_found: palindrome_found.num}
    return result;
}
//Call all the above functions to be implemented on the HTML page
const check_palyndrome_html= ()=>{
    var numimp  =  document.getElementById("number");//take the number from the html page 
    var num = numimp.value; 
    var numbased =search_palindromenumbase(num);//Search for the base where the number is palindrom, and return the base and the number 
    //converted in the base
    var contbase = document.getElementById("baseresult"); //div that shows the base 
    var contnumm = document.getElementById("numberresult");//div that shows the converted number
    contbase.innerHTML= `<p> The base where the number is palindrom is ${numbased.base}</p>`;
    //delete elements from position 1 and stores it in different array
    
    contnumm.innerHTML= `<p> Converted number = ${numbased.palindrome_found}</p>`;
}

//add the event for the web page 
var seenum = document.getElementById("see");
seenum.addEventListener('click',check_palyndrome_html,true);