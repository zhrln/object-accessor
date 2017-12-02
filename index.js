/**
 * Author RuiZhang @zhrln
 */

/**
 * 字符串路径转为数组
 * @param path
 * @returns {Array}
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

/**
 * 获取对象对应路径的值
 * @param obj
 * @param path
 * @returns {*}
 */
function parseObj(obj, path){

    if(typeof obj === 'undefined' || typeof obj !== 'object' || path.length === 0){
        return obj;
    }

    return parseObj(obj[path.shift()], path);

}

/**
 * 更新对象对应路径的值
 * @param obj
 * @param path
 * @param value
 * @returns {*}
 */
function updateObject(obj, path, value){

    const typeofObj = typeof obj;

    if(typeofObj === 'undefined' || typeofObj !== 'object'){
        return obj;
    }

    const subPath = path.shift();

    if(path.length === 0){
        return obj[subPath] = value;
    }

    if(typeof obj[subPath] === 'undefined'){
        obj[subPath] = {};
    }

    return updateObject(obj[subPath], path, value);
}

/**
 * 直接读取对象对应路径的值
 * @param obj
 * @param path
 */
function readValue(obj, path){
    return new Function("obj", "return obj." + path)(obj);
}

/**
 * 直接更新对象对应路径的值
 * @param obj
 * @param path
 * @param value
 */
function writeValue(obj, path, value){
    return new Function("obj", "value", `return obj.${path} = value;`)(obj, value);
}

function ObjectAccessor(obj){
    return {
        get(path){
            let ret;
            try{
                ret = readValue(obj, path);
            }catch(e){
                ret = parseObj(obj, pathToArray(path));
            }
            return ret;
        },
        set(path, value){
            let ret;
            try{
                ret = writeValue(obj, path, value);
            }catch(e){
                ret = updateObject(obj, pathToArray(path), value);
            }
            return ret;
        }
    }
}

module.exports = ObjectAccessor;

