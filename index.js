// increase heart number
function handleHurtNumber() {
  const heartEl = document.getElementById('heart-2');
  const heartIncrease = parseInt(heartEl.innerText)
  const heartBit = heartIncrease + 1;
  heartEl.innerText = heartBit;
}
// handle call button
function handleCall(titleId, numberId) {
  const displayPointElement = document.getElementById("display-point");
  const title = document.getElementById(titleId).innerText;
  const number = document.getElementById(numberId).innerText;
  const currentValue = parseInt(displayPointElement.innerText);
  if(currentValue < 20){
    alert('Insufficient coin')
  }else{
    alert(title + number);
    const calculatedPoint = currentValue - 20;
    displayPointElement.innerText = calculatedPoint;
  }
}


