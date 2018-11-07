import Vue from 'vue'
function method5(tableid) {
  if (!!window.ActiveXObject || "ActiveXObject" in window) {
    var curTbl = document.getElementById(tableid);
    alert("请切换非IE浏览器进行表格导出")
    var oXL = new ActiveXObject("Excel.Application");
    var oWB = oXL.Workbooks.Add();
    var oSheet = oWB.ActiveSheet;
    var Lenr = curTbl.rows.length;
    for (i = 0; i < Lenr; i++) {
      var Lenc = curTbl.rows(i).cells.length;
      for (j = 0; j < Lenc; j++) {
        oSheet.Cells(i + 1, j + 1).value = curTbl.rows(i).cells(j).innerText;
      }
    }
    oXL.Visible = true;
  } else {
    tableToExcel(tableid)
  }
}

function Cleanup() {
  window.clearInterval(idTmr);
  CollectGarbage();
}
var tableToExcel = (function () {
  var uri = 'data:application/vnd.ms-excel;base64,',
    template = '<html><head><meta charset="UTF-8"></head><body><table>{table}</table></body></html>',
    base64 = function (s) {
      return window.btoa(unescape(encodeURIComponent(s)))
    },
    format = function (s, c) {
      return s.replace(/{(\w+)}/g,
        function (m, p) {
          return c[p];
        })
    }
  return function (table, name) {
    if (!table.nodeType) table = document.getElementById(table)
    var ctx = {
      worksheet: name || 'Worksheet',
      table: table.innerHTML
    }
    window.location.href = uri + base64(format(template, ctx))
  }
})();
if (typeof window !== 'undefined' && window.Vue) {
	window.method5 = method5
	Vue.use(method5)
}
export default { 
	method5
}