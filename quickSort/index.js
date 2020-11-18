function quickSort(arr, start, end) {
  if(start > end) {
    return
  }
  let prev = arr[start];
  let left = start;
  let right = end;
  while (left !== right) {
    while (left < right && arr[right] > prev) {
      right--;
    }
    while (left < right && arr[left] <= prev) {
      left++;
    }
    if (left < right) {
      const a = arr[left];
      arr[left] = arr[right];
      arr[right] = a;
    }
  }
  const a = arr[left];
  arr[left] = prev;
  arr[start]  =  a;
  quickSort(arr, start, left - 1);
  quickSort(arr, left + 1, end);
}
