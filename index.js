// increase heart number
function handleHurtNumber() {
  const heartEl = document.getElementById('heart-2');
  const heartIncrease = parseInt(heartEl.innerText)
  const heartBit = heartIncrease + 1;
  heartEl.innerText = heartBit;
}
// handle call button
const callHistory = document.getElementById('call-history');


function handleCall(titleId, numberId) {
  const displayPointElement = document.getElementById("display-point");
  const title = document.getElementById(titleId).innerText;
  const number = document.getElementById(numberId).innerText;
  const currentValue = parseInt(displayPointElement.innerText);

  if (currentValue < 20) {
    alert('Insufficient coin')
  } else {
    alert(title + number);
    const calculatedPoint = currentValue - 20;
    displayPointElement.innerText = calculatedPoint;
    const currentTime = new Date().toLocaleTimeString();
    callHistory.innerHTML += ` <div class="flex justify-between items-center mt-5 bg-blue-50 px-4 py-4 rounded-xl ">
                    <div class="">
                        <h1 class="font-bold text-xl">${title}</h1>
                        <p>${number}</p>
                    </div>
                    <p>${currentTime}</p>
                </div>`;
  }
}

// clear the call section
function handleClear(){
  callHistory.innerHTML='';
}

// copy data by clicking button

function copyData (numberId){
  const number = document.getElementById(numberId).innerText;
  const numberToCopy = parseInt(number);
  
  navigator.clipboard.writeText(numberToCopy)
  .then(()=> {
    alert("Copied to clipboard: " + numberToCopy);
  })
  .catch(err => {
      console.error("Failed to copy: ", err);
    });
    
}


