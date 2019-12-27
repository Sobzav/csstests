function ready(handler) {
    if (/complete|loaded|interactive/.test(document.readyState) && document.body) {
        handler();
    } else {
        document.addEventListener('DOMContentLoaded', handler, false);
    }
}

ready(function() {
    initMenu();

    var styleLight = document.querySelector('.button[data-style="light"]');
    var styleDark = document.querySelector('.button[data-style="dark"]');
    var styleExpanded = document.querySelector('.button[data-style="expanded"]');
    var styleCollapsed = document.querySelector('.button[data-style="collapsed"]');
    var menu = document.querySelector('#menu');
    if (menu) {
        styleLight.addEventListener('click', function(e) {
            e.preventDefault();

            menu.classList.toggle('is-dark');
            styleLight.classList.toggle('is-selected');
            styleLight.classList.toggle('is-success');
            styleDark.classList.toggle('is-selected');
            styleDark.classList.toggle('is-success');
        });
        styleDark.addEventListener('click', function(e) {
            e.preventDefault();

            menu.classList.toggle('is-dark');
            styleLight.classList.toggle('is-selected');
            styleLight.classList.toggle('is-success');
            styleDark.classList.toggle('is-selected');
            styleDark.classList.toggle('is-success');
        });
        styleExpanded.addEventListener('click', function(e) {
            e.preventDefault();

            menu.classList.toggle('is-collapsed');
            styleExpanded.classList.toggle('is-selected');
            styleExpanded.classList.toggle('is-success');
            styleCollapsed.classList.toggle('is-selected');
            styleCollapsed.classList.toggle('is-success');
        });
        styleCollapsed.addEventListener('click', function(e) {
            e.preventDefault();

            menu.classList.toggle('is-collapsed');
            styleExpanded.classList.toggle('is-selected');
            styleExpanded.classList.toggle('is-success');
            styleCollapsed.classList.toggle('is-selected');
            styleCollapsed.classList.toggle('is-success');
        });
    }
});