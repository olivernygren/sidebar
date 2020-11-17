
const sidebarButton = document.getElementById('sidebar-btn');
const sidebar = document.getElementById('sidebar')

sidebarButton.addEventListener('click', showSidebar);

function showSidebar() {

    if (sidebar.getComputedStyle('width = 100%')) {
        sidebar.style.width = '0';
    } else {
        sidebar.style.width = '100%';
    }

}