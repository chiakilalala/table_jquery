# Bootstrap table 筆記

[官方文件](https://examples.bootstrap-table.com)

jQuery 的表格套件 功能強大 

引入文件
只是要套入第三方套件很多， 如果忘記會很麻煩

```
<!-- css -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css">
    <link href="https://unpkg.com/bootstrap-table@1.14.2/dist/bootstrap-table.min.css" rel="stylesheet">
```

```
 <!-- js -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://unpkg.com/bootstrap-table@1.14.2/dist/bootstrap-table.min.js"></script>
```


   
注意：1. 順序不要亂；2. 根目錄依據自己項目而定 



* data-toggle="table"表示的是啟用bootstrap表格，
* data-height="200"表示設置表格的高度，用於配置固定表頭
* data-show-columns="true" 左上方可以選擇要出線的表頭
* data-pagination="true" 可頁數標籤

#### 固定列

```
$(function(){
 //#table表示的是上面table表格中的id
 $("#table").bootstrapTable('destroy').bootstrapTable({
        fixedColumns: true, 
        fixedNumber: 1 //固定列数
    });
})
```

