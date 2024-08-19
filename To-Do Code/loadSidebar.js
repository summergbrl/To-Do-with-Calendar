function loadSidebar() {
    fetch('sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
        })
        .then(() => {
            var sidebar = document.getElementById("sidebar");
            var openBtn = document.querySelector(".open-btn");
            sidebar.style.left = "-250px";
        });
}

function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var openBtn = document.querySelector(".open-btn");
    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-250px";
        openBtn.style.display = "block";
    } else {
        sidebar.style.left = "0px";
        openBtn.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', loadSidebar);