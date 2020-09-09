// JavaScript Document

 //--- Return første tegn i string ---
"use strict";

 var s = prompt('');

document.write(s + " - This is the word you typed <br>");

function first(s) {
	return s[0];
}

document.write(first(s) + " - This is the first letter of the word" + "<br>");




 //--- Return sidste tegn i string ---

function last(s) {
	return s[s.length-1];
}

document.write(last(s) + " - This is the last letter of the word" +  "<br>");

//--- Return midter-delen af ordet (dur ikke helt)----

/*

function middle(s) {
	return [1, s.length-1]
}

document.write("This is the middle part of the word: " + middle(s));
*/

 // --- return alt pånær sidste og først tegn i string --- 

function middle(s) {
	return s.slice(1, -1); //.slice retunerer en portion af et array (en string er sådan set et array i sig selv),
						  //og får her at vide at det første og det sidste tegn skal undlades
	
}

document.write(middle(s) + " - This is the middle part of the word");





//Palindrome checker

/*
function isPalindrome(s) {
	return s[0] + s[s.length-1];
}
if (s[0] === s[s.length-1]){ //hvis index 0 (første tegn) er samme identisk med det sidste tegn i s.length, køres følgende kode
	console.log(true);
	document.write(`<br><br><br>Palindrome<br>First and last letters match and are: ${isPalindrome(s)}`);
}
else{						//hvis ikke ovenstående er sandt, køres følgende kode
	console.log(false);
	document.write(`<br><br><br>Palindrome<br>First and last letters DON'T match and are: ${isPalindrome(s)}`);
}
*/   

   let isPalindrome = string => { //arrow funktion med parametren "string"

	   let stringLength = string.length; //deklarerer variabel der holder styr på længden af parametren "string"
		   
	   if (stringLength<2){ //hvis længden på string'en er mindre end 2 så eksekveres følgende kode
		   return true;
	   }
   
	   if (string[0] === string[stringLength-1]) { //hvis index 0 i "string" er identisk med stringLength-1 af string (altså det sidste tegn i stringen), eksekveres følgende kode
		   return isPalindrome(string.slice(1,stringLength-1)); //returnerer indholdet af funktionen "isPalindrome"s parameter "string", og slicer det første tegn og det sidste
	   }
   
	   return false;
   };
   
   document.write("<br><br><br>Palindrome assignment <br>"+"Is the written word a palindrome? "+ isPalindrome(s)); //skriver i DOM'en og bruger igennem "isPalindrome(s)" inputtet fra prompten i toppen af filen