
 
        //your custom ajax request here
        function ajaxRequest(params) {
            var url = '/now.json'
            $.get(url + '?' + $.param(params.data)).then(function (res) {
                params.success(res)
            })
        };

      $(function () {
                //#table表示的是上面table表格中的id
                $("#table").bootstrapTable('destroy').bootstrapTable({
                    fixedColumns: true,
               
                  fixedRows: true,
   
                    fixedNumber: 1 //固定列数
                });
              
                
            });

    function idFormatter() {
    return 'Total'
    }

    function nameFormatter(data) {
    return data.length
    }
      function detailFormatter(index, row) {
      var html = []
      $.each(row, function (key, value) {
      html.push('<p><b>' + key + ':</b> ' + value + '</p>')
      })
      return html.join('')
      }
