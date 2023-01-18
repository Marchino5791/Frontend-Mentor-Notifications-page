
$(".header__maar").click(function() {
    $(".notification").removeClass("unreaded");
    $(".notification__text__message__point").addClass("read");
    $(".header__title__number").text("0");
})