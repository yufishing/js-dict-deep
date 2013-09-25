# deep-get-set

Set and get values on objects via dot-notation kind of strings.

[![testling badge](https://ci.testling.com/acstll/deep-get-set.png)](https://ci.testling.com/acstll/deep-get-set)

## Example

```js
var deep = require('deep-get-set');

var obj = {
  foo: {
    bar: 'baz'
  }
};

// Get
console.log(deep(obj, 'foo.bar'));
// => "baz"

// Set
console.log(deep(obj, 'foo.bar', 1));
// => 1
```

## API

### deep(object, path[, value])

Where `path` is a dot-notation kind of string `a.b.c`.

- If `value` is passed it will be set on the path.
- Set `deep.p = true` if you want non-existent paths to be initialized.
- If you want to unset (or delete), pass `undefined` as `value`.

## Installation

With [npm](https://npmjs.org) do:

```bash
npm install deep-get-set
```

## Note

There's a dozen modules like this on [npm](https://npmjs.org).
This is a fork from @juliangruber [deep-access](https://github.com/juliangruber/deep-access) module, with a big portion of code directly copied from here: https://github.com/substack/js-traverse/blob/master/index.js#L11-L18.

**Similar** modules:

- https://github.com/deoxxa/dotty (this one I like because it uses recursion)
- https://github.com/Ntran013/dot-access (pretty much the same as this)
- https://github.com/substack/js-traverse (much more complex and useful)

## License

(MIT)

Copyright (c) 2013 Julian Gruber &lt;julian@juliangruber.com&gt;
Copyright (c) 2013 Arturo Castillo Delgado &lt;19@8302.net&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.