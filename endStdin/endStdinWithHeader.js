// Node.js 8.6.0
// Mac OS x Sierra
// Node.jsはイベントループで待ち続けるため，標準入力はEOFが来るまで待機し続ける．
// EOFを待たずに処理を実行するため、先頭行の情報から入力待ち受けの行数を算出して打ち切る。
//  Pros:状態をグローバル変数で管理することで多言語と同様に現在位置を把握できる．
//  Cons:可読性が低い，1セット当たりのデータ入力行数などの変更に弱い．

// 1セットあたりの入力データ行数
const READLINES_PER_SET = 1;

const lineReader = require('readline').createInterface({
  input: process.stdin,
  output: () => {}
});

// 1. 指定の行数に到達するまでバッファに溜める
let lines = [];
let lineNumber = 0;
let sets = 0;
let totalLines = 0;
lineReader.on('line', (line) => {
  switch(lineNumber) {
    case 0:
      // 先頭行に読み込む行数が記述してある
      sets = Number(line);
      // 先頭行は除いて残り行数をカウントする
      totalLines = sets * READLINES_PER_SET - 1;
      break;
    default:
      // 2行目以降が処理対象のデータ
      lines.push(line);
      if(lineNumber > totalLines) {
        lineReader.close();
      }
      break;
  }
  lineNumber++;
});

// 2. バッファに溜めた入力データの処理を行う
lineReader.on('close', () => {
  for(let i = 0; i <= totalLines; i++) {
    console.log('Hello!, ', lines[i]);
  }
});
