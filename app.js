//assignment-1
//a)select first button without using 'id'
let firstButton = document.body.children[2].children[4];
console.log(firstButton);

//b)select the second button by using an "id"
let secondButton = document.getElementById('second-button');
console.log(secondButton);


//assingment-2
//a) click event to firstButton

function outVariableFirstButtonWasStored (event){
    let clickSHow = event.target.value;
    // let innertext = firstButton.value;
    console.dir('i was clicked');
}
firstButton.addEventListener('click',outVariableFirstButtonWasStored)

//b)click event to secondButton

let secButton = document.body.children[2].children[6];
console.log(secButton);

function outVariable2ndButtonWasStored (event) {
    let clickedOccur = event.target.value;
    console.dir('sec button was clicked, nigga!');
}

secButton.addEventListener('click', outVariable2ndButtonWasStored)



//3--select and store the 1st and 3rd paragraph
//a) select first paragraph
let firstPara = document.body.children[2].children[1];
console.log(firstPara);

//b) select 3rd paragraph
let thirdPara = document.body.children[2].children[3];
console.log(thirdPara);

//4--a) delete third paragraph

function deleteThirdPara (event) {
    let add3rdParaAttribute = thirdPara.classList.add('rmv-third-para');
    console.log(add3rdParaAttribute);
}

firstButton.addEventListener('click', deleteThirdPara)

//4b) change background of 1st paragraph
function changeBkgdColorOf1stPara (event) {
    let add1stParaAttribute = firstPara.classList.add('bkgd-to-blue');
}
secButton.addEventListener('click', changeBkgdColorOf1stPara);