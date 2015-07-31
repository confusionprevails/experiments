var required = function(moduleName){
    console.log('Require invoked for:'+moduleName);

    var id = required.resolve(moduleName);

    if(required.cache[id]){
        return required.cache[id].exports;
    }

    var module = {
        exports:{},
        id:id
    }

    required.cache[id]=module;

    loadModule(id,module,required);

    return module.exports;

};

required.cache={};
required.resolve = function(moduleName){
    // TODO
}

function loadModule(filename,module,require){
    var wrappedSrc = '' +
        '(function(module, exports, require){'+
        fs.readFileSync(filename,"utf8") +
        '}(module, module.exports, require);';

    eval(wrappedSrc);
}