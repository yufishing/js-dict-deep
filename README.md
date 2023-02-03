# js-dict-deep

Set and get values on objects via dot-notation strings with filter.


## Example

```js
var deep = require('js-dict-deep');

var obj = {
    foo: {
      'bar.baz': 'qux',
      foo: [
        "foo1", "foo2"
      ],
      bar: [
        {id:1, name:"bar1"},
        {id:2, name: "bar2"},
      ]
    }
  };


console.log(deep(obj, "foo.bar[1]"))
//Get -> {id: 2, name: 'bar2'}
console.log(deep(obj, "foo.bar[id=3]"))
//Get -> undefined  # object not exist
console.log(deep(obj, "foo.sir.bar"))
//Get -> undefined # path not exist

deep(obj, "foo.sir.name", "bar22")
console.log(JSON.stringify(obj))
//Set -> {"foo":{"bar.baz":"qux","foo":["foo1","foo2"],"bar":[{"id":1,"name":"bar1"},{"id":2,"name":"bar2"}]}}
# path not exist
deep(obj, "foo.bar[id=3].name", "bar22")
console.log(JSON.stringify(obj))
//Set -> {"foo":{"bar.baz":"qux","foo":["foo1","foo2"],"bar":[{"id":1,"name":"bar1"},{"id":2,"name":"bar2"}]}}
# object not exist
deep(obj, "foo.bar[3].name", "ba2r22")
console.log(JSON.stringify(obj))  
//Set -> {"foo":{"bar.baz":"qux","foo":["foo1","foo2"],"bar":[{"id":1,"name":"bar1"},{"id":2,"name":"bar2"}]}}
# index object not exist
deep(obj, "foo.bar[0].name", "bar--00")
console.log(JSON.stringify(obj))  
//Set -> {"foo":{"bar.baz":"qux","foo":["foo1","foo2","ba2r22"],"bar":[{"id":1,"name":"bar--00"},{"id":2,"name":"bar2"}]}}
# Set success for existing object
deep(obj, "foo.foo[4]", "ba2r22")
console.log(JSON.stringify(obj))
//Set -> {"foo":{"bar.baz":"qux","foo":["foo1","foo2","ba2r22"],"bar":[{"id":1,"name":"bar--00"},{"id":2,"name":"bar2"}]}}
# Add item to list object
deep(obj, "foo.bar[name=ba2r22]", {id: 3})
console.log(JSON.stringify(obj))
//Set -> {"foo":{"bar.baz":"qux","foo":["foo1","foo2","ba2r22"],"bar":[{"id":1,"name":"bar--00"},{"id":2,"name":"bar2"},{"id":3,"name":"ba2r22"}]}}
# Add item to list object
deep(obj, "foo.foo[2]", "ba2r22.....")
console.log(JSON.stringify(obj))
//Set -> {"foo":{"bar.baz":"qux","foo":["foo1","foo2","ba2r22....."],"bar":[{"id":1,"name":"bar--00"},{"id":2,"name":"bar2"},{"id":3,"name":"ba2r22"}]}} 
# Update item of a list object
deep(obj, "foo.sir.name", "bar22", true)
console.log(JSON.stringify(obj))
//Set -> {"foo":{"bar.baz":"qux","foo":["foo1","foo2","ba2r22....."],"bar":[{"id":1,"name":"bar--00"},{"id":2,"name":"bar2"},{"id":3,"name":"ba2r22"}],"sir":{"name":"bar22"}}}
# Append if the path not exist
```

## API

### deep(object, path[, value[, append]])

Where `path` is a dot-notation string `foo.bar`, `for.car[0]` or an array of strings.

- If `path` step with qualificaiton [filter] and the value is array type, will search the specific item from the array. `filter` can be key=value or index.  
- If `value` is passed it will be set on the path.
- Assign append true if you want non-existent paths to be initialized.
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
