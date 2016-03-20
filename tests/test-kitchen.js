//var request = require('supertest'),
//    pdiKitchen=require('../lib'),
//    os=require('os');
////
////var testConfig={
////    path:'/home/helios/Programms/data-integration/kitchen.sh'
////}
////
////
////describe('kitchen: _existsFile:', function () {
////    it('file does not exist '+'not_exits-'+testConfig.path, function () {
////        (function(){
////            var myKitchen=new pdiKitchen.kitchen({path:'not_exits-'+testConfig.path});
////        }).should.throw(/no such file or directory/);
////    });
////
////    it('file exists '+testConfig.path, function () {
////        (function(){
////            var myKitchen=new pdiKitchen.kitchen({path:testConfig.path});
////        }).should.not.throw();
////    });
////
////});