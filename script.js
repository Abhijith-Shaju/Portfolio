const about = document.getElementById('about-icon');
const projects = document.getElementById('projects-icon');
const skills = document.getElementById('skills-icon');
const contact = document.getElementById('contact-icon');

// Windows
const about_window = document.getElementById('about');
const projects_window = document.getElementById('projects');
const skills_window = document.getElementById('skills');
const contact_window = document.getElementById('contact');
 

let index = 1;

// Hide all windows initially
about_window.style.display = 'none';
projects_window.style.display = 'none';
skills_window.style.display = 'none';   
contact_window.style.display = 'none';

about.addEventListener('click', () => {
    about_window.style.display = 'block';
    about_window.style.zIndex = index++;
});

projects.addEventListener('click', () => {
    projects_window.style.display = 'block';
    projects_window.style.zIndex = index++;
});

skills.addEventListener('click', () => {
    skills_window.style.display = 'block';
    skills_window.style.zIndex = index++;
});

contact.addEventListener('click', () => {
    contact_window.style.display = 'block';
    contact_window.style.zIndex = index++;
});

// handling window overlap

about_window.addEventListener('click', () => {
    about_window.style.zIndex = index++;
});
projects_window.addEventListener('click', () => {
    projects_window.style.zIndex = index++;
});
skills_window.addEventListener('click', () => {
    skills_window.style.zIndex = index++;
});
contact_window.addEventListener('click', () => {
    contact_window.style.zIndex = index++;
});


// navigation button's functionality for each window


document.addEventListener('click', (event) => {
    if (event.target.classList.contains('close')) {
        const windowId = event.target.getAttribute('data-window');
        const windowElement = document.getElementById(windowId);

        windowElement.style.display = 'none';
        
    } else if (event.target.classList.contains('restore')) {
        const windowId = event.target.getAttribute('data-window');
        const windowElement = document.getElementById(windowId);

        if(windowElement.classList.contains('restoreBtn') ) {
            windowElement.classList.remove('restoreBtn');
        }else{
            windowElement.classList.add('restoreBtn');
        }

    } else if (event.target.classList.contains('minimize')) {
        const windowId = event.target.getAttribute('data-window');
        const windowElement = document.getElementById(windowId);

        windowElement.style.display = 'none';
    }
});