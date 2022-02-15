'use strict';

const skillsArr = ['<html/>', '.css{}', 'js();', 'git'];
const skillDiv = [];

const mainContainer = document.querySelector('.main-container');
const infoContainer = document.querySelector('.personal-info');
const skills = document.querySelector('.skills');
const projectDesc = document.querySelectorAll('.test');
const projects = document.querySelector('.projects');
const contact = document.querySelector('#contact');

const switchDiv = document.querySelector('.switch');
const circle = document.querySelector('.circle');

console.log(circle);

// creating the text for the skills
Array.from(skills.children).forEach(div => {
    [...div.children].forEach(div => {
        [...div.children].forEach(div => {
            [...div.children].forEach((div, i) => {
                skillDiv.push(div);
            })
        }) 
    })
});

skillDiv.forEach((div, i) => {
    const span = document.createElement('span');
    span.textContent = skillsArr[i];
    span.classList.add('skill-text');
    div.append(span);
});

class UI {
    static toggleProjectDescription (e) {
        if (e.target.closest('.img')) {
            const desc = e.target.nextElementSibling;
            desc.classList.remove('hide');
        } else {
            [...projectDesc].map(p => p.classList.add('hide'));
        }
    }

    static switchButtonAnimation () {
        circle.addEventListener('click', function () {
            circle.classList.toggle('animation-switch');
        });
    }


}



document.addEventListener('DOMContentLoaded', UI.switchButtonAnimation);
projects.addEventListener('mouseover', e => UI.toggleProjectDescription(e));
