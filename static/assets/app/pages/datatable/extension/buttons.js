"use strict";
$(function () {
    $("#datatable-1").DataTable({
        responsive: true,
        dom: "\n      <'row'<'col-sm-6 text-center text-sm-start'B><'col-sm-6 text-center text-sm-start mt-2 mt-sm-0'f>>\n      <'row'<'col-12'tr>>\n      <'row align-items-baseline'<'col-md-5'i><'col-md-2 mt-2 mt-md-0'l><'col-md-5'p>>\n    ",
        buttons: [{extend: "copy", className: "btn btn-flat-primary"}, {
            extend: "csv",
            className: "btn btn-flat-primary"
        }, {extend: "excel", className: "btn btn-flat-primary"}, {
            extend: "pdf",
            className: "btn btn-flat-primary"
        }, {extend: "print", className: "btn btn-flat-primary"}]
    });
    $("#datatable-2").DataTable({
        responsive: true,
        dom: "\n      <'row'<'col-sm-6 text-center text-sm-start'B><'col-sm-6 text-center text-sm-start mt-2 mt-sm-0'f>>\n      <'row'<'col-12'tr>>\n      <'row align-items-baseline'<'col-md-5'i><'col-md-2 mt-2 mt-md-0'l><'col-md-5'p>>\n    ",
        buttons: [{
            extend: "collection",
            text: "Controls",
            className: "btn btn-flat-primary",
            buttons: [{
                text: "Toggle start date", action: function action(e, dt, node, config) {
                    dt.column(-2).visible(!dt.column(-2).visible())
                }
            }, {
                text: "Toggle salary", action: function action(e, dt, node, config) {
                    dt.column(-1).visible(!dt.column(-1).visible())
                }
            }, {collectionTitle: "Visibility control", extend: "colvis", collectionLayout: "two-column"}]
        }]
    })
});