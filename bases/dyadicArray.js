// js创建二维数组的方式,先创建一维数组,然后每个一维数组中的元素都保存数组
Array.matrix = function(numrows, numcols, initValue) {
  // 定义返回时的数组
  let arr = [];
  // 先行再列,定义出每一行之后,再为每一列进行赋值
  for(let i = 0; i < numrows; i++) {
    let arrClos = [];
    for(let j = 0; j < numcols; j++) {
      arrClos[j] = initValue;
    }
    arr[i] = arrClos;
  }
  return arr;
}