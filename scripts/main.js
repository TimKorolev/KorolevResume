let phone = null;
let email = null;

$.getJSON('data/data.json', function (data) {
    let name = data.name;
    let profession = data.profession;
    phone = data.contacts.phone;
    email = data.contacts.email;
    let skills = data.skills;
    let educations = data.educations;
    let experiences = data.experience;
    let aboutMe = data.aboutMe;
    let courses = data.courses;

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

    var coursesData = '';
    for (let i = 0; i < courses.length; i++) {
        coursesData += '<li>' + courses[i] + '</li>'
    }
    document.getElementById("courses").innerHTML = coursesData;
});

let getForPrintButton = document.getElementById('getForPrintButton');
let feedbackButton = document.getElementById('feedbackButton');
let contactsButton = document.getElementById('contactsButton');


$(document).ready(function(){
    $("#feedbackButton").click(function(){
        $("#feedbackButton2").slideToggle("slow");
        $(this).toggleClass("active");
    });
});

// feedbackButton.addEventListener('click', function () {
//     let form = '<form action="mailto:адрес вашей электронной почты" enctype="text/plain" class="Form">\n' +
//         '<label for="name">Name</label>' +
//         '<input type="text" class="FormField">' +
//         '<label for="company">Company</label>' +
//         '<input type="text" class="FormField">' +
//         '<label for="email">E-mail</label>' +
//         '<input type="email" class="FormField">' +
//         '<label for="phone">Phone</label>' +
//         '<input type="text" class="FormField">' +
//         '<input type="submit" value="Отправить" class="Button FormButton">' +
//         '</form>';
//     document.getElementById("feedbackButton").innerHTML = form;
// });
//
// contactsButton.addEventListener('click', function () {
//     let form = '<form class="Form">\n' +
//         '<h2>Phone:</h2>' +
//         '<h2>' + phone + '</h2>' +
//         '<h2>Email:</h2>' +
//         '<h2>' + email + '</h2>' +
//         '</form>';
//     document.getElementById("contactsButton").innerHTML = form;
// });
//
// window.onclick = function (e) {
//     if (e.target === getForPrintButton || e.target === feedbackButton || e.target === contactsButton) {
//         document.getElementById("getForPrintButton").innerHTML = '<h1> Get for print </h1>';
//         document.getElementById("feedbackButton").innerHTML = '<h1> Feedback </h1>';
//         document.getElementById("contactsButton").innerHTML = '<h1> Get contacts </h1>';
//     }
// };

// getForPrintButton.addEventListener('click', function () {
//
// });

