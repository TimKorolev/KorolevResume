 $.getJSON('data/data.json', function(data) {
       var output=data.name;
       document.getElementById("name").innerHTML=output;
  });



let btnFeedback = document.querySelector('.feedback');
let feedbackPopup = document.querySelector('.feedbackPopup');
let closeFeedbackPopupBtn = document.querySelector('.feedbackPopup .close');

btnFeedback.addEventListener('click', function(){feedbackPopup.style.display = 'block'});
closeFeedbackPopupBtn.addEventListener('click', function(){feedbackPopup.style.display = 'none'});

window.onclick = function (e) {
    if(e.target == feedbackPopup){
        feedbackPopup.style.display="none";
    }
}