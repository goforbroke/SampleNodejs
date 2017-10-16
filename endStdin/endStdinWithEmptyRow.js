// Node.js 8.6.0
// Mac OS x Sierra
// Node.jsはイベントループで駆動するため，標準入力はEOFが来るまで待機し続ける．
// EOFの入力は分かり辛いため，空白行を入力の終端とみなす実装とした．1
const lineReader = require('readline').createInterface({
  input: process.stdin,
  output: () => {}
});

// 1. 空白行("")が来るまで標準入力を受け付ける
let lines = [];
lineReader.on('line', (line) => {
  // WORKAROUND:空白行で標準入力の終わりを検出する
  if(line === '') {
    lineReader.close();
  }
  lines.push(line);
});

// 2. バッファに溜めた入力データの処理を行う
lineReader.on('close', () => {
  const sets = Number(lines.shift());
  for(let i = 0; i < sets; i++) {
    console.log('Hello!, ', lines[i]);
  }
});
