
const sidebarButton = document.getElementById('sidebar-btn');
const sidebar = document.querySelector('.sidebar');
const hasWidth = getComputedStyle(sidebar);

sidebarButton.addEventListener('click', showSidebar);

function showSidebar() {

    if (sidebar.classList.contains('show-sidebar')) {
        sidebar.classList.remove('show-sidebar');
    } else {
        sidebar.classList.add('show-sidebar');
    }

}