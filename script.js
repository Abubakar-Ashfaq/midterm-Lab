window.onload = function() {
  
  var faqElements = document.getElementsByClassName("faq");
  for (var i = 0; i < faqElements.length; i++) {
    faqElements[i].addEventListener("click", divClicked);
  }
  
  var btns = document.getElementsByClassName("faq-toggle");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("dblclick", function() {
    console.log("Button was double clicked");
    var parentElement = this.parentElement;
    parentElement.remove();
  });
}
var addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", addBtnClick);

   
}



function divClicked() {
    
    var parentElement = this.parentElement;
    parentElement.className = "faq";
  
    
    this.className = "faq active";

    var closeButton = parentElement.querySelector(".fa-times");
  if (closeButton.style.display === "block") {
    console.log("Deleting close button")
    parentElement.remove();
  }
  }

  function addBtnClick () {
    console.log("Add button was clicked");
  // Get the values of the question and answer inputs
  var questionInput = document.getElementById("question");
  var answerInput = document.getElementById("answer");
  var questionValue = questionInput.value;
  var answerValue = answerInput.value;

  if(questionValue && answerValue) {


  var faqContainer = document.querySelector(".faq-container");
  var newFaq = document.createElement("div");
  newFaq.className = "faq";
  newFaq.innerHTML = `
    <h3 class="faq-title">${questionValue}</h3>
    <p class="faq-text">${answerValue}</p>
    <button class="faq-toggle">
      <i class="fas fa-chevron-down"></i>
      <i class="fas fa-times"></i>
    </button>
  `;


  faqContainer.appendChild(newFaq);

  questionInput.value = "";
  answerInput.value = "";
  }
  // Bind the click event listeners to the new button elements
  var toggleButtons = newFaq.querySelectorAll(".faq-toggle");
  for (var i = 0; i < toggleButtons.length; i++) {
    toggleButtons[i].addEventListener("click", function() {
      var faqElement = this.parentElement;
      faqElement.classList.toggle("active");
      var chevronIcon = this.querySelector(".fa-chevron-down");
      chevronIcon.classList.toggle("rotate");
    });

    var removeButton = toggleButtons[i].querySelector(".fa-times");
    removeButton.addEventListener("click", function() {
      var parentElement = this.parentElement.parentElement;
      parentElement.remove();
    });
  }
}