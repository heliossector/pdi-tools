var os=require('os'),
    fs=require('fs'),
    _=require('underscore'),
    exec = require('child_process').exec;

var kitchen=function(pathKitchen, options) {

    this.options=options;
    this.path=pathKitchen;

    if (!this.path) {
        throw new Error('pathKitchen must be specified!');
    }

    if(!options){
        throw new Error('Options must be specified');
    }
    if (!this.options.file) {
        throw new Error('Options.file must be specified!');
    }


    this._existsFile(this.path);

};

kitchen.prototype._getCmd=function() {

    var _pr=os.platform()=='Windows_NT'? '/':'-';
    var _eq=os.platform()=='Windows_NT'? ':':'=';

    var cmdParams='';

    _.each(this.options, function(value, key,list) {
        if (key!='params') {
            cmdParams+=' '+_pr+key+_eq+'"'+value+'"';
        }
    });

    _.each(this.options.params, function(value, key,list) {
            cmdParams+=' "-param:'+key+'='+value+'"';
    });

    return cmdParams;
};

kitchen.prototype._existsFile=function (path) {
    return fs.statSync(path);
};

kitchen.prototype.run=function(callback) {
    var _this=this;
    var _errorResp=function(callback, msg){
        if (callback) {
            if (typeof (callback)=='function') {
                callback(msg)
            } else {
                throw new Error(msg);
            }
        } else {
            throw new Error(msg);
        }
    };
        exec(this.path+' '+this._getCmd(), function (error, stdout, stderr) {
            if (error !== null) {
                _errorResp(callback,'Exec error: ' + error);
            } else {
                if (typeof (callback)=='function') {
                    if (_this.options.logfile) {
                        callback(null,_this.options.logfile);
                    } else {
                        callback(null,stdout);
                    }
                }
            }
        });
};

kitchen.prototype.toString=function() {
    return JSON.stringify(this);
};

module.exports=kitchen;
