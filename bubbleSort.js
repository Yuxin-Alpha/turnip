// 冒泡排序
function bubbleSort(arr) {
　　var len = arr.length;
　　for (var i = 0; i < len; i++) {
　　　　for (var j = 0; j < len - 1 - i; j++) {
　　　　　　if (arr[j] > arr[j+1]) { //相邻元素两两对比
　　　　　　　　var temp = arr[j+1]; //元素交换
　　　　　　　　arr[j+1] = arr[j];
　　　　　　　　arr[j] = temp;
　　　　　　}
　　　　}
　　}
　　return arr;
}
var newArr = [15,98,6,54,7,48,65,44,1,84,8];
console.log(bubbleSort(newArr));