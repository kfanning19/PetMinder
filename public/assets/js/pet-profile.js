$(function() {
    loadTab('dashboard');

    $('ul.tabs').on('click', 'a', function(event) {
        var tabLink = $(event.currentTarget);
        var tabName = tabLink.attr('href').slice(1);
        loadTab(tabName);
        return false;
    });

    function loadTab(tabName) {
        $('#tab-container').load(`/${tabName}.html`);
    }
});