const obj = {
    foo: {
        bar: {
            key: 'value'
        }
    }
};
const ObjectAccessor = require('../index');
const oa = ObjectAccessor(obj);

const barValue = oa.get('foo.bar.key');
console.log(barValue); // => "value"

const bar1Value = oa.get('foo.bar1.key');
console.log(bar1Value); // => undefined;

oa.set('foo1.bar.key', 'value1');
const foo1Value = oa.get('foo1.bar.key');
console.log(foo1Value); // => "value1"

console.log('origin obj: ', JSON.stringify(obj));