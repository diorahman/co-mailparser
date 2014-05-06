var co = require ('co');
var fs = require ('fs');
var parse = require ('./');

var email = "From: 'Sender Name' <sender@example.com>\r\n"+
            "To: 'Receiver Name' <receiver@example.com>\r\n"+
            "Subject: Hello world!\r\n"+
            "\r\n"+
            "How are you today?";

describe('parse', function(){

  it ('should parse an email from string', function(done){

    co(function * (){
      try {
        var obj = yield parse (email, {});  
        obj.headers.subject.should.equal('Hello world!');
        done();
      } catch (err) {
        done(err)
      }
    })();

  });

  it ('should parse an email from string but get header only', function(done){

    co(function * (){
      try {
        var header = yield parse (email, { headersOnly : true });
        header.subject.should.equal('Hello world!');
        done();
      } catch (err) {
        done(err)
      }
    })();

  });

  it ('should parse a file stream from string', function(done){

    co(function * (){
      try {
        var obj = yield parse (fs.createReadStream('./test.eml'));  
        obj.headers.subject.should.equal('Hello world!');
        done();
      } catch (err) {
        done(err)
      }
    })();

  });

});

