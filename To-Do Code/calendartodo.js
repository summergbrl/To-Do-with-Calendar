document.addEventListener('DOMContentLoaded', function() {
    const calendar = document.getElementById('calendar');
    const selectedDateElement = document.getElementById('selected-date');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    let selectedDate = null;
    let tasks = JSON.parse(localStorage.getItem('tasks')) || {};

    function generateCalendar() {
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const daysInMonth = new Date(2023, 10, 0).getDate(); // November 2023

        // Add headers
        daysOfWeek.forEach(day => {
            const header = document.createElement('div');
            header.classList.add('header');
            header.textContent = day;
            calendar.appendChild(header);
        });

        // Add days
        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('day');
            dayElement.textContent = day;
            dayElement.addEventListener('click', () => selectDate(day, dayElement));
            calendar.appendChild(dayElement);
        }
    }

    function selectDate(day, dayElement) {
        selectedDate = `2023-11-${String(day).padStart(2, '0')}`;
        selectedDateElement.textContent = selectedDate;
        taskInput.value = '';
        renderTasks();
        document.querySelectorAll('.day').forEach(el => el.classList.remove('selected'));
        dayElement.classList.add('selected');
    }

    function addTask() {
        if (!selectedDate) {
            alert('Please select a date first.');
            return;
        }
        const task = taskInput.value.trim();
        if (task) {
            if (!tasks[selectedDate]) {
                tasks[selectedDate] = [];
            }
            tasks[selectedDate].push(task);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            taskInput.value = '';
            renderTasks();
        }
    }

    function removeTask(index) {
        if (tasks[selectedDate]) {
            tasks[selectedDate].splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            renderTasks();
        }
    }

    function renderTasks() {
        taskList.innerHTML = '';
        if (tasks[selectedDate]) {
            tasks[selectedDate].forEach((task, index) => {
                const taskItem = document.createElement('li');
                taskItem.textContent = task;
                const removeButton = document.createElement('button');
                removeButton.textContent = 'Remove';
                removeButton.addEventListener('click', () => removeTask(index));
                taskItem.appendChild(removeButton);
                taskList.appendChild(taskItem);
            });
        }
    }

    generateCalendar();

    // Add event listener for the Add Task button
    document.querySelector('button').addEventListener('click', addTask);
});