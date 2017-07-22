$(function() {
    $('ul.tabs').on('click', 'a', function(event) {
        var tabLink = $(event.currentTarget);
        var tabPage = tabLink.attr('href').slice(1);
        $('#tab-container').load(`/${tabPage}.html`);
        return false;
    });
});