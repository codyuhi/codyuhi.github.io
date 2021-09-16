function toggleCourses(type) {
    const div = document.getElementById(type + '-list');
    if (div.classList.contains('hidden')) {
        switch (type) {
            case 'stem':
                document.getElementById('non-stem-list').classList.add('hidden');
                break;
            default:
                document.getElementById('stem-list').classList.add('hidden');
        }
        div.classList.remove('hidden');
    } else {
        div.classList.add('hidden');
    }
}

function closeNavbar() {
    document.getElementById('collapsible-nav').click();
}

function changeNavbarTransparency() {
    var scroll = $(window).scrollTop();
    var os = $('#intro').offset().top;
    var ht = $('#intro').height();
    if (scroll > os + ht) {
        $('#page-navbar').addClass('navbar-background');
    } else {
        $('#page-navbar').removeClass('navbar-background');
    }
}

$(function () {
    $(document).ready(changeNavbarTransparency);
    $(window).scroll(changeNavbarTransparency);
});