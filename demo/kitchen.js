var pdiKitchen=require('../'),
    fs = require('fs');

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

var myKjb=new pdiKitchen.kitchen('/home/helios/Programms/data-integration/kitchen.sh',
    {
        file:__dirname+"/testJob.kjb",
        logfile:__dirname+"/testJob_myKjbFn2.log"
    }
);

myKjb.run(function(err,data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});