var os=require('os'),
    fs=require('fs'),
    _=require('underscore'),
    sys = require('sys'),
    exec = require('child_process').exec,
    xml2js=require('xml2js');

var kjb=function(path) {
    if(path){
        this.path=path;
        this._existsFile(path);
        this._read();
    }
};
//
////kitchen.bat /file:C:\PRD\runAll.kjb /level:Basic > C:\LOG\trans.log
////kitchen.sh -file="/PRD/updateWarehouse.kjb" --level=Minimal >> /LOG/trans.log
//kjb.prototype._getCmd=function() {
//    if (this.options) {
//        var cmd;
//        var cmd=os.platform()=='Windows_NT'? '/file:':'-file=';
//        cmd+='"'+ this.options.path+'"';
//
//        //params
//        if (this.options.params) {
//            var cmdParams='';
//            _.each(this.options.params, function (value, key,list) {
//                cmdParams+=' "-param:'+key+'='+value+'"';
//            })
//            if (cmdParams.length>0) {
//                cmd+=cmdParams;
//            }
//        }
//
//        // log
//        if (this.options.log) {
//            var opLog=this.options.log;
//            if (opLog.level) {
//                var cmdLog=os.platform()=='Windows_NT'? ' /level:':' -level=';
//                cmdLog+=opLog.level;
//                if (opLog.fileName) {
//                    var cmdLogOut=os.platform()=='Windows_NT'? '>':'>>';
//                    cmdLog+=' '+cmdLogOut+' '+opLog.fileName;
//                }
//                cmd+=cmdLog;
//            }
//        }
//    }
//
//    return cmd;
//};

kjb.prototype._read=function() {

    var self=this;
    var parser = new xml2js.Parser();
    var data=fs.readFileSync(this.path, 'utf8');

    parser.parseString(data, function (err, result) {
        self._file=result.job;
    });

};

kjb.prototype._existsFile=function (path) {
   return fs.statSync(path);
};

//
//kjb.prototype.run=function(kitchen,callback) {
//    var _this=this;
//    var _errorResp=function(callback, msg){
//        if (callback) {
//            if (typeof (callback)=='function') {
//                callback(msg)
//            } else {
//                throw new Error(msg);
//            }
//        } else {
//            throw new Error(msg);
//        }
//    };
//
//    if (typeof(kitchen) == 'string') {
//        try {
//         this._kitchenStat=this._existsFile(kitchen);
//        }
//        catch (err) {
//            _errorResp(callback,'Error ' + err.name + ":" + err.message+' '+ 'Invalid kitchen. The executable file must be specified. kitchen.sh or kitchen.bat');
//        }
//        console.log(kitchen+' '+this._getCmd());
//        var child;
//        child = exec(kitchen+' '+this._getCmd(), function (error, stdout, stderr) {
//            if (error !== null) {
//                _errorResp(callback,'Exec error: ' + error);
//            } else {
//                if (typeof (callback)=='function') {
//                    if (_this.options.log.fileName) {
//                        callback(null,_this.options.log.fileName);
//                    } else {
//                        callback(null,stdout);
//                    }
//                }
//            }
//        });
//
//
//    } else if (typeof(kitchen) == 'function') {
//
//    } else {
//        _errorResp(callback,'Invalid kitchen. The executable file must be specified. kitchen.sh or kitchen.bat');
//    }
//};

kjb.prototype.get=function(param) {
    if (this._file[param]) {
        if (this._file[param].length==1) {
            return this._file[param][0]
        } else {
            return this._file[param][0]
        }
    }
};

kjb.prototype.getAllProperty=function(param) {
    if (this._file) {
        return this._file;
    }
};

kjb.prototype.toString=function() {
return JSON.stringify(this);
};

module.exports=kjb;