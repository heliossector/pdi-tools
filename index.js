var _=require('underscore'),
    fs=require('fs');


var files=fs.readdirSync('./lib');


_.each(files,function(value, key, list){
    var name=value.replace('.js','');
    //console.log('module.exports['+name+']='+name+';');
    module.exports[name]=require('./lib/'+value);
});