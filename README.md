pdi-tools 
====================================================
Pentaho data integration management tool

kitchen
-----
```js
var pt = require('pdi_tools');

var kitchenPath = '/home/helios/Programms/data-integration/kitchen.sh';

var ktch2 = new pt.kitchen(kitchenPath);
var chP2 = ktch2.run({
    logfile: __dirname + "/testJob_myKjbFn1_chP2.log",
    level: "Basic",
    file: __dirname + "/testJob.kjb",
    params: {
        par1: 'newParam1',
        par2: 'newParam2'
    }
}, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

console.log(chP2.pid);

```
 
 file
---
```js
var pdi_tool = require('pdi_tools');

var myTrn=new pdi_tool.file(__dirname+'/testTrn.ktr');
console.log(myTrn.toString());
console.log('info='+JSON.stringify(myTrn.get('info')));

var myKjb=new pdi_tool.file(__dirname+'/testJob.kjb');
console.log(myKjb.toString());
console.log('name='+myKjb.get('name'));
console.log('parameters='+JSON.stringify(myKjb.get('parameters')));
console.log('job_version='+ JSON.stringify(myKjb.get('job_version')));
console.log('description='+JSON.stringify(myKjb.get('description')));
console.log('created_date='+JSON.stringify(myKjb.get('created_date')));
console.log('created_user='+JSON.stringify(myKjb.get('created_user')));

```