const output = document.getElementById('output')
const tds = document.querySelectorAll('td:not(#input)')
const decimal = document.getElementById('decimal')

for (const td of tds) {
  td.onclick = () => {
    const text = td.innerText
    if (text === '=') {
      // 執行算式
      output.innerText = eval(output.innerText)
    } else if (text === 'c') {
      // 重設
      output.innerText = '0'
    } else {
      // 一般按鍵
      if (output.innerText === '0') {  //一開始0
        output.innerText = text
      } else {
        output.innerText += text
      }
    }
  }
}


// 小數點
decimal.onclick = () => {
  const deciBtn = decimal.innerText
  if (output.innerText.slice(-1) === '.') {
    output.innerText = output.innerText
  } else {
    output.innerText += deciBtn
  }
}

// 清除
// clearBtn.onclick = () => {
//   output.innerText = '0'
// }

// document.onkeydown = event => {
//   if (event.key === 'Enter') {
//     output.innerText = eval(output.innerText)
//   } else if (
//     !isNaN(parseInt(event.key)) ||
//     event.key === '+' ||
//     event.key === '-' ||
//     event.key === '*' ||
//     event.key === '/' ||
//     event.key === '.' ||
//     event.key === 'x' ||
//     event.key === 'Backspace'
//   ) {
//     if (output.innerText === '0') {
//       output.innerText = event.key
//     } else {
//       output.innerText += event.key
//     }
//   }
// }