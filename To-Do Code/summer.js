const inputBox= document.getElementById("Summer");
const listContainer= document.getElementById("t-l");

function addtask()
    {
    if (inputBox.value === '')
        {
        alert("Please enter a task");
    }
    else
    {
        let su= document.createElement("su");
        su.innerHTML= inputBox.value;
        listContainer.appendChild(su);
        let span= document.createElement("span");
        span.innerHTML= "x";
        su.appendChild(span);   
    }
    inputBox.value= '';
    saveData();
}

listContainer.addEventListener('click', (e) => {
    const { tagName, parentElement, classList } = e.target;

    if (tagName === "SU") {
        classList.toggle("checked");
        saveData();
    } else if (tagName === "SPAN") {
        parentElement.remove();
        saveData();
    }
});

function saveData()
{
    localStorage.setItem("taskList", listContainer.innerHTML);
}   
function showTask()
{
    listContainer.innerHTML= localStorage.getItem("taskList");
}

function updateDate() {
    const dateDisplay = document.getElementById('date-display');
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    dateDisplay.textContent = now.toLocaleDateString(undefined, options);
}
updateDate();
showTask();