console.log("load correct");

jQuery(function ($) {
$("button").hover(function () {
$(this).css('opacity', '.3');
}, function () {
$(this).css('opacity', '1');
});
});