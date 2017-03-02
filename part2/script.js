//1.
//var userChoice = prompt("Do you choose rock, paper or scissors?");
//var computerChoice = Math.random();
//if (computerChoice < 0.34) {
//    computerChoice = "rock";
//} else if(computerChoice <= 0.67) {
//    computerChoice = "paper";
//} else {
//    computerChoice = "scissors";
//} console.log("Computer: " + computerChoice);
//
//compare(userChoice, computerChoice);
//
//var compare = function(choice1, choice2)
//{
//    if(choice1 === choice2)
//    {
//        return "The result is a tie!";       
//    }
//    else if(choice1 === "rock")
//    {
//        if(choice2 === "scissors")
//        {
//            return "rock wins";
//        }
//        else
//        {
//            return "paper wins";   
//        }
//    }
//    else if(choice1 === "paper")
//    {
//        if(choice2 === "rock")
//        {
//            return "paper wins";
//        }
//        else
//        {
//            return "scissors wins";    
//        }
//    }
//}

//2.

//
//function Calculator(num){
// return {
//  answer : num ? num : 0,
//  equals : function() {
//    return this.answer
//  },
//  add : function(num) {
//    this.answer += num ? num : 1
//    return this
//  },
//  subtract : function(num) {
//    this.answer -= num ? num : 1
//    return this
//  },
//  multiply : function(num) {
//    this.answer *= num ? num : 1
//    return this
//  },
//  divide : function(num) {
//    this.answer /= num ? num : 1
//    return this
//  },
//  modulo  : function(num) {
//    this.answer %= num ? num : 1
//    return this
//  },
//  invert : function(num) {
//    this.answer = this.answer * -1
//    return this
//  }, 
//  clear : function() {
//    this.answer = 0
//    return this
//  }
// }
//}

3.
//function web(str){
//	
//	return str.split('').sort().join('');
//}
//
//console.log(web("bread"))


//4.
//function uppercase(str)  
//{  
//  var array = str.split(' ');  
//  var newarray = [];  
//      
//  for(var x = 0; x < array.length; x++){  
//      newarray.push(array[x].charAt(0).toUpperCase()+array[x].slice(1));  
//  }  
//  return newarray.join(' ');  
//}  
//console.log(uppercase("the quick brown fox"));  

//5.
//function vowel(str)  
//{  
//	var vowel = 'aeiouAEIOU';  
//	var vcount = 0;  
//	for(var x = 0; x < str.length ; x++)  
//	{  
//		if (vowel.indexOf(str[x]) !== -1)  
//		{  
//			vcount += 1;  
//		}  
//	}  
//	return vcount;  
//}  
//console.log(vowel("The quick brown fox"));  

//6.
//function makeid(l)  
//{  
//var text = "";  
//var char_list = "dflfjjaojpifjjfajfoinvouvnoiuvbouabfuiwabfibi";  
//for(var i=0; i < l; i++ )  
//{    
//text += char_list.charAt(Math.floor(Math.random() * char_list.length));  
//}  
//return text;  
//}  
//console.log(makeid(8));

//7.
//function longest_country_name(country_name)  
//{  
//return country_name.reduce(function(lname, country)   
//{  
//return lname.length > country.length ? lname : country;  
//},   
//"");  
//}  
//console.log(longest_country_name(["australia", "germany", "united states of america"]));  
//
//










