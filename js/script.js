// let typeJSContent = document.querySelector(".typeJSContent");
// let typeJScontValue = typeJSContent.innerHTML;
// typeJSContent.innerHTML = ""

// let typeJScontArray = Array.from(typeJScontValue)

// let typeJScontArrayNew = []
// let typeJsLettCount = -1;

// function makeNewArray(){
//     if( typeJsLettCount == typeJScontArray.length - 1){
//         typeJSContent.innerHTML = ""
//         typeJScontArrayNew = []
//         typeJsLettCount = -1;
//         typeJScontArrayNew.push(typeJScontArray[typeJsLettCount])
//     }
//     typeJsLettCount++
//     typeJSContent.innerHTML += typeJScontArray[typeJsLettCount]
// }
// setInterval(() => {
//     makeNewArray()
// },300);



// function removeLetterFromArray(){
//     if( typeJScontArray.length == 0 ){
//         clearInterval(removeInterval)
//     }
//     typeJScontArray.pop()    
//     console.log(typeJScontArray);
// }
// let removeInterval = setInterval(()=>{
//     removeLetterFromArray()
// },1000)












let result = document.querySelector("#result")
let player = document.querySelector("#player")
let player1 = document.querySelector("#player1")
let player2 = document.querySelector("#player2")
let player3 = document.querySelector("#player3")
let player4 = document.querySelector("#player4")
let countText = document.querySelector("#countText")

let userOneInput = document.querySelector("#userOneInput")
let userTwoInput = document.querySelector("#userTwoInput")
let userThreeInput = document.querySelector("#userThreeInput")
let userFourInput = document.querySelector("#userFourInput")

let userOneButton = document.querySelector("#userOneButton")
let userTwoButton = document.querySelector("#userTwoButton")
let userThreeButton = document.querySelector("#userThreeButton")
let userFourButton = document.querySelector("#userFourButton")

let errorText = document.querySelector("#errorText")

let startNumber;
let resultPlayerTwo;
let resultPlayerThree;
let resultPlayerFour;
let countChances = 5;

