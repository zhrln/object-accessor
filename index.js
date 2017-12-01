/**
 * Author RuiZhang @zhrln
 */

function pathToArray(path = ''){

    if(typeof path !== 'string'){
        if(!isNaN(path)){
            path = path.toString();
        }else if(Array.isArray(path)){
            return path;
        }else{
            throw new Error('path must be a string.');
        }
    }else{
        path = path.trim();
    }

    if(path === ''){ return [] }

    // todo 增加数组解析逻辑, xxx[0].xxx => xxx.0.xxx

    return path.indexOf('.') === -1 ? [path] : path.split('.');
}

function parseObj(obj, path){

    if(typeof obj === 'undefined' || typeof obj !== 'object' || path.length === 0){
        return obj;
    }

    return parseObj(obj[path.shift()], path);

}

function updateObject(obj, path, value){
    // todo 待完成
}

const ObjectAccessor = obj => ({
    get(path){
        // todo try 直接获取
        return parseObj(obj, pathToArray(path));
    },
    set(path, value){
        // todo try 直接存储
        return updateObject(obj, pathToArray(path), value);
    }
});

module.exports = ObjectAccessor;

