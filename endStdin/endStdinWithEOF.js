// Node.js 8.6.0
// Mac OS x Sierra
// Node.jsはイベントループで駆動するため，標準入力はEOFが来るまで待機し続ける．
// そこで，EOFまで入力をバッファに溜めて，まとめて処理を行う

const lineReader = require('readline').createInterface({
  input: process.stdin
});

// 1. 標準入力をEOF(mac:Ctrl+D, win:Ctrl+Z)が来るまで受け付ける
let lines = [];
lineReader.on('line', (line) => {
  lines.push(line);
});

// 2. EOFをトリガに入力データの処理を行う
lineReader.on('close', () => {
  const sets = Number(lines.shift());
  for(let i = 0; i < sets; i++) {
    console.log('Hello!, ', lines[i]);
  }
});
