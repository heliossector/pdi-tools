var os=require('os'),
    fs=require('fs'),
    _=require('underscore'),
    exec = require('child_process').exec,
    pdiFiles=require('./file');

var kitchen=function(pathKitchen, options) {

    this.options={};
    _.extend(this.options,options);
    if (pathKitchen) {
        this.path=pathKitchen;
        this._existsFile(this.path);
    }

    if (this.options.file) {
        this.jobFile= new pdiFiles(this.options.file);
    }

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

kitchen.prototype.run = function (options, callback) {
    var _this = this;

    if (options) {
        _.extend(this.options, options);

        if (options.pathKitchen) {
            this.path=options.pathKitchen;
            this._existsFile(this.path);
        }
    }

    var _errorResp = function (callback, msg) {
        if (callback) {
            if (typeof (callback) == 'function') {
                callback(msg)
            } else {
                throw new Error(msg);
            }
        } else {
            throw new Error(msg);
        }
    };

    if (this.options.file) {
        this.jobFile= new pdiFiles(this.options.file);
    }

    this._chP = exec(this.path + ' ' + this._getCmd(), function (error, stdout, stderr) {
        var _execCallback;
        if (_this.options.callback && callback) {
            _execCallback = function (err, data) {
                callback(err, data);
                _this.options.callback(err, data);
            };
        } else if (_this.options.callback) {
            _execCallback = _this.options.callback;
        } else if (callback) {
            _execCallback = callback;
        }

        if (error) {
            _errorResp(_execCallback, 'Exec error: ' + error);
        } else if (stderr)  {
            _errorResp(_execCallback, stderr);
        } else {
            if (typeof (_execCallback) == 'function') {
                if (_this.options.logfile) {
                    _execCallback(null, _this.options.logfile);
                } else {
                    _execCallback(null, stdout);
                }
            }
        }
    });

    return this._chP;
};

kitchen.prototype.toString=function() {
    return JSON.stringify(this);
};

module.exports=kitchen;
