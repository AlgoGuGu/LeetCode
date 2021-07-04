function maximum69Number (num: number): number {
  let strNum = '' + num
  strNum = strNum.replace(/6/, '9')
  return parseInt(strNum)
};
