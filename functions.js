function getNumber(a, b = 0) {
  return Math.floor(Math.random() * (a-b) + b);
}

function getColor(a = 100) {
  return `rgba(${getNumber(256, 0)}, ${getNumber(256, 0)}, ${getNumber(256, 0)}, ${a/100})`;
}

function getFactorial(num) {
  if (num == 1) {
    return 1;
  }
  return getFactorial(num-1) * num;
}

function getCombination(m, n) {
  if (m <= n) {
    return getFactorial(n) / getFactorial(m) / getFactorial(n - m);
  }
}

// function setGradient(kind='linear', ...args) {
//   result = `${kind}-gradient(`
//   for (let arg of args) {
//     result += `${arg},`
//   }

// }

function setGradient(col, dir = '', type = 'linear') {
  const colors = typeof col === 'number' ? [] :
  [...col];
  if (!colors.length) {
    while(col--) {
      colors.push(getColor(getNumber(101, 10)));
    }
  }
  console.log(colors);
  let str = `${type}-gradient(`;
  colors.forEach((c, i) => {
    str += c;
    if (i === colors.length - 1) {
      str += ')'
    } else {
      str += ','
    }
  })
  return str
}