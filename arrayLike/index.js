var obj = {};
Array.prototype.push.call(obj, {foo:'foofoo'});
Array.prototype.push.call(obj, {hoge:'hogehoge'});

console.log(obj); //{ '0': { foo: 'foofoo' }, '1': { hoge: 'hogehoge' }, length: 2 }
