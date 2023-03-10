"use strict";
$(function () {
    $("#datatable-1").DataTable({responsive: true, order: [[4, "desc"]], rowGroup: {dataSrc: 4}});
    $("#datatable-2").DataTable({
        responsive: true,
        order: [[4, "desc"]],
        rowGroup: {
            dataSrc: 4, endRender: function endRender(rows, group) {
                var avg = rows.data().pluck(5).reduce(function (a, b) {
                    return a + b.replace(/[^\d]/g, "") * 1
                }, 0) / rows.count();
                return "Average salary in ".concat(group, " : ").concat($.fn.dataTable.render.number(",", ".", 0, "$").display(avg))
            }
        }
    });
    $("#datatable-3").DataTable({
        responsive: true,
        order: [[4, "desc"], [3, "asc"]],
        rowGroup: {dataSrc: [4, 3]},
        columnDefs: [{targets: [3, 4], visible: false}]
    })
});