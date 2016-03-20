var request = require('supertest'),
    pdiKitchen=require('../lib'),
    os=require('os');

//
//describe('kjb.js ', function () {
//
//
//    describe('_existsFile:', function () {
//
//        it('file does not exist /testJob_non.kjb', function () {
//            var path=__dirname+'/testJob_non.kjb';
//            (function(){
//                var myKjb=new pdiKitchen.kjb({path:path});
//            }).should.throw(/no such file or directory/);
//        });
//
//        it('file exists /testJob.kjb', function () {
//            var path=__dirname+'/testJob.kjb';
//            (function(){
//                var myKjb=new pdiKitchen.kjb({path:path});
//            }).should.not.throw();
//        });
//
//    });
//
//    describe('_getCmd:', function () {
//        it('All', function () {
//            var path, cmd, pathLogFileName;
//
//            path = __dirname + '/testJob.kjb';
//            pathLogFileName = __dirname + '/testJob.log';
//
//            if (os.platform() == 'Windows_NT') {
//                cmd = '/file:"' + __dirname + '/testJob.kjb" ' + '"-param:par1=newParam1" "-param:par2=newParam1"' + ' /level:Basic > ' + pathLogFileName;
//            } else {
//                cmd = '-file="' + __dirname + '/testJob.kjb" ' + '"-param:par1=newParam1" "-param:par2=newParam1"' + ' --level=Basic >> ' + pathLogFileName;
//            }
//
//            var kjb = new pdiKitchen.kjb({
//                path: path,
//                log: {level: "Basic", fileName: pathLogFileName},
//                params: {par1: 'newParam1', par2: 'newParam1'}
//            });
//            (kjb._getCmd()).should.equal(cmd);
//
//        });
//
//        it('Сommand without parameters.', function () {
//            var path, cmd, pathLogFileName;
//
//            path = __dirname + '/testJob.kjb';
//            pathLogFileName = __dirname + '/testJob.log';
//
//            if (os.platform() == 'Windows_NT') {
//                cmd = '/file:"' + __dirname + '/testJob.kjb" /level:Basic > ' + pathLogFileName;
//            } else {
//                cmd = '-file="' + __dirname + '/testJob.kjb" --level=Basic >> ' + pathLogFileName;
//            }
//
//            var kjb = new pdiKitchen.kjb({path: path, log: {level: "Basic", fileName: pathLogFileName}});
//            (kjb._getCmd()).should.equal(cmd);
//
//        });
//
//        it('Сommand without parameters, log output.', function () {
//            var path, cmd;
//
//            path = __dirname + '/testJob.kjb';
//
//            if (os.platform() == 'Windows_NT') {
//                cmd = '/file:"' + __dirname + '/testJob.kjb" /level:Basic'
//            } else {
//                cmd = '-file="' + __dirname + '/testJob.kjb" --level=Basic'
//            }
//
//            var kjb = new pdiKitchen.kjb({path: path, log: {level: "Basic"}});
//            (kjb._getCmd()).should.equal(cmd);
//
//        });
//
//        it('Сommand without parameters, log , log output.', function () {
//            var path, cmd;
//
//            path = __dirname + '/testJob.kjb';
//
//            if (os.platform() == 'Windows_NT') {
//                cmd = '/file:"' + __dirname + '/testJob.kjb"'
//            } else {
//                cmd = '-file="' + __dirname + '/testJob.kjb"'
//            }
//
//            var kjb = new pdiKitchen.kjb({path: path});
//            (kjb._getCmd()).should.equal(cmd);
//        });
//
//    });
//
//    describe('run():', function () {
//
//        describe('Throw:', function () {
//        it('myKjb.run(null, "simpleString"); The executable file must be specified. kitchen.sh or kitchen.bat', function () {
//            var path = __dirname + '/testJob.kjb';
//            (function () {
//                var myKjb = new pdiKitchen.kjb({path: path});
//                myKjb.run(null, 'simpleString');
//            }).should.throw(/The executable file must be specified. kitchen.sh or kitchen.bat/);
//        });
//
//        it('myKjb.run(null,null); The executable file must be specified. kitchen.sh or kitchen.bat', function () {
//            var path = __dirname + '/testJob.kjb';
//            (function () {
//                var myKjb = new pdiKitchen.kjb({path: path});
//                myKjb.run(null,null);
//            }).should.throw(/The executable file must be specified. kitchen.sh or kitchen.bat/);
//        });
//
//        it('myKjb.run("notEexistsFileName",null); The executable file must be specified. kitchen.sh or kitchen.bat', function () {
//            var path = __dirname + '/testJob.kjb';
//            (function () {
//                var myKjb = new pdiKitchen.kjb({path: path});
//                myKjb.run('notEexistsFileName',null);
//            }).should.throw(/The executable file must be specified. kitchen.sh or kitchen.bat/);
//        });
//
//        });
//
//    });
//
//});