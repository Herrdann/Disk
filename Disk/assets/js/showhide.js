var howto = document.getElementById('howto');
var materials = document.getElementById('materials');
var professors = document.getElementById('professors');
var professors_mail = document.getElementById('professors_mail');
var professors_eval = document.getElementById('professors_eval');
var prof1 = document.getElementById('prof1');
var prof2 = document.getElementById('prof2');
var prof3 = document.getElementById('prof3');
var prof4 = document.getElementById('prof4');
var prof5 = document.getElementById('prof5');
var lang1 = document.getElementById('lang1');
var lang2 = document.getElementById('lang2');
var lang3 = document.getElementById('lang3');
var lang4 = document.getElementById('lang4');
var lang5 = document.getElementById('lang5');
var langother = document.getElementById('langother');


document.getElementById('button').addEventListener('click', showhowto);

function showhowto() {
    howto.classList.toggle('visible');
}

document.getElementById('button').addEventListener('click', showmaterials);

function showmaterials() {
    materials.classList.toggle('visible');
}

document.getElementById('button').addEventListener('click', showprofessors);

function showprofessors() {
    professors.classList.toggle('visible');
}

document.getElementById('button').addEventListener('click', showprofessors_eval);

function showprofessors_eval() {
    professors_eval.classList.toggle('visible');
}

document.getElementById('button').addEventListener('click', showprofessors_mail);

function showprofessors_mail() {
    professors_mail.classList.toggle('visible');
}

document.getElementById('button').addEventListener('click', show_prof1);

function show_prof1() {
    prof1.classList.toggle('visible');
}

document.getElementById('button').addEventListener('click', show_prof2);

function show_prof2() {
    prof2.classList.toggle('visible');
}

document.getElementById('button').addEventListener('click', show_prof3);

function show_prof3() {
    prof3.classList.toggle('visible');
}

document.getElementById('button').addEventListener('click', show_prof4);

function show_prof4() {
    prof4.classList.toggle('visible');
}

document.getElementById('button').addEventListener('click', show_prof5);

function show_prof5() {
    prof5.classList.toggle('visible');
}

document.getElementById('button').addEventListener('click', showlang1);

function showlang1() {
    lang1.classList.toggle('visible');
}

document.getElementById('button').addEventListener('click', showlang2);

function showlang2() {
    lang2.classList.toggle('visible');
}

document.getElementById('button').addEventListener('click', showlang3);

function showlang3() {
    lang3.classList.toggle('visible');
}

document.getElementById('button').addEventListener('click', showlang4);

function showlang4() {
    lang4.classList.toggle('visible');
}

document.getElementById('button').addEventListener('click', showlang5);

function showlang5() {
    lang5.classList.toggle('visible');
}

document.getElementById('button').addEventListener('click', showlangother);

function showlangother() {
    langother.classList.toggle('visible');
}