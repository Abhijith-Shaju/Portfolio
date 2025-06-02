const about = document.getElementById('about-icon');
const projects = document.getElementById('projects-icon');
const skills = document.getElementById('skills-icon');
const contact = document.getElementById('contact-icon');

// Windows
const about_window = document.getElementById('about');
const projects_window = document.getElementById('projects');
const skills_window = document.getElementById('skills');
const contact_window = document.getElementById('contact');


// Taskbar elements
const about_task = document.getElementById('about_taskbar');
const projects_task = document.getElementById('projects_taskbar');
const skills_task = document.getElementById('skills_taskbar');
const contact_task = document.getElementById('contact_taskbar');

let index = 1;
let abt = true, prj = true, skl = true, cnt = true;

// Hide all windows initially
about_window.style.display = 'none';
projects_window.style.display = 'none';
skills_window.style.display = 'none';   
contact_window.style.display = 'none';

about.addEventListener('click', () => {
    about_window.style.display = 'block';
    about_window.style.zIndex = index++;
    about_task.classList.add('taskbar-apps-open');
    abt = true;
});

projects.addEventListener('click', () => {
    projects_window.style.display = 'block';
    projects_window.style.zIndex = index++;
    projects_task.classList.add('taskbar-apps-open');
    prj = true;
});

skills.addEventListener('click', () => {
    skills_window.style.display = 'block';
    skills_window.style.zIndex = index++;
    skills_task.classList.add('taskbar-apps-open');
    skl = true;
});

contact.addEventListener('click', () => {
    contact_window.style.display = 'block';
    contact_window.style.zIndex = index++;
    contact_task.classList.add('taskbar-apps-open');
    cnt = true;
});

// Taskbar click events

about_task.addEventListener('click', () => {
    if (abt) {
        about_window.style.display = 'none';
        about_task.classList.remove('taskbar-apps-open');
        abt = false;
        return;
    }
    about_window.style.display = 'block';
    about_window.style.zIndex = index++;
    about_task.classList.add('taskbar-apps-open');
    abt = true;
});

projects_task.addEventListener('click', () => {
    if (prj) {
        projects_window.style.display = 'none';
        projects_task.classList.remove('taskbar-apps-open');
        prj = false;
        return;
    }
    projects_window.style.display = 'block';
    projects_window.style.zIndex = index++;
    projects_task.classList.add('taskbar-apps-open');
    prj = true;
});

skills_task.addEventListener('click', () => {
    if (skl) {
        skills_window.style.display = 'none';
        skills_task.classList.remove('taskbar-apps-open');
        skl = false;
        return;
    }
    skills_window.style.display = 'block';
    skills_window.style.zIndex = index++;
    skills_task.classList.add('taskbar-apps-open');
    skl = true;
});

contact_task.addEventListener('click', () => {
    if (cnt) {
        contact_window.style.display = 'none';
        contact_task.classList.remove('taskbar-apps-open');
        cnt = false;
        return;
    }
    contact_window.style.display = 'block';
    contact_window.style.zIndex = index++;
    contact_task.classList.add('taskbar-apps-open');
    cnt = true;
});