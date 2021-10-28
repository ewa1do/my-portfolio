'use strict';

const mainContainer = document.querySelector('.main-container');
const infoContainer = document.querySelector('.personal-info');
const skills = document.querySelector('.skills');


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
}



skills.addEventListener('click', function (e) {
    e.preventDefault();
    UI.displaySkillsView();
})