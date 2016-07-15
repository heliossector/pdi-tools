var fs=require('fs'),
    _=require('underscore'),
    xml2js=require('xml2js');

var file=function(path) {
    if(path){
        this.path=path;
        this._existsFile(path);
        this._read();
    }
};

file.prototype._read=function() {
    var self=this;
    var parser = new xml2js.Parser();
    var data=fs.readFileSync(this.path, 'utf8');
    parser.parseString(data, function (err, result) {
        if (result.job) {self._file=result.job;}
        if (result.transformation) {self._file=result.transformation;}
    });
};

file.prototype._existsFile=function (path) {
    return fs.statSync(path);
};


file.prototype.get=function(param) {
    //if (param=='parameters') {
    //    this._file[param][0]
    //} else {
        if (this._file[param]) {
            if (this._file[param].length == 1) {
                return this._file[param][0]
            } else {
                return this._file[param][0]
            }
        }
        //}
};

file.prototype.toString=function() {
    return JSON.stringify(this);
};

module.exports=file;