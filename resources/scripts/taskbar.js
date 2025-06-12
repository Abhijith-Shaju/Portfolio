//start button functionality
const startMenu = document.getElementById('start-menu');
startMenu.style.display = 'none';

const startButton = document.getElementById('taskbar-start');
startButton.addEventListener('click', () => {
    if (startMenu.style.display === 'none') {
        startMenu.style.display = 'block';
    } else {
        startMenu.style.display = 'none';
    }
});

// Taskbar elements
const taskbarElements = [];

function openApp(appName) {
    if (!taskbarElements.includes(appName)) {
        taskbarElements.push(appName);
        updateTaskbar();
    }
}

function closeApp(appName) {
    const index = taskbarElements.indexOf(appName);
    if (index > -1) {
        taskbarElements.splice(index, 1);
        updateTaskbar();
    }
}

const taskbarList = document.getElementById('taskbar-list');
function updateTaskbar(){
    taskbarList.innerHTML = ''; // Clear existing elements
    taskbarElements.forEach(x => {
        const app = document.createElement('div');
        app.className = 'taskbar-app';
        app.textContent = x;
        taskbarList.appendChild(app);
    });
}