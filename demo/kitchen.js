var pdiKitchen = require('../'),
    kitchen = require('../').exec,
    fs = require('fs');

var kitchenPath = '/home/helios/Programms/data-integration/kitchen.sh';

//1)
var ktch1 = new pdiKitchen.kitchen(kitchenPath, {
    logfile: __dirname + "/testJob_myKjbFn1_chP1.log",
    level: "Basic",
    file: __dirname + "/testJob.kjb",
    params: {
        par1: 'newParam1',
        par2: 'newParam2'
    }
});


var myKjb=ktch1.jobFile;
console.log(myKjb.toString());
console.log('name='+myKjb.get('name'));
console.log('parameters='+JSON.stringify(myKjb.get('parameters')));
console.log('job_version='+JSON.stringify(myKjb.get('job_version')));
console.log('description='+JSON.stringify(myKjb.get('description')));
console.log('created_date='+JSON.stringify(myKjb.get('created_date')));
console.log('created_user='+JSON.stringify(myKjb.get('created_user')));


var chP1 = ktch1.run(undefined, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    }
);

console.log(chP1.pid);

//2 ------------------------------------------------------------------------
var ktch2 = new pdiKitchen.kitchen(kitchenPath);
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

//3 ------------------------------------------------------------------------
var ktch3 = new pdiKitchen.kitchen(kitchenPath);
var chP3 = ktch3.run({
        logfile: __dirname + "/testJob_myKjbFn1_chP3.log",
        level: "Basic",
        file: __dirname + "/testJob.kjb",
        params: {
            par1: 'newParam1',
            par2: 'newParam2'
        },
        callback: function (err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
            }
        }
    }
);

console.log(chP3.pid);


//4 ------------------------------------------------------------------------
var ktch4 = new pdiKitchen.kitchen(kitchenPath);
var chP4 = ktch4.run({
        logfile: __dirname + "/testJob_myKjbFn1_chP4.log",
        level: "Basic",
        file: __dirname + "/testJob.kjb",
        params: {
            par1: 'newParam1',
            par2: 'newParam2'
        },
        callback: function (err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log('in:' + data);
            }
        }
    },
    function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log('out:' + data);
        }
    }
);

console.log(chP4.pid);

//5 ------------------------------------------------------------------------
kitchen({
        pathKitchen: kitchenPath, logfile: __dirname + "/testJob_myKjbFn1_chP5.log",
        level: "Basic",
        file: __dirname + "/testJob.kjb",
        params: {
            par1: 'newParam1',
            par2: 'newParam2'
        }
    },
    function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    }
);

//6 ------------------------------------------------------------------------
kitchen({
        pathKitchen: kitchenPath,
        logfile: __dirname + "/testJob_myKjbFn1_chP6.log",
        level: "Basic",
        file: __dirname + "/testJob.kjb",
        params: {
            par1: 'newParam1',
            par2: 'newParam2'
        }
    },
    function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    }
);

//7 ------------------------------------------------------------------------
var myKjb = new pdiKitchen.kitchen('/home/helios/Programms/data-integration/kitchen.sh',
    {
        file: __dirname + "/testJob.kjb",
        logfile: __dirname + "/testJob_myKjbFn2.log"
    }
);

var chP1 = myKjb.run(function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

console.log(chP1.pid);