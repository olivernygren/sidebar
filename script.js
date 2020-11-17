
const sidebarButton = document.getElementById('sidebar-btn');
const sidebar = document.querySelector('.sidebar');
const profile = document.querySelector('.profile');
const categories = document.querySelector('.categories');
const settings = document.querySelector('.settings');

sidebarButton.addEventListener('click', showSidebar);

function showSidebar() {

    if (sidebar.classList.contains('show-sidebar')) {

        sidebar.classList.remove('show-sidebar');
        sidebar.style.opacity = 0;

    } else {

        sidebar.classList.add('show-sidebar');
        sidebar.style.opacity = null;

    }

}