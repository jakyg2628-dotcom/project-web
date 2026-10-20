
$(document).ready(function () {
    $("#btnTema").on("click", function () {
        $("body").toggleClass("mode-gelap");

        if ($("body").hasClass("mode-gelap")) {
            $(this).text("☀️ Mode Terang");
        } else {
            $(this).text("🌙 Mode Gelap");
        }
    });

    $(".hero-section").hide().fadeIn(700);

    $(".navbar .nav-link").on("click", function () {
        $(".navbar .nav-link").removeClass("active");
        $(this).addClass("active");
    });
});
