var pdi_tool=require('../');

var myTrn=new pdi_tool.file(__dirname+'/testTrn.ktr');
var myKjb=new pdi_tool.file(__dirname+'/testJob.kjb');


describe('Job file:', function () {

    it('get("name")', function () {
        myKjb.get("name").should.equal('testJob');
    });

    it('get("description")', function () {
        myKjb.get("description").should.equal('Test job fo pdi_kitchen');
    });

    it('file not exists throw "no such file or directory"', function () {
        (function(){
            var myKjb=new pdi_tool.file(__dirname+'/nottestJob.kjb');
        }).should.throw(/no such file or directory/);
    });

});

describe('Trn file:', function () {

    it('get("info").name[0]', function () {
        myTrn.get('info').name[0].should.equal('exeTrn');
    });

    it('file not exists throw "no such file or directory"', function () {
        (function(){
            var myTrn=new pdi_tool.file(__dirname+'/nottestTrn.ktr');
        }).should.throw(/no such file or directory/);
    });

    it('file exists not.throw', function () {
        (function(){
            var myTrn=new pdi_tool.file(__dirname+'/testTrn.ktr');
        }).should.not.throw();
    });

});