// Node.js 8.6.0
// Mac OS x Sierra
// Node.jsはイベントループで待ち続けるため，標準入力はEOFが来るまで待機し続ける．
// 状態をグローバル変数で管理することで行数の位置を把握できるが，可読性が低い．
const lineReader = require('readline').createInterface({
  input: process.stdin,
  output: () => {}
});

// 1. 指定の行数に到達するまでバッファに溜める
let lines = [];
let lineNumber = 0;
let sets = 0;
lineReader.on('line', (line) => {
  switch(lineNumber) {
    case 0:
      // 先頭行に読み込む行数が記述してある
      lineNumber++;
      sets = Number(line);
      break;
    default:
      lineNumber++;
      lines.push(line);
      if(lineNumber > sets ) {
        lineReader.close();
      }
      break;
  }
});

// // 2. バッファに溜めた入力データの処理を行う
lineReader.on('close', () => {
  for(let i = 0; i < sets; i++) {
    console.log('Hello!, ', lines[i]);
  }
});
