var os=require('os'),
    fs=require('fs'),
    _=require('underscore'),
    exec = require('child_process').exec;


var ktch={};

ktch.existsFile=function (path) {
    return fs.statSync(path);
};

ktch.getCmd=function(options) {
    var _pr=os.platform()=='Windows_NT'? '/':'-';
    var _eq=os.platform()=='Windows_NT'? ':':'=';
    var cmdParams='';
    _.each(options, function(value, key,list) {
        if (key!='params') {
            cmdParams+=' '+_pr+key+_eq+'"'+value+'"';
        }
    });
    _.each(options.params, function(value, key,list) {
        cmdParams+=' "-param:'+key+'='+value+'"';
    });
    return cmdParams;
};

ktch.exec = function (options, callback) {
    ktch.existsFile(options.pathKitchen);
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

    var chP = exec(options.pathKitchen + ' ' + ktch.getCmd(options), function (error, stdout, stderr) {
        var _execCallback;
        if (options.callback && callback) {
            _execCallback = function (err, data) {
                callback(err, data);
                options.callback(err, data);
            };
        } else if (options.callback) {
            _execCallback = options.callback;
        } else if (callback) {
            _execCallback = callback;
        }

        if (error) {
            _errorResp(_execCallback, 'Exec error: ' + error);
        } else if (stderr)  {
            _errorResp(_execCallback, stderr);
        } else {
            if (typeof (_execCallback) == 'function') {
                if (options.logfile) {
                    _execCallback(null, options.logfile);
                } else {
                    _execCallback(null, stdout);
                }
            }
        }
    });

    return chP;
};

module.exports=ktch;