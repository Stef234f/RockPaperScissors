const computerChoice= document.getElementById('computerchoice');
const userChoice= document.getElementById('userchoice');
const result= document.getElementById('result');
const buttons= document.querySelectorAll('button');
let user;
buttons.forEach(button => button.addEventListener('click', (e) => {
     user= e.target.id;
     userChoice.innerHTML= user;
     computerCh(); 
     resultGame();
}));
let computer;
let resultD;
function computerCh(){
    let number= Math.floor((Math.random()*3)+1);
    switch (number){
        case 1: computer= 'Rock';
        break;
        case 2: computer= 'Paper';
        break;
        case 3: computer= 'Scissors';
        break;
    }
    computerChoice.innerHTML= computer;
}
function resultGame() {
    if ((computer === 'Rock'&& user==='Rock')||(computer === 'Scissors'&& user==='Scissors')||(computer === 'Paper'&& user==='Paper')){
        resultD = 'Nobody Won';
    } else if((computer === 'Rock'&& user==='Paper')||(computer === 'Scissors'&& user==='Rock')||(computer === 'Paper'&& user==='Scissors')){
        resultD = 'You Win!';
    } else {
        resultD = 'You lose';
    }
    result.innerText= resultD;
}
const h2= document.getElementById('swipe');
const range= document.getElementById('thisrange');
const icons= document.getElementById('icons');
range.addEventListener('input', () => {
  const valuE= range.value;
  document.body.style.backgroundColor= `rgb(${valuE},${valuE},${valuE})`;
  h2.style.color= `rgb(${255-valuE},${255-valuE},${255})`;
  icons.style.backgroundColor= `rgb(${255-valuE},${255-valuE},${255})`; });