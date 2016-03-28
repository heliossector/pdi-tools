var pdiKitchen=require('../');


var testConfig={
    path:'/home/helios/Programms/data-integration/kitchen.sh'
};

describe('Kitchen', function () {

    it('throw nothing '+testConfig.path, function () {
        new pdiKitchen.kitchen(testConfig.path,{file:__dirname+"/testJob.kjb"}).should.not.throw();
    });

    it('throw "no such file or directory"', function () {
        (function(){
            var myKitchen=  new pdiKitchen.kitchen('not_exits',{file:__dirname+"/testJob.kjb"});
        }).should.throw(/no such file or directory/);
    });

    it('throw "Options must be specified"', function () {
        (function(){
            var myKitchen=  new pdiKitchen.kitchen('not_exits');
        }).should.throw(/Options must be specified/);
    });

    it('throw "Options.file must be specified"', function () {
        (function(){
            var myKitchen=  new pdiKitchen.kitchen('not_exits',{});
        }).should.throw(/Options.file must be specified/);
    });

    it('throw "pathKitchen must be specified!"', function () {
        (function(){
            var myKitchen=  new pdiKitchen.kitchen(null,{
                params:{
                    par1:'newParam1',
                    par2:'newParam2'
                },
                file:__dirname+"/testJob.kjb"
            });
        }).should.throw(/pathKitchen must be specified/);
    });


    it('run()', function () {
        (function(){

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

        }).should.not.throw();
    });
});