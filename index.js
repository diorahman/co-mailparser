var MailParser = require ('mailparser').MailParser;
var Stream = require ('stream');
var thunkify = require ('thunkify');

function parse (email, options, cb) {

  if ( !email ) return cb(new Error('empty'));
  if ('function' == typeof options) cb = options;

  var parser = new MailParser(options);

  parser.on("end", function(obj){
    return cb(null, obj);
  });

  parser.on("error", function(err){
    return cb(err);
  });

  if ('string' == typeof email) { parser.write(email); return parser.end(); }
  if (email instanceof Stream) { return email.pipe(parser); }

  return cb (new Error('unsupported'));
}

module.exports = thunkify(parse);