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