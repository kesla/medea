var Medea = require('./medea');

var options = {
  //maxFileSize: 1024
};

var medea = new Medea(options);
var start;
medea.open(function() {
  start = Date.now();
  put(0, 1980);
});

var put = function(i, max) {
  if (i === max) {
    console.log('time:', (Date.now() - start) / 1000, 's');
    medea.close(function() { console.log('closed!'); });
    return;
  }

  medea.put('hello' + i, 'valz' + i, function() {
    put(i+1, max);
  });
}