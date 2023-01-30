# js-dict-deep

Set and get values on objects via dot-notation strings with filter.


## Example

```js
var deep = require('js-dict-deep');

var obj = {
  foo: {
    bar: 'baz',
    'bar.baz': 'qux',
    car: ['audi', 'benz', 'bmw']
  }
};

// Get
console.log(deep(obj, 'foo.bar'));
  // => "baz"

// Get with array
console.log(deep(obj, ['foo', 'bar.baz']));
  // => "qux"

// Set
deep(obj, 'foo.bar', 'hello');
console.log(obj.foo.bar);
  // => "hello"

// Set with array
deep(obj, ['foo', 'bar.baz'], 'goodbye');
console.log(obj.foo['bar.baz']);
  // => "goodbye"
```

## API

### deep(object, path[, value])

Where `path` is a dot-notation string `foo.bar`, `for.car[0]` or an array of strings.

- If `path` step with qualificaiton [filter] and the value is array type, will search the specific item from the array. `filter` can be key=value or index.  
- If `value` is passed it will be set on the path.
- Set `deep.p = true` if you want non-existent paths to be initialized.
- If you want to unset (or delete), pass `undefined` as the `value`.

## Installation

With [npm](https://npmjs.org) do:

```bash
npm install js-dict-deep
```

## Note

There's a dozen modules like this on [npm](https://npmjs.org). 
This is a update from [@acstll's](https://github.com/acstll) [deep-get-set](https://github.com/acstll/deep-get-set) module.

Similar modules:

- https://github.com/deoxxa/dotty (this one I like because it uses recursion)
- https://github.com/Ntran013/dot-access (pretty much the same as this)
- https://github.com/substack/js-traverse (much more complex and useful)

## License

MIT
