// 堆排序
function heapSort(array) {
　　console.time('堆排序耗时');
　　//建堆
　　var heapSize = array.length, temp;
　　for (var i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {　　
　　　　heapify(array, i, heapSize);
　　}
　　//堆排序
　　for (var j = heapSize - 1; j >= 1; j--) {
　　　　temp = array[0];
　　　　array[0] = array[j];
　　　　array[j] = temp;
　　　　console.log(array)
　　　　heapify(array, 0, --heapSize);
　　}
　　console.timeEnd('堆排序耗时');
　　return array;
}
function heapify(arr, x, len) {
　　var l = 2 * x + 1, r = 2 * x + 2, largest = x, temp;
　　if (l < len && arr[l] > arr[largest]) {
　　　　largest = l;
　　}
　　if (r < len && arr[r] > arr[largest]) {
　　　　largest = r;
　　}
　　if (largest != x) {
　　　　temp = arr[x];
　　　　arr[x] = arr[largest];
　　　　arr[largest] = temp;
　　　　console.log(arr)
　　　　heapify(arr, largest, len);
　　}
}
var arr=[91,60,96,13,35,65,46,65,10,30,20,31,77,81,22];
console.log(heapSort(arr));