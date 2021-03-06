'use strict';

// alert('Hello');

//FUNDAMENTALS PART 1

//CHALLENGE 1

// BMI = mass / height ** 2 = mass / (height * height)

const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;
const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
const comp = markBMI>johnBMI;
console.log(markBMI, johnBMI, comp);

//CHALLENGE 2

if(markBMI>johnBMI){
	console.log('Mark\'s Bmi is higher');
}else{
	console.log('John\'s Bmi is higher');
}
if(markBMI>johnBMI){
	console.log(`Mark's Bmi (${markBMI}) is higher than Jonh's${johnBMI}`);
}else{
	console.log(`John's Bmi${johnBMI} is higher than Mark's${markBMI}`);
}

//CHALLENGE 3
//1
const Dolphins = (96+ 108+ 89) / 3;
const Koalas = (88+ 91+ 110) / 3;
console.log(Dolphins, Koalas);
//2
if(Dolphins>Koalas){
	console.log('Dolphins won');
} else if(Koalas>Dolphins){
	console.log('Koalas won');
}else if(Dolphins===Koalas){
	console.log('Draw');
}
//3
const Dolphins2 = (97+ 112+ 101) / 3;
const Koalas2 = (109+ 95+ 123) / 3;
console.log(Dolphins2, Koalas2);
//4
if(Dolphins2>Koalas2 && Dolphins2>100){
	console.log('Dolphins won');
} else if(Koalas2>Dolphins2 &&Koalas2>100){
	console.log('Koalas won');
}else if(Dolphins2===Koalas2 && Dolphins2>100 && Koalas2>100){
	console.log('Draw');
}else{
	console.log('No winner');
}

//CHALLENGE 4
const bill = 275;
let tip;
if (bill>50 && bill<=300) {
	tip = bill * 0.15;
	console.log(`Tip is ${tip}`);
}else if(bill>300){
	tip = bill*0.2;
	console.log(`Tip is ${tip}`);
}
// const tip = bill >50 && bill<=300 ? bill * 0.15 : bill * 0.2;
const total = bill+tip;
console.log(`Total is ${total}`);
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value 
${total}`);

/////////////////////////////////////////////////////////////////////////////////
//FUNDAMENTALS PART 2

//CHALLENGE 1
const avgDolphins = 85 + 54 + 41;
const avgKoalas = 23+ 34+ 27;
const calcAverage = avg => avg /3;
console.log(calcAverage(avgDolphins), calcAverage(avgKoalas));
const checkWinner = function(avg1, avg2){
	if(avg1>= 2 *avg2){
		console.log('Dolphins won');
	}else if(avg2 > 2*avg1)
	{
		console.log('Koalas won');
	}
};

checkWinner(avgDolphins, avgKoalas);

//CHALLENGE 2

const price = 100;
let tips;
const calcTip = function(price){
	if (price >=50 && price <=300) {
tips = price * 0.15;
	}else if(price>300){
tips = price * 0.2;
	}else{
	tips = price * 0.15;
	}
return tips;
};
console.log(calcTip(price));

const bills = [125, 555, 44];
const moreTips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
console.log(moreTips);

const total2 = [calcTip(bills[0])+bills[0],calcTip(bills[1])+bills[1], calcTip(bills[2])+bills[2]];
console.log(total2);

//CHALLENGE 3

const mark = {
	firstName: 'Mark',
	lastName: 'Miller',
	mass:78,
	height:1.69,
	calcBMI: function(){
		const BMI2 = this.mass / this.height ** 2;
		return BMI2;
	},
}
const john = {
	firstName: 'John',
	lastName: 'Smith',
	mass:92,
	height:1.95,
	calcBMI: function(){
		const BMI2 = this.mass / this.height ** 2;
		return BMI2;
	},
}
console.log(mark.calcBMI());
if(mark.calcBMI() > john.calcBMI()){
	console.log(`${mark.firstName} has a higher BMI ${mark.calcBMI()} than ${john.calcBMI()}`);
}else if(mark.calcBMI() < john.calcBMI()){
	console.log(`${john.firstName} has a higher BMI ${john.calcBMI()} than ${mark.calcBMI()}`)
}


//CHALLENGE 4

const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52, 100];
const tips2 = [];
const totals2 = [];
const calcTip2 = bill2 => bill2*0.15;
for(let i = 0; i<bills2.length; i++){
	tips2.push(calcTip2(bills2[i]));
}
console.log(tips2);
console.log(calcTip2(100));

const numbers = [1,2,3,4,5];
let sum = 0;
for(let i = 0; i<numbers.length; i++){
	sum = sum+numbers[i];
}
console.log(sum);
console.log(numbers.length);
const calcAverage2 = function(arr){
	return sum / arr.length;
};

console.log(calcAverage2(tips2));


//Developer Skills & Editor Setup

//CHALLENGE 1

let sent = '';

const temperatures = [17, 21, 23];
const printForecast = function(arr){
	for(let i = 0;i<arr.length; i++){
		// console.log(`${arr[i]} in ${i+1} days`);
		sent = sent+`${arr[i]} in ${i+1} days`;
		
	}
	return sent;
};
console.log(printForecast(temperatures));

//JavaScript in the Browser: DOM and Events

//CHALLENGE1
// let score = 0;
// document.querySelector('.again').addEventListener('click', function(){
// 	score = score;
// 	secretNumber = secretNumber;
// })

//Data Structures, Modern Operators and Strings

//CHALLENGE1

const game = {
 team1: 'Bayern Munich',
 team2: 'Borrussia Dortmund',
 players: [
 ['Neuer','Pavard','Martinez','Alaba','Davies','Kimmich','Goretzka','Coman','Muller','Gnarby','Lewandowski',],
 ['Burki','Schulz','Hummels','Akanji','Hakimi','Weigl','Witsel','Hazard','Brandt','Sancho','Gotze',],
 ],
 score: '4:0',
 scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
 'Hummels'],
 date: 'Nov 9th, 2037',
 odds: {
 team1: 1.33,
 x: 3.25,
 team2: 6.5,
 },
 }

const players1 = [...game.players[0]];
const players2 = [...game.players[1]];
// console.log(players1);
// console.log(players2);
const gk = [players1[0]];
// console.log(gk);
const fieldPlayers = [...players1];
fieldPlayers.shift();
// console.log(fieldPlayers);
const allPlayers = [players1, players2];
console.log(...allPlayers);
const playersFinal = [players1, 'Thiago', 'Coutinho', 'Perisic'];
const {team1:homeTeam,x:draw,team2:awayTeam} = game.odds;
console.log(homeTeam, draw, awayTeam);


const printGoals = function(...players){
	for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
    console.log(`${game.scored.length}`)
    
  }
};
printGoals(game.scored);

//CHALLENGE 2

for(let i = 0; i<game.scored.length;i++){
	console.log(`goal ${i+1} scored by ${game.scored[i]}`);
};

let amountsum = 0;
for (const avgodd of Object.values(game.odds)){
	amountsum = amountsum + avgodd;
	// console.log(avgodd);
};

const avgodd = amountsum / Object.values(game.odds).length;
console.log(avgodd);
// console.log(amountsum);

for (const [team, odd] of Object.entries(game.odds)){
	
	if(team==='x'){
		game[team] ='draw';
	}else{
		`victory ${game[team]}`;
	}
	console.log(`Odd for ${game[team]} is ${odd}`);
};

const scorers = {
	Gnarby: 1,
 	Hummels: 1,
 	Lewandowski: 2
}


//Challenge 4

const ideas = ['underscore_case', 'first_name', 'Some_Variable' 
,'calculate_AGE', 'delayed_departure'];

const ideas2 = [];

// const allLow = ideas.toLowerCase();

for(const idea of ideas){
	// loginEmail.toLowerCase();
	const allLow = idea.toLowerCase();
	// console.log(allLow);
	const separ = allLow.split('_');
	// console.log(separ);
	const fixed = separ[0]+separ[1].toUpperCase();
	console.log(fixed);
	const count = ideas2.push(fixed);

}
console.log(ideas2);



//Functions

//Challenge 1

const poll = {
 question: "What is your favourite programming language?",
 options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
 // This generates [0, 0, 0, 0]. More in the next section!
 answers: new Array(4).fill(0),
 registerNewAnswer: function(){
 	const answer = Number(
 	prompt(`${this.question} \n ${this.options.join('\n')} \n Write option number `)
 	);
 	console.log(answer);
 	typeof answer === 'number' && answer< this.answers.length
 	&& this.answers[answer]++;
 	// this.displayResults('array');
 	this.displayResults('string');
 },
 displayResults: function(type = 'array'){
 	if(typeof type === 'array'){
 	console.log(this.answers);
 }else if(typeof type === 'string'){
 	console.log(`Poll results are ${this.answers.join(', ')}`);
 }
 }
 };





 document.querySelector('.answer').addEventListener('click', poll.registerNewAnswer.bind(poll));

 //ARRAYS

 //CHALLENGE 1

 const julia = [3, 5, 2, 12, 7];
 const kate = [4, 1, 15, 8, 3];
 const checkDogs = function(arr1, arr2){
 	for(const [i,age] of dogsage.entries()){
 		// console.log(age);
 		// console.log(i+1);
 		if(age < 3){
 			console.log(`Dog ${i+1} is still a puppy`);
 		}else if( age> 3){
 			console.log(`Dog ${i+1} is not a puppy and it is ${age} years old`);
 		}
 	}
 }
 const juliacopy = julia.slice(1, -1);;
 console.log(juliacopy);
 const dogsage = [...juliacopy, ...kate];
 console.log(dogsage);
 checkDogs(juliacopy, kate);


 //CHALLENGE 2
const dogsage2 = [5, 2, 4, 1, 15, 8, 3];
const dogsage3 = [16, 6, 10, 5, 6, 1, 4];
const calcAverageHumanAge = function(arr){
	const humanAges = arr.map(function(age){
		if(age <= 2){
		return age*2;
	}else if(age > 2){
		return 16 + age * 4;
	};
	
	})

	const adult = humanAges.filter(function(age){
		return age > 18;
	})

	const avgAdult = adult.reduce(function(acc, cur){
	
	return acc+cur / adult.length;
}, 0);


	console.log(humanAges);
	console.log(adult);
	console.log(avgAdult);
};
calcAverageHumanAge(dogsage2);
calcAverageHumanAge(dogsage3);