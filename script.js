
const sidebarButton = document.getElementById('sidebar-btn');
const sidebar = document.querySelector('.sidebar');
const profile = document.querySelector('.profile');
const categories = document.querySelector('.categories');
const settings = document.querySelector('.settings');

sidebarButton.addEventListener('click', showSidebar);

function showSidebar() {

    if (sidebar.classList.contains('show-sidebar')) {

        sidebar.classList.remove('show-sidebar');
        profile.classList.add('display-none');
        categories.classList.add('display-none');
        settings.classList.add('display-none');

    } else {

        sidebar.classList.add('show-sidebar');
        profile.classList.remove('display-none');
        categories.classList.remove('display-none');
        settings.classList.remove('display-none');
    }

}