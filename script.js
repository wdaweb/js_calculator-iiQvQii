const output = document.getElementById('output')
const tds = document.querySelectorAll('td:not(#input)')
const decimal = document.getElementById('decimal')

for (const td of tds) {
  td.onclick = () => {
    const text = td.innerText
    // 按鍵功能判斷
    if (text === '=') {
      // 執行算式
      if (output.innerText.includes('x')) {
        output.innerText = output.innerText.replace(/x/g, '*')
      }
      if (output.innerText.includes('÷')) {
        output.innerText = output.innerText.replace(/÷/g, '/')
      }
      output.innerText = eval(output.innerText)
    } else if (text === 'c') {    // c 重設
      output.innerText = '0'
    } else if (text === '⇤') {    // backspace
      if (output.innerText !== '0') {
        output.innerText = output.innerText.slice(0, -1)
      }
      // 0 之後就不可以再刪
      if (output.innerText.length === 0) {
        output.innerText = '0'
      }
    } else {  // 加減乘除 或 數字鍵
      // 加減乘除按鍵
      const last = output.innerText.slice(-1)
      if (output.innerText === '0' && ((text === '+') || (text === 'x') || (text === '-') || (text === '÷'))) {  // 一開始 0 時不能按加減乘除
        output.innerText = '0'
      } else if (output.innerText === '0') {
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
  // 如果字串最後一個字.就不變
  if (output.innerText.slice(-1) === '.') {
    output.innerText = output.innerText
  } else {
    output.innerText += deciBtn
  }
}


// backspace
document.onkeydown = event => {
  if (event.key === 'Enter') {
    output.innerText = eval(output.innerText)
    // 如果是數字或加減乘除的話
  } else if (!isNaN(parseInt(event.key)) ||
    event.key === '+' ||
    event.key === '-' ||
    event.key === '*' ||
    event.key === '/' ||
    event.key === '.') {
    if (output.innerText === '0') {
      output.innerText = event.key
    } else {
      output.innerText += event.key
    }
  } else if (event.key === 'Backspace') {
    output.innerText = output.innerText.slice(0, -1)
  }
}