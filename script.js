// function firstNumbers() {
//     let arrayHundered = [];
//     let arrayFirst = [];

//     for (let i=0; i<100; i++) {
//         arrayHundered[i] = i+1;
//         console.log(arrayHundered[i]);
//     }

//     for (let i=1; i<arrayHundered.length; i++) {
        
//         if((arrayHundered[i] % 1 === 0) && (arrayHundered[i] % arrayHundered[i]) === 0) {
//             let flag;

//             for (let j=1; j < 101; j++) {
//                 if ((arrayHundered[i] / j) >  {
//                     flag = true;
//                 } else {
//                     flag = false;
//                     break;
//                 }
//             }
//             if (flag === true) {
//                 arrayFirst.push(arrayHundered[i]);
//             }
//         }
//     }

//     for (let i=0; i < arrayFirst.length; i++) {
//             console.log(arrayFirst[i]);
//     }
// }

// firstNumbers();


function multiWithoutOperator(number1, number2) {
    let result = number1;

    if ((number1 > 0 && number2 > 0) || (number1 < 0 && number2 > 0)) {
        for(let i = 1; i < number2; i++) {
            result += number1;
        }
        return result;
    } else if (number1 == 0 || number2 == 0) {
        return 0;
    } else if (number1 > 0 && number2 < 0) {
        for(let i = 0; i > number2-1; i--) {
            result -= number1;
        }
        return result;
    } else if (number1 < 0 && number2 < 0) {
        for(let i = 0; i > number2+1; i--) {
            if (number2 == -1) {
                result = number1;
            } else {
                result += number1;
        }
    }
        return result;  
    } else {
        console.log('Not a number!');
    }
}

document.getElementById('button').addEventListener('click', function(){

    let firstNumber = parseInt(document.getElementById('firstNumber').value);
    let secondNumber = parseInt(document.getElementById('secondNumber').value);

    document.getElementById('result').textContent = multiWithoutOperator(firstNumber, secondNumber);
});