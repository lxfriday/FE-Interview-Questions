document.onreadystatechange = function (e) {
  console.log('readystatechange', e);
  console.log(arguments);
};

var count = 100000000;
var i = 1;
while (i < count) {
  i ++;
}
