// Select all plus icons
const plusIcons = document.querySelectorAll(".plus-icon");
const minusIcons = document.querySelectorAll(".minus-icon");
const questionTexts = document.querySelectorAll('.question-text')

plusIcons.forEach((plusIcon, index) => {
  plusIcon.addEventListener('click', function(){
    plusIcon.style.display = 'none';
    minusIcons[index].style.display = 'inline-block';
    questionTexts[index].classList.add('show');
    
  })
  
});

minusIcons.forEach((minusIcon, index) => {
  minusIcon.addEventListener('click', function(){
    minusIcon.style.display = 'none';
    plusIcons[index].style.display = 'inline-block';
    questionTexts[index].classList.remove('show');    
  })
})
  