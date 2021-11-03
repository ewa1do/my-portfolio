'use strict';

const projectsDB = [
    {
        img: 'img/project.png',
        name: 'Project 1',
        link: '#',
    },
    {
        img: 'img/project.png',
        name: 'Project 2',
        link: '#',
    },
    {
        img: 'img/project.png',
        name: 'Project 3',
        link: '#',
    },
    {
        img: 'img/project.png',
        name: 'Project 4',
        link: '#',
    },
]

const mainContainer = document.querySelector('.main-container');
const infoContainer = document.querySelector('.personal-info');
const menuContainer = document.querySelector('.menu');

const skillsView = document.querySelector('.skills');
const projectsView = document.querySelector('.projects');
const aboutView = document.querySelector('.about');
const contactView = document.querySelector('.contact');


class UI {
    static clearView () {
        [...infoContainer.children].forEach(el => el.remove());
    }

    static displaySkillsView () {
        this.clearView();

        const skillsDiv = document.createElement('div');
        const skillNames = ['html', 'css', 'javascript', 'git'];
        const skillsArr = [];
        
        const title = document.createElement('h2');
        title.textContent = 'My Skills';
        title.classList.add('skills-title');
        skillsDiv.appendChild(title);
        
        for (let i = 0; i < skillNames.length; i++) 
            skillsArr.push(document.createElement('p'));
        
        skillsDiv.classList.add('skills');

        skillsArr.map((p, i) => {
            p.textContent = skillNames[i];
            p.classList.add('skill', `skill-${p.textContent}`);
            skillsDiv.appendChild(p);
        });

        infoContainer.appendChild(skillsDiv);
    }

    static displayProjectsView () {
        this.clearView();
        
        const projectsDiv = document.createElement('div');
        const projectArr = [];

        projectsDiv.classList.add('projects');

        for (let i = 0; i < 4; i++) projectArr.push(document.createElement('div'));

        projectArr.map(div => projectsDiv.appendChild(div));

        Array.from(projectsDiv.children).forEach((div, i) => {
            const output = 
            `
                <img src='${projectsDB[i].img}'>
                <h3><a href="${projectsDB[i].link}">${projectsDB[i].name}</a></h3>
            `;

            div.classList.add('project');
            div.insertAdjacentHTML('beforeend', output);
        });

        infoContainer.appendChild(projectsDiv);
    }

    static displayContactView () {
        this.clearView();

        console.log('contact');
        
    }
}


menuContainer.addEventListener('click', function (e) {
    e.preventDefault();

    if (e.target.className === 'skills') {
        UI.displaySkillsView();
    } else if (e.target.className === 'projects') {
        UI.displayProjectsView();
    } else if (e.target.className === 'contact') {
        UI.displayContactView();
    }
});