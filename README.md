# co-mailparser

co-based mailparser

Example:

```js
var parse = require ('co-mailparser');

co(function * (){
  try {
    // email can be instance of `ReadableStream` or `string`
    var obj = yield parse (email, { /* mailparser options */});  
    console.log (obj);
  } catch (err) {
    console.log(err)
  }
})();
```

Based on [mailparser](https://www.npmjs.org/package/mailparser)

# license
MIT