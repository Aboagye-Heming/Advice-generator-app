const adviceId = document.querySelector("#advice-id");
const adviceText = document.querySelector("#advice-text");
const adviceBtn = document.querySelector("#advice-btn");

function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })
    .then((adviceData) => {
      const adviceNum = adviceData.slip.id;
      const advice = adviceData.slip.advice;
  
      adviceId.textContent = adviceNum;
      adviceText.innerHTML = `<h3>${advice} </h3>`;
    })
    .catch((error) => {
      console.log(error);
    });

}


adviceBtn.addEventListener('click', function() {
    getAdvice();
})

window.onload = () => {
    getAdvice();
}