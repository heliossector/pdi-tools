pdi-tools 
====================================================
Pentaho data integration management tool

kitchen
-----
```js
var pdi_tools=require('pdi_tools');

var myK=new pdi_tools.kitchen('/home/helios/Programms/data-integration/kitchen.sh',
    {file:__dirname+"/testJob.kjb",
     logfile:__dirname+"/testJob_myKjbFn2.log"}
);

myK.run(function(err,data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
```
 
 file
 ---
 ```js
 var pdi_tools=require('pdi_tools');
 
 var myKjb=new pdi_tools.file(__dirname+'/testJob.kjb');
 
console.log('name='+myKjb.get('name'));
console.log('parameters='+JSON.stringify(myKjb.get('parameters')));
```