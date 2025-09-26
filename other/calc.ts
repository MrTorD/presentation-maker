console.log("Exprected: 0, recieved:", calc("- -1 -1"));
console.log("Expected: 44780, recieved: ", calc("+ -5120 49900"));
console.log("Expected: -43, recieved:", calc("+ 5 (* -6 8)"));
console.log("Expected: 2, recieved: ", calc("/ 12 + 3 (- 9 6)"));
console.log("Expected: 4928, recieved:", calc("* (+ 425 23) - 14 * / 2 4 6"));
console.log("Expected: undefined, recieved:", calc("+ 5 5 5"));
console.log("Expected: undefined, recieved:", calc("2 / 4"));
console.log("Expected: undefined, recieved:", calc("/ 10 * 5 + 4"));

function readNum(str: string): number | undefined {
  const arr: number[] = [];
  let ch: string | undefined;
  let isNegative: boolean = false;

  for (let i = 0; i < str.length; i++) {
    ch = str[i];
    if (!Number.isNaN(parseInt(ch!))) {
      arr.push(+ch!);
      continue;
    }
    if (ch == "-") isNegative = true;
    break;
  }
  if (arr.length == 0) return undefined;

  let num: number = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    num = num * 10 + arr[i]!;
  }

  return isNegative ? -num : num;
}

function calc(expression: string | undefined): number | undefined {
  if (expression) expression = expression.split("").reverse().join("");
  const stack: number[] = [];
  let ch: string | undefined;
  let num: number | undefined;

  while (expression) {
    num = readNum(expression);
    if (!Number.isNaN(num) && num !== undefined) {
      expression = expression.slice(num.toString().length);
    } else {
      ch = expression[0]!;
      expression = expression.slice(1);
    }

    if (num) stack.push(num);
    if (ch!) handleChar(ch, stack);
  }

  const result: number | undefined = stack.pop();
  return !Number.isNaN(result) && stack.length == 0 ? result : undefined;
}

function handleChar(ch: string | undefined, stack: number[]): boolean {
  if (!ch) return false;

  let a: number | undefined;
  let b: number | undefined;

  switch (ch) {
    case "+":
      a = stack.pop();
      b = stack.pop();
      stack.push(a! + b!);
      break;
    case "-":
      a = stack.pop();
      b = stack.pop();
      stack.push(a! - b!);
      break;
    case "*":
      a = stack.pop();
      b = stack.pop();
      stack.push(a! * b!);
      break;
    case "/":
      a = stack.pop();
      b = stack.pop();
      stack.push(a! / b!);
      break;
    default:
      break;
  }
  return true;
}
