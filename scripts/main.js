$.getJSON('data/data.json', function (data) {
    let name = data.name;
    let profession = data.profession;
    // let phone = data.contacts.phone;
    // let email = data.contacts.email;
    let skills = data.skills;
    let educations = data.educations;

    document.getElementById("name").innerHTML = name;
    document.getElementById("profession").innerHTML = profession;
    // document.getElementById("phone").innerHTML = phone;
    // document.getElementById("email").innerHTML = email;

    var skillData ='';
    for (let i = 0; i < skills.length; i++) {
        skillData += '<div class=\"BorderNameplate\">\n' +
            '                <p>' + skills[i] + '</p>\n' +
            '            </div>';
    }
    document.getElementById("skills").innerHTML = skillData;

    var educationData='';
    for (let i = 0; i < educations.length; i++) {
        educationData += '<div class="BlackBorder">\n' +
            '<h1>' + educations[i].university + ', ' + educations[i].department + '</h1>\n' +
            '<div class="Nameplate Education">\n' +
            '<h1>' + educations[i].grade + ' since ' + educations[i].expireData + '</h1>\n' +
            '</div>\n' +
            '</div>\n';
    }
    document.getElementById("education").innerHTML = educationData;
});


let btnFeedback = document.querySelector('.feedback');
let feedbackPopup = document.querySelector('.feedbackPopup');
let closeFeedbackPopupBtn = document.querySelector('.feedbackPopup .close');

btnFeedback.addEventListener('click', function () {
    feedbackPopup.style.display = 'block'
});
closeFeedbackPopupBtn.addEventListener('click', function () {
    feedbackPopup.style.display = 'none'
});

window.onclick = function (e) {
    if (e.target == feedbackPopup) {
        feedbackPopup.style.display = "none";
    }
}