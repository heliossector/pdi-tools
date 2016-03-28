var pdi_tool=require('../');

var myTrn=new pdi_tool.file(__dirname+'/testTrn.ktr');
console.log(myTrn.toString());
console.log('info='+JSON.stringify(myTrn.get('info')));

var myKjb=new pdi_tool.file(__dirname+'/testJob.kjb');
console.log(myKjb.toString());
console.log('name='+myKjb.get('name'));
console.log('parameters='+JSON.stringify(myKjb.get('parameters')));
console.log('job_version='+JSON.stringify(myKjb.get('job_version')));
console.log('description='+JSON.stringify(myKjb.get('description')));
console.log('created_date='+JSON.stringify(myKjb.get('created_date')));
console.log('created_user='+JSON.stringify(myKjb.get('created_user')));


