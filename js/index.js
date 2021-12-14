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
];

const contactDB = [
    {
        name: 'LinkedIn',
        icon: 'logo-linkedin',
        link: '#',
    },
    {
        name: 'Instagram',
        icon: 'logo-instagram',
        link: '#',
    },
    {
        name: 'Twitter',
        icon: 'logo-twitter',
        link: '#',
    },
    {
        name: 'Github',
        icon: 'logo-github',
        link: '#',
    },
];

const menuDB = [
    {
        href: '#',
        class: 'about',
        name: 'About me',
    },
    {
        href: '#',
        class: 'projects',
        name: 'My Projects',
    },
    {
        href: '#',
        class: 'skills',
        name: 'My Skills',
    },
    {
        href: '#',
        class: 'contact',
        name: 'Contact Me',
    }
];

const mainContainer = document.querySelector('.main-container');
const infoContainer = document.querySelector('.personal-info');

class UI {
    static clearView () {
        [...infoContainer.children].forEach(el => el.remove());
    }

    static displayMenuBar () {
        const menuContainer = document.createElement('nav');
        menuContainer.classList.add('nav');
        const menu = document.createElement('ul');

        menu.classList.add('menu');

        for (let i = 0; i < menuDB.length; i++) {
            const output = `
                <li><a href="${menuDB[i].href}" class="${menuDB[i].class}">${menuDB[i].name}</a></li>
            `;

            menu.insertAdjacentHTML('beforeend', output);
        }

        menuContainer.appendChild(menu);

        mainContainer.prepend(menuContainer);
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
        
        for (let p of skillNames) 
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

        for (let i = 0; i < 4; i++) 
            projectArr.push(document.createElement('div'));

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

        const contactContainer = document.createElement('div');
        const contactArr = [];

        contactContainer.classList.add('contacts');

        for (let i = 0; i < 4; i++) {
            contactArr.push(document.createElement('div'));
        }

        contactArr.map(div => contactContainer.appendChild(div));

        [...contactContainer.children].forEach((div, i) => {
            const output = 
            `
            <i><ion-icon name=${contactDB[i].icon}></ion-icon></i>
            <h4><a href=${contactDB[i].link}>${contactDB[i].name}</a></h4>
            `;

            div.classList.add('cont', `cont-${contactDB[i].name.toLowerCase()}`);
            div.insertAdjacentHTML('beforeend', output);
        });

        const output = `
            <ul class="contact-info">
                <li><i><ion-icon name="mail-outline"></ion-icon></i>this.eduardovera@gmail.com</li>
                <li><i><ion-icon name="call-outline"></ion-icon></i>+58 424 691 3238</li>
                <li><i><ion-icon name="location-outline"></ion-icon></i>Maracaibo Venezuela</li>
            </ul>
        `;

        infoContainer.appendChild(contactContainer);
        infoContainer.insertAdjacentHTML('beforeend', output);
    }

    static displayAboutView () {
        console.log('about');
        this.clearView();

        const aboutContainer = document.createElement('div');
        aboutContainer.classList.add('about-div');

        const profile = document.createElement('img');
        profile.setAttribute('src', 'img/user.png');

        const titleDiv = document.createElement('div');
        titleDiv.classList.add('title-div');

        const title = document.createElement('h1');
        const subTitle = document.createElement('h3');

        title.textContent = 'Eduardo Vera';
        subTitle.textContent = 'Front-End Developer';

        titleDiv.appendChild(title);
        titleDiv.appendChild(subTitle);

        const descDiv = document.createElement('div');
        descDiv.classList.add('desc-div');

        const descP = document.createElement('p');
        descP.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi voluptatibus natus quaerat temporibus numquam totam dolorum explicabo blanditiis doloribus? Sunt eum iste deleniti quasi corrupti inventore aut, adipisci vero repellendus.';
    
        descDiv.appendChild(descP);

        aboutContainer.appendChild(profile);
        aboutContainer.appendChild(titleDiv);
        aboutContainer.appendChild(descDiv);

        infoContainer.appendChild(aboutContainer);
    }
}


// document.addEventListener('DOMContentLoaded', UI.displayMenuBar());
// document.addEventListener('DOMContentLoaded', UI.displayAboutView());

// document.querySelector('.menu').addEventListener('click', function (e) {
//     e.preventDefault();

//     if (e.target.className === 'skills') {
//         UI.displaySkillsView();
//     } else if (e.target.className === 'projects') {
//         UI.displayProjectsView();
//     } else if (e.target.className === 'contact') {
//         UI.displayContactView();
//     } else if (e.target.className === 'about') {
//         UI.displayAboutView();
//     }
// });


class UI_2 {
    static displayNavBar () {
        const navbar = document.createElement('nav');
        const menu = document.createElement('ul');

        navbar.classList.add('nav');
        menu.classList.add('menu');

        for (let i = 0; i <  menuDB.length; i++) {
            const output = `<li><a href='${menuDB[i].href}' class='${menuDB[i].class}'>${menuDB[i].name}</a></li>`;

            menu.insertAdjacentHTML('beforeend', output);
        }

        navbar.appendChild(menu);
        mainContainer.appendChild(navbar);
    }

    static displayAboutMe () {
        const aboutDiv = document.createElement('div');
        const profileDiv = document.createElement('div');
        const profileImg = document.createElement('img');
        const titleDiv = document.createElement('div');
        const name = document.createElement('h1');
        const title = document.createElement('h3');
        const descDiv = document.createElement('div');
        const paragraph = document.createElement('p');
    
        aboutDiv.classList.add('about-me');
        profileDiv.classList.add('profile');
        profileImg.classList.add('profile-pic');
        profileImg.setAttribute('src', 'img/user.png');

        name.textContent = 'Eduardo Vera';
        title.textContent = 'Frontend Developer';
        titleDiv.classList.add('title');

        descDiv.classList.add('desc');
        paragraph.classList.add('desc-p');
        paragraph.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi voluptatibus natus quaerat temporibus numquam totam dolorum explicabo blanditiis doloribus? Sunt eum iste deleniti quasi corrupti inventore aut, adipisci vero repellendus.';

        profileDiv.appendChild(profileImg);
        titleDiv.appendChild(name);
        titleDiv.appendChild(title);
        descDiv.appendChild(paragraph);
        
        aboutDiv.appendChild(profileDiv);
        aboutDiv.appendChild(titleDiv);
        aboutDiv.appendChild(descDiv);

        mainContainer.appendChild(aboutDiv);
    }
}

document.addEventListener('DOMContentLoaded', UI_2.displayNavBar());
document.addEventListener('DOMContentLoaded', UI_2.displayAboutMe());


