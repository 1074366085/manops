"use strict";
$(function () {
    $("#fullscreen-trigger").on("click", function () {
        var active = $("body").data("fullscreen-active");
        active ? document.exitFullscreen() : document.documentElement.requestFullscreen()
    });
    document.onfullscreenchange = function () {
        if (document.fullscreenElement) {
            $("body").addClass("fullscreen-active");
            $("body").data("fullscreen-active", true)
        } else {
            $("body").removeClass("fullscreen-active");
            $("body").data("fullscreen-active", false)
        }
    }
});