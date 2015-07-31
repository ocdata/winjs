function ScaleContentToDevice() {
    scroll(0, 0);
    var viewportHeight = $(window).height();
    var content = $("#bar");
    var contentMargins = content.outerHeight() - content.height();
    var contentheight = viewportHeight - contentMargins;
    content.height(contentheight);
};

$(document).on("pageshow", function () {
    ScaleContentToDevice();
});
$(window).on('resize orientationchange', function () {
    ScaleContentToDevice()
});