var flightPrice;
var accomodationPrice;
var entertainmentPrice;
var journeyPrice;
var cash = prompt("Necha puling bor ey bola:   so'm", 100);
var text = document.querySelector(".text");
var desc = document.querySelector(".desc");

var needed;
needed = journeyPrice - cash;


flightPrice = 500*9433.34;
accomodationPrice = 250*9433.34;
entertainmentPrice = 150*10354.03;
journeyPrice = (flightPrice + accomodationPrice + entertainmentPrice) - 0;
cash -= 0;
console.log(journeyPrice);


// cash;

if(journeyPrice <= cash){
    text.style.backgroundColor = "green";
    text.style.borderRadius = "10px";
    text.style.width = "100vw";
    text.style.height = "100vh";
    text.textContent = "Oq yo’l, Alisher!";

}else{
    
    desc.textContent = `${needed} so'm kerak`;
    desc.style.backgroundColor = "green";
    text.style.backgroundColor = "red";
    text.style.borderRadius = "10px";
    text.style.width = "100vw";
    text.style.height = "100vh";
    text.textContent = "Ishla, Alisher!";
}