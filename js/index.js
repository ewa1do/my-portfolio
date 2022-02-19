'use strict';

const langs = {
    menu: {
        EN: ['about me', 'projects', 'my skills', 'contact me'],
        ES: ['sobre mí', 'proyectos', 'mis skills', 'contáctame'],
    },
    
    about: {
        EN: `Hi, nice to meet you! My name is Eduardo Vera. I'm a self taught Frontend Developer based in Maracaibo Venezuela.
            I'm currently learning every day to become the best developer that I can be, please be free to review my work so far and if you're interested don't hesitate to contact me :)`,
        ES: `Hola, ¡gusto en conocerte!. Mi nombre es Eduardo Vera. Soy un Desarrollador Frontend autodidacta establecido en Maracaibo Venezuela.
            Actualmente estoy aprendiendo cada día para convertirme en el mejor desarrollador que pueda ser, siéntete libre de ver mi trabajo y si estás interesado no dudes en contactarme :)`,
    },

    headings: {
        EN: ['FrontEnd Developer', `Check out what i've made`, `I'm proficient in...`, `You can find me On...`],
        ES: ['Desarrollador FrontEnd', 'Mira lo que he hecho', 'Soy competente en...', 'Puedes encontarme acá'],
    },

    projects: {
        EN: [
            'Landing page example created using pure html & css',
            'Simple shopping app created in html, css and js with localStorage',
            'Memory card game created in vanilla js', 
            'Quiz game created using html, css and javascript',
        ],
        ES: [
            'Landing page de ejemplo diseñada usando html y css',
            'shopping app creada en html, css y js con localstorage',
            'juego de memoria desarrollado en javascript vainilla',
            'juego de preguntas desarrollado en html, css y javascript',
        ],
    },

    footer: {
        EN: `Made with love in the beautiful Maracaibo Venezuela by Eduardo Vera. Copyright © 2022. All rights reserved.`,
        ES: `Hecho con amor en la hermosa Maracaibo Venezuela por Eduardo Vera. Copyright © 2022. Todos los derechos reservados.`,
    }
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

const replaceClass = function (el, classRemoved, classAdded) {
    el.classList.remove(classRemoved);
    el.classList.add(classAdded);
};

const changeLanguageText = (el, lang) => el.textContent = lang; 

const changeTextAndClasses = function (el, lang, classRemoved, classAdded) {
    replaceClass(classRemoved, classAdded);
    changeLanguageText(el, lang);
}

class UI {
    static toggleProjectDescription (e) {
        if (e.target.closest('.img')) {
            const desc = e.target.nextElementSibling;
            replaceClass(desc, 'hide', 'slide-in');
        } else {
            [...projectDesc].map(p => {
                replaceClass(p, 'slide-in', 'hide');
            });
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

    static changeMenuLanguage () {
        const menu = document.querySelector('.menu');

        if (menu.classList.contains('EN')) {
            replaceClass(menu, 'EN', 'ES');
            for (let i = 0; i < 4; i++)
                changeLanguageText(menu.children[i].children[0], langs.menu.ES[i]);
        } else {
            replaceClass(menu, 'ES', 'EN');
            for (let i = 0; i < 4; i++) 
                changeLanguageText(menu.children[i].children[0], langs.menu.EN[i]);
        }
    }

    static changeHeadingsLanguage () {
        const headings = [
            document.querySelector('.title h3'),
            document.querySelector('.project-title'),
            document.querySelector('.skills-title'),
            document.querySelector('.contact-section h2'),
        ];

        if (headings.every(header => header.classList.contains('EN'))) {
            headings.map((heading, i) => {
                changeLanguageText(heading, langs.headings.ES[i]);
                replaceClass(heading, 'EN', 'ES');
            });
        } else {
            headings.map((heading, i) => {
                changeLanguageText(heading, langs.headings.EN[i]);
                replaceClass(heading, 'ES', 'EN');
            });
        }
    }

    static changeAboutMeLanguage () {
        const aboutDiv = document.querySelector('.about-me');
        const aboutP = document.querySelector('.about-me p');
        
        if (aboutDiv.classList.contains('EN')) {
            changeLanguageText(aboutP, langs.about.ES);
            replaceClass(aboutDiv, 'EN', 'ES');
        } else {
            changeLanguageText(aboutP, langs.about.EN);
            replaceClass(aboutDiv, 'ES', 'EN');
        }
    }

    static changeProjectsLanguage () {
        if (projects.classList.contains('EN')) {
            replaceClass(projects, 'EN', 'ES');
            [...projectDesc].forEach((pro, i) => changeLanguageText(pro, langs.projects.ES[i]));
        } else {
            replaceClass(projects, 'ES', 'EN');
            [...projectDesc].forEach((pro, i) => changeLanguageText(pro, langs.projects.EN[i]));
        }
    }

    static changeFooterLanguage () {
        const footerP = document.querySelector('footer p');
        
        if (footerP.classList.contains('EN')) {
            replaceClass(footerP, 'EN', 'ES');
            changeLanguageText(footerP, langs.footer.ES);
        } else {
            replaceClass(footerP, 'ES', 'EN');
            changeLanguageText(footerP, langs.footer.EN);
        }
    }

    static switchButton () {
        circle.addEventListener('click', function () {
            UI.switchButtonAnimation();
            UI.changeMenuLanguage();
            UI.changeHeadingsLanguage();
            UI.changeAboutMeLanguage();
            UI.changeProjectsLanguage();
            UI.changeFooterLanguage();
        });
    }
    
}



document.addEventListener('DOMContentLoaded', UI.switchButton);
projects.addEventListener('mouseover', e => UI.toggleProjectDescription(e));
