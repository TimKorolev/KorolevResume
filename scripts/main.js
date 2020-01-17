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

    document.getElementById("phone").innerHTML = phone;
    document.getElementById("email").innerHTML = email;

    document.getElementById("phoneForPrint").innerHTML = phone;
    document.getElementById("emailForPrint").innerHTML = email;

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
        let careerStartDateInTest = new Date("2018-06-01");
        let totalExperienceScoreInTest = null;

        if (i === experiences.length - 1) {
            var currentTime = Date.now();
            totalExperienceScoreInTest = (currentTime - careerStartDateInTest.getTime()) / 3.154e+10;
            document.getElementById("experienceHeader").innerHTML = 'In testing: ' + totalExperienceScoreInTest.toFixed(1) + ' years.';
        }

        var to;
        var since;
        var description = '';

        for (let j = 0; j < experiences[i].description.length; j++) {
            description += '<li>' + experiences[i].description[j] + '</li>\n';
        }

        description = '<ul>' + description +'</ul>';
        since = 'Since ' + experiences[i].since;

        if (experiences[i].to === "") {
            to = '';
        } else {
            to = ' to ' + experiences[i].to;
        }

        var exp = since + to;
        experienceData +=
            '<div class="BlackBorder">\n' +
            '            <h1>' + experiences[i].employer + ', ' + experiences[i].position + '</h1>\n' +
            '            <div class="Nameplate Worked">\n' +
            '                <h1>' + exp + '</h1>\n' +
            '            </div>\n' +
            '            <div class="description">\n' +
            description +
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

$(document).ready(function () {
    $("#contactsButton").click(function () {
        $("#contactsContent").slideToggle("slow");
        $(this).toggleClass("active");
        document.getElementById("contactsContent").style.display = "grid";
    });
});

$(document).ready(function () {
    $("#getForPrintButton").click(function () {
        window.print();
    });
});





