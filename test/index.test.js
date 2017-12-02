/**
 * Author RuiZhang @zhrln
 */

const assert = require('assert');

const obj = {
    foo: {
        bar: {
            key: "value"
        },
        barArr: [
            "arrayValue"
        ]
    }
};
const originObj = JSON.stringify(obj);

const ObjectAccessor = require('../index');
const oa = ObjectAccessor(obj);

it('foo.bar.key === "value"', () => {
    const barValue = oa.get('foo.bar.key');
    assert(barValue === "value", `barValue: ${barValue}`);
});

it('foo.bar.key.childKey === undefined', () => {
    const value = oa.get('foo.bar.key.childKey');
    assert(value === undefined, `value: ${value}`);
});

it('foo.bar.key.childKey.childKey === undefined', () => {
    const value = oa.get('foo.bar.key.childKey.childKey');
    assert(value === undefined, `value: ${value}`);
});

it('foo.bar1.key === undefined', () => {
    const bar1Value = oa.get('foo.bar1.key');
    assert(bar1Value === undefined, `bar1Value: ${bar1Value}`);
});

it('foo.barArr.0 === "arrayValue"', () => {
    const barArr = oa.get('foo.barArr.0');
    assert(barArr === 'arrayValue', `barArr: ${barArr}`);
});

it('set foo.bar.key = value1', () => {
    oa.set('foo.bar.key', 'value1');
    const fooValue = oa.get('foo.bar.key');
    assert(fooValue === 'value1', `foo1Value: ${fooValue}`);
});

it('set foo1.bar.key = value1', () => {
    oa.set('foo1.bar.key', 'value1');
    const foo1Value = oa.get('foo1.bar.key');
    assert(foo1Value === 'value1', `foo1Value: ${foo1Value}`);
});

it('newObj !== originObj', () => {
    const newObj = JSON.stringify(obj);
    assert(newObj !== originObj, `newObj: ${newObj}`);
});