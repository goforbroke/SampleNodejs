// Node.js 8.6.0
// Mac OS x Sierra
// Node.jsはI/Oがノンブロッキングなため，Pythonのようにreadの読み出し完了を待ち受ける事ができない
// そこで，標準入力の待ち受けが終わるまで入力をバッファに溜めて，まとめて処理を行う

const lineReader = require('readline').createInterface({
  input: process.stdin
});

// 1. 標準入力をEOF(Ctrl+D)が来るまで受け付ける
let lines = [];
lineReader.on('line', (line) => {
  lines.push(line);
});

// 2. EOFをトリガに入力データの処理を行う
// WORKAROUND: readline.on('end', )はEOFを検知しない
lineReader.on('close', () => {
  const sets = Number(lines.shift());
  for(let i = 0; i < sets; i++) {
    console.log('Hello!, ', lines[i]);
  }
});
