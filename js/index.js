'use strict';

const menuLang = {
    EN: ['about me', 'projects', 'my skills', 'contact me'],
    ES: ['sobre mí', 'proyectos', 'mis skills', 'contáctame'],
}
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
const langSpan = document.querySelector('.lang');


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
        circle.classList.toggle('animation-switch');
        langSpan.classList.toggle('text-move');
            
        if (langSpan.textContent === 'ES') {
            langSpan.textContent = 'EN';
        } else {
            langSpan.textContent = 'ES';
        }
    }

    static changeLanguage (menu, lang, classRemoved, classAdded) {
        for (let i = 0; i < 4; i++) {
            menu.children[i].children[0].textContent = lang[i];
            menu.classList.remove(classRemoved);
            menu.classList.add(classAdded);
        }
    }

    static changeMenuLanguage () {
        const menu = document.querySelector('.menu');

        if (menu.classList.contains('EN')) {
            UI.changeLanguage(menu, menuLang.ES, 'EN', 'ES');
        } else {
            UI.changeLanguage(menu, menuLang.EN, 'ES', 'EN');
        }
    }

    static switchButton () {
        circle.addEventListener('click', function () {
            UI.switchButtonAnimation();
            UI.changeMenuLanguage();
        });
    }
    
}



document.addEventListener('DOMContentLoaded', UI.switchButton);
projects.addEventListener('mouseover', e => UI.toggleProjectDescription(e));
