document.addEventListener('DOMContentLoaded', function() {
    const allTasksList = document.getElementById('all-tasks-list');
    const tasks = JSON.parse(localStorage.getItem('tasks')) || {};

    function renderAllTasks() {
        allTasksList.innerHTML = '';
        for (const date in tasks) {
            const dateItem = document.createElement('li');
            dateItem.textContent = `Tasks for ${date}:`;
            const taskList = document.createElement('ul');
            tasks[date].forEach(task => {
                const taskItem = document.createElement('li');
                taskItem.textContent = task;
                taskList.appendChild(taskItem);
            });
            dateItem.appendChild(taskList);
            allTasksList.appendChild(dateItem);
        }
    }

    renderAllTasks();
});