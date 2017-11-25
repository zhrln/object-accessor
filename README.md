# object-accessor
object-accessor


## 用法

```javascript
const OA = require('object-accessor');
const obj = {
    foo: {
        bar: {
            key: 'value'
        }
    }
};

const barValue = OA(obj).get('foo.bar.key');
console.log(barValue); // => "value"

const bar1Value = OA(obj).get('foo.bar1.key');
console.log(bar1Value); // => undefined;

OA(obj).set('foo1.bar.key', 'value1');
const foo1Value = OA(obj).get('foo1.bar.key');
console.log(foo1Value); // => "value1"

```

obj:

```js
{
    foo: {
        bar: {
            key: 'value'
        }
    },
    foo1: {
        bar: {
            key: 'value1'
        }
    }
}
```