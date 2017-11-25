/**
 * Author RuiZhang @zhrln
 */

function parseObj(obj, path = ''){

    if(typeof path !== 'string'){
        throw new Error('path must be a string.');
    }

    if(typeof obj === 'undefined' || typeof obj !== 'object'){
        return obj;
    }

    const pathArr = path.split('.');

    return parseObj(obj[pathArr.shift()], pathArr.join('.'));

}

function updateObject(obj, path, value){

}

module.exports = obj => ({
    get: path => parseObj(obj, path),
    set: (path, value) => updateObject(obj, path, value)
});
