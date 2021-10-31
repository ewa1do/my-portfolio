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
        const title = document.createElement('h2');
        const html = document.createElement('p');
        const css = document.createElement('p');
        const js = document.createElement('p');
        const git = document.createElement('p');

        title.textContent = 'My Skills';
        html.textContent = 'html';
        css.textContent = 'css';
        js.textContent = 'javascript'
        git.textContent = 'git'

        skillsDiv.classList.add('skills');
        title.classList.add('skills-title');
        html.classList.add('skill', 'skill-html');
        css.classList.add('skill', 'skill-css');
        js.classList.add('skill', 'skill-js');
        git.classList.add('skill', 'skill-git');

        skillsDiv.appendChild(title);
        skillsDiv.appendChild(html);
        skillsDiv.appendChild(css);
        skillsDiv.appendChild(js);
        skillsDiv.appendChild(git);

        infoContainer.appendChild(skillsDiv);
    }

    static displayProjectsView () {
        this.clearView();
        
        const projectsDiv = document.createElement('div');
        projectsDiv.classList.add('projects');

        const project1 = document.createElement('div');
        const project2 = document.createElement('div');
        const project3 = document.createElement('div');
        const project4 = document.createElement('div');

        projectsDiv.appendChild(project1);
        projectsDiv.appendChild(project2);
        projectsDiv.appendChild(project3);
        projectsDiv.appendChild(project4);

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
}


menuContainer.addEventListener('click', function (e) {
    e.preventDefault();
    console.log(e.target.className);

    if (e.target.className === 'skills') {
        UI.displaySkillsView();
    } else if (e.target.className === 'projects') {
        UI.displayProjectsView();
    }

});