userOneButton.addEventListener("click",()=>{
    if( Number(userOneInput.value) == "" ){
        errorText.style.display = "block"
        errorText.innerHTML = "Need to input Number"
    }else if( isNaN(Number(userOneInput.value)) ){
        errorText.style.display = "block"
        errorText.innerHTML = "Please Enter Number character are not allow"
    }else{
        if( Number(userOneInput.value) < 1 || Number(userOneInput.value) > 10 ){
            errorText.style.display = "block"
            errorText.innerHTML = "Please Enter a Number between 1-10"
        }else{
            errorText.style.display = "block"
            startNumber = Number(userOneInput.value)
            errorText.innerHTML = ""
            errorText.style.display = "none"
            userOneInput.style.display = "none"            
            userOneButton.style.display = "none"            
            userTwoInput.style.display = "inline-block"            
            userTwoButton.style.display = "inline-block"            
            countText.style.display = "block";
            countText.innerHTML = `Remaining Chances : ${countChances}`;
            userOneInput.value = "";
            console.log(`start Number ${startNumber}`);

        }
    }
})
userTwoButton.addEventListener("click",()=>{
    if( Number(userTwoInput.value) == "" ){
        errorText.style.display = "block"
        errorText.innerHTML = "Need to input Number"
    }else if( isNaN(Number(userTwoInput.value)) ){
        errorText.style.display = "block"
        errorText.innerHTML = "Please Enter Number character are not allow"
    }else{
        if( Number(userTwoInput.value) < 1 || Number(userTwoInput.value) > 10 ){
            errorText.style.display = "block"
            errorText.innerHTML = "Please Enter a Number between 1-10"
        }else{
            errorText.style.display = "block"
            errorText.innerHTML = ""
            errorText.style.display = "none"
            countChances--
            countText.innerHTML = `Remaining Chances : ${countChances}`;
            resultPlayerTwo = Number(userTwoInput.value);
            if( startNumber == resultPlayerTwo || countChances == 0 ){
                userTwoInput.style.display = "none"            
                userTwoButton.style.display = "none"            
                userThreeInput.style.display = "inline-block"            
                userThreeButton.style.display = "inline-block"            
                countText.style.display = "block";
                countChances = 5;
                countText.innerHTML = `Remaining Chances : ${countChances}`;
                console.log(`resultPlayerTwo ${resultPlayerTwo}`);
                userTwoInput.value = "";
            }
            userTwoInput.value = "";
        }
    }
})
userThreeButton.addEventListener("click",()=>{
    if( Number(userThreeInput.value) == "" ){
        errorText.style.display = "block"
        errorText.innerHTML = "Need to input Number"
    }else if( isNaN(Number(userThreeInput.value)) ){
        errorText.style.display = "block"
        errorText.innerHTML = "Please Enter Number character are not allow"
    }else{
        if( Number(userThreeInput.value) < 1 || Number(userThreeInput.value) > 10 ){
            errorText.style.display = "block"
            errorText.innerHTML = "Please Enter a Number between 1-10"
        }else{
            errorText.style.display = "block"
            errorText.innerHTML = ""
            errorText.style.display = "none"
            countChances--
            countText.innerHTML = `Remaining Chances : ${countChances}`;
            resultPlayerThree = Number(userThreeInput.value);
            if( startNumber == resultPlayerThree || countChances == 0 ){
                userThreeInput.style.display = "none"            
                userThreeButton.style.display = "none"            
                userFourInput.style.display = "inline-block"            
                userFourButton.style.display = "inline-block"            
                countText.style.display = "block";
                countChances = 5;
                countText.innerHTML = `Remaining Chances : ${countChances}`;
                console.log(`resultPlayerThree ${resultPlayerThree}`);
                userThreeInput.value = "";
            }
            userThreeInput.value = "";
        }
    }
})
userFourButton.addEventListener("click",()=>{
    if( Number(userFourInput.value) == "" ){
        errorText.style.display = "block"
        errorText.innerHTML = "Need to input Number"
    }else if( isNaN(Number(userFourInput.value)) ){
        errorText.style.display = "block"
        errorText.innerHTML = "Please Enter Number character are not allow"
    }else{
        if( Number(userFourInput.value) < 1 || Number(userFourInput.value) > 10 ){
            errorText.style.display = "block"
            errorText.innerHTML = "Please Enter a Number between 1-10"
        }else{
            errorText.style.display = "block"
            errorText.innerHTML = ""
            errorText.style.display = "none"
            countChances--
            countText.innerHTML = `Remaining Chances : ${countChances}`;
            resultPlayerFour = Number(userFourInput.value);
            if( startNumber == resultPlayerFour || countChances == 0 ){
                userFourInput.style.display = "none"            
                userFourButton.style.display = "none"            
                countText.style.display = "none"
                countText.innerHTML = `Remaining Chances : ${countChances}`;
                console.log(`resultPlayerThree ${resultPlayerThree}`);
                userFourInput.value = "";
                if( startNumber !== resultPlayerTwo && startNumber != resultPlayerThree && startNumber != resultPlayerFour){
                    player1.innerHTML = `Player-1 is winner against All Player <br/>br/>`
                    player2.innerHTML = "Player-2 is loser"
                    player3.innerHTML = "Player-3 is loser"
                    player4.innerHTML = "Player-4 is loser"
                }
                else if( startNumber !== resultPlayerTwo && startNumber == resultPlayerThree && startNumber == resultPlayerFour){
                    player1.innerHTML = `Player-1 is winner against Player-2, Looser against Player-3 & Player-4 <br/><br/>`
                    player2.innerHTML = "Player-2 is loser"
                    player3.innerHTML = "Player-3 is winner"
                    player4.innerHTML = "Player-4 is winner"
                }
                else if( startNumber !== resultPlayerTwo && startNumber != resultPlayerThree && startNumber == resultPlayerFour){
                    player1.innerHTML = `Player-1 is winner against Player-2 & Player-3, Looser against Player-4 <br/><br/>`
                    player2.innerHTML = "Player-2 is loser"
                    player3.innerHTML = "Player-3 is loser"
                    player4.innerHTML = "Player-4 is winner"
                }
                else if( startNumber == resultPlayerTwo && startNumber == resultPlayerThree && startNumber == resultPlayerFour){
                    player1.innerHTML = `Player-1 is loser against All Player <br/><br/>`
                    player2.innerHTML = "Player-2 is winner"
                    player3.innerHTML = "Player-3 is winner"
                    player4.innerHTML = "Player-4 is winner"
                }
                else if( startNumber == resultPlayerTwo && startNumber != resultPlayerThree && startNumber != resultPlayerFour){
                    player1.innerHTML = `Player-1 is winner against Player-3 & Player-4, Looser against Player-2 <br/><br/>`
                    player2.innerHTML = "Player-2 is winner"
                    player3.innerHTML = "Player-3 is loser"
                    player4.innerHTML = "Player-4 is loser"
                }
                else if( startNumber != resultPlayerTwo && startNumber == resultPlayerThree && startNumber != resultPlayerFour){
                    player1.innerHTML = `Player-1 is winner against Player-2 & Player-4, loser against Player-3 <br/><br/>`
                    player2.innerHTML = "Player-2 is loser"
                    player3.innerHTML = "Player-3 is winner"
                    player4.innerHTML = "Player-4 is loser"
                }
                else if( startNumber == resultPlayerTwo && startNumber == resultPlayerThree && startNumber != resultPlayerFour){
                    player1.innerHTML = `Player-1 is winner against Player-4, loser against Player-2 & Player-3 <br/><br/>`
                    player2.innerHTML = "Player-2 is winner"
                    player3.innerHTML = "Player-3 is winner"
                    player4.innerHTML = "Player-4 is loser"
                }
            }
            userFourInput.value = "";
        }
    }
})