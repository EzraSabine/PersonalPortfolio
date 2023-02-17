
//Dont think I need this ------>  const display = document.getElementById('calc-disp');
const btns = document.getElementsByClassName('buttons');
const clear = document.getElementById('C');
const numbers = document.getElementById('numbDisplay');
const operatorDisplay = document.getElementById('operatorDisplay');
const numbersTwo = document.getElementById('numbTwoDisplay');
const answer = document.getElementById('answerDisplay');
const operators = document.querySelectorAll('.operators');
const operate = document.getElementById('operate');

let numbArrayOne = [];
let numbStringOne;

let numbArrayTwo = [];
let numbStringTwo;
let operatorSymbol;

let numbArrayThree = [];
let numbStringThree;
//----------------------------------------------------------------------------------------------------------




// THIS FUNCTION MAKES OPERATORS UNCLICKABLE WHEN THE BODY OF THE CALCULATOR PAGE IS LOADED. 
function onlyNumbers() {
    operators.forEach(item => {
        item.removeEventListener('click', concatOperators);  //-----This shouldn't matter as there the operator class if different from the buttons.
    });
}
//------------------------------------------------------------------------------------------------------------------



// LOOP AND NAMED FUNCTION FOR CONCATENATING NUMBERS ONTO DISPLAY
for (const buttons of btns) {
    buttons.addEventListener('click', concatFirstNumbers);
}

function concatFirstNumbers() {
    numbArrayOne.push(this.innerHTML);//-----------"THIS" is a game changer!
    numbStringOne = numbArrayOne.join('');

    if (numbStringOne.length <= 12) {
        numbers.innerHTML = numbStringOne;
    }
    else {
        numbStringOne = numbStringOne.substring(0, 12);
        numbers.innerHTML = numbStringOne;
    }

    operators.forEach(item => {
        item.addEventListener('click', concatOperators);//-------TURNS OPERATOR BUTTONS BACK ON ONCE A NUMBER IS CLICKED. 
    });

    }
//--------------------------------------------------------------------------------------------------------------------------------------



// LOOP AND FUNCTION FOR OPERATORS ONTO DISPLAY, REMOVES FIRST SET OF NUMBERS FROM DISPLAY AND PROHIBITS CLICK OF ANOTHER OPERATOR OR NUMBER
operators.forEach(item => {
    item.addEventListener('click', concatOperators);
});

function concatOperators() {
    numbArrayTwo.push(this.innerHTML);
    numbStringTwo = numbArrayTwo.join('');
    operatorDisplay.innerHTML = numbStringTwo;
    numbers.style.display = "none";
    operatorSymbol = numbStringTwo;//----I might have fixed the operate if/else statement with adding this line here and declaring operatorSymbol up top.


    operators.forEach(item => {
        item.removeEventListener('click', concatOperators);//------Something is wrong here 1 or.....
    });

    for (const buttons of btns) {
        buttons.removeEventListener('click', concatFirstNumbers);
    }


    groupTwo();

}
//-------------------------------------------------------------------------------------------------------------------------------




// LOOP AND NAMED FUNCTION FOR CONCATENATING 2ND GROUP OF NUMBERS ONTO DISPLAY
function groupTwo() {
for (const buttons of btns) {
    buttons.addEventListener('click', concatSecondNumbers);
}
}

function concatSecondNumbers() {
    numbArrayThree.push(this.innerHTML);
    numbStringThree = numbArrayThree.join('');
    operatorDisplay.style.display = "none";

    if (numbStringThree.length <= 12) {
        numbersTwo.innerHTML = numbStringThree;
    }
    else {
        numbStringThree = numbStringThree.substring(0, 12);
        numbersTwo.innerHTML = numbStringThree;
    }

    
    
}
//---------------------------------------------------------------------------------------------------------------------------------






// CLEAR BUTTON EVENT LISTENER FUNCTION
clear.addEventListener('click', clearDisplay);

function clearDisplay() {
    operators.forEach(item => {
        item.removeEventListener('click', concatOperators);
    });

    for (const buttons of btns) {
        buttons.addEventListener('click', concatFirstNumbers);
    }

    for (const buttons of btns) {
        buttons.removeEventListener('click', concatSecondNumbers);
    }
    

   

    numbers.innerHTML = '';
    numbersTwo.innerHTML = '';
    operatorDisplay.innerHTML = '';
    answer.innerHTML = '';
    numbArrayOne.length = 0;
    numbArrayTwo.length = 0;
    numbArrayThree.length = 0;
    finalAnswer.length = 0;
    numbers.style.display = "inline";
    numbersTwo.style.display = "inline";
    operatorDisplay.style.display = "inline";
    answer.style.display = "inline";
}
//----------------------------------------------------------------------------------------------------------------------





//------------------------------------------------------
// MATH BELOW

let finalAnswer;

operate.addEventListener('click', displayAnswer);

function displayAnswer(a, b) {
    a = Number(numbStringOne);
    b = Number(numbStringThree);
    numbersTwo.style.display = "none";

    if (operatorSymbol == " + ") {
        let total = (a + b);
        finalAnswer = total.toString();
    } else if (operatorSymbol == " - ") {
        let total = (a - b);
        finalAnswer = total.toString();
    } else if (operatorSymbol == " x ") {
        let total = (a * b);
        finalAnswer = total.toString();
    } else if (operatorSymbol == " / ") {
        let total = (a / b);
        finalAnswer = total.toString();
    }


//----------------------------------------------------
    
    if (finalAnswer.length <= 12) {
        answer.innerHTML = finalAnswer;
    }
    else {
        finalAnswer = finalAnswer.substring(0, 12);
        answer.innerHTML = finalAnswer;
    }



}

















//if(str.length > 10) str = str.substring(0,10);


// Type in number and has limit to how many times, so numbers fit in diplay -----FINISHED
// When you click an operator it removes eventListener from all other operators -------FINISHED
// Ability to type in second string of numbers ------FINISHED
// function takes the two strings of numbers and calculates them based on chosen operator, once = is clicked.
// prints final string onto display



/* RE-USE THIS IF NAMED FUNCTION DOESNT WORK.----------------
// LOOP AND FUNCTION FOR CONCATENATING NUMBERS ONTO DISPLAY
for (const buttons of btns) {
    buttons.addEventListener('click', function () {
        numbArrayOne.push(buttons.innerHTML);
        numbStringOne = numbArrayOne.join('');

        if (numbStringOne.length <= 12) {
            numbers.innerHTML = numbStringOne;
        }
        else {
            numbStringOne = numbStringOne.substring(0, 12);
            numbers.innerHTML = numbStringOne;
            console.log(numbStringOne);
        }

    });
}
//------------------------------------------------------------
*/
