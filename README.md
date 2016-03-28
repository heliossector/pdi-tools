pdi-tools 
====================================================
Pentaho data integration management tool

kitchen
-----
```js
var pdi_tools=require('pdi_tools');

var myKjb1=new pdiKitchen.kitchen('/home/helios/Programms/data-integration/kitchen.sh',
    {
        logfile:__dirname+"/testJob_myKjbFn1.log",
        level:"Basic",
        file:__dirname+"/testJob.kjb",
        params:{
            par1:'newParam1',
            par2:'newParam2'
        }
    }
);

myKjb1.run(function(err,data) {
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