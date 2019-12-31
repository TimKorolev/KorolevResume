$.getJSON('data/data.json', function (data) {
    let name = data.name;
    let profession = data.profession;
    let phone = data.contacts.phone;
    let email = data.contacts.email;
    let skills = data.skills;
    let educations = data.educations;
    let experiences = data.experience;
    let aboutMe = data.aboutMe;

    document.getElementById("name").innerHTML = name;
    document.getElementById("profession").innerHTML = profession;
    // document.getElementById("phone").innerHTML = phone;
    // document.getElementById("email").innerHTML = email;

    var skillData = '';
    for (let i = 0; i < skills.length; i++) {
        skillData += '<div class=\"BorderNameplate\">\n' +
            '                <p>' + skills[i] + '</p>\n' +
            '            </div>';
    }
    document.getElementById("skills").innerHTML = skillData;

    var educationData = '';
    for (let i = 0; i < educations.length; i++) {
        educationData += '<div class="BlackBorder">\n' +
            '<h1>' + educations[i].university + ', ' + educations[i].department + '</h1>\n' +
            '<div class="Nameplate Education">\n' +
            '<h1>' + educations[i].grade + ' since ' + educations[i].expireData + '</h1>\n' +
            '</div>\n' +
            '</div>\n';
    }
    document.getElementById("education").innerHTML = educationData;

    var experienceData = '';
    for (let i = 0; i < experiences.length; i++) {
        var exp = experiences[i].since + experience.to === "" ? '' : ' to ' + experiences[i].since;
        experienceData +=
            '<div class="BlackBorder">\n' +
            '            <h1>' + experiences[i].employer + ', ' + experiences[i].position + '</h1>\n' +
            '            <div class="Nameplate Worked">\n' +
            '                <h1> Since ' + exp + '</h1>\n' +
            '            </div>\n' +
            '            <div class="description">\n' +
            '                <ul>\n' +
            experiences[i].description +
            '                </ul>\n' +
            '            </div>\n' +
            '        </div>';
    }
    document.getElementById("experience").innerHTML = experienceData;

    document.getElementById("aboutMe").innerHTML = aboutMe;
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