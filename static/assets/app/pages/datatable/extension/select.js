"use strict";
$(function () {
    $("#datatable-1").DataTable({responsive: true, select: true});
    $("#datatable-2").DataTable({responsive: true, select: {style: "multi"}});
    $("#datatable-3").DataTable({responsive: true, select: {style: "os", items: "cell"}})
});