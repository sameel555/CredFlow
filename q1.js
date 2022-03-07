function main() {
  var arrival = [2, 4, 3, 1] // arrival times of train
  var departure = [5, 5, 4, 8] // departure time of trains

  //first we sort arrival array according to it we will arrange departure array;
  console.log(platformCount(arrival, departure, arrival.length))
}

function platformCount(arr, dep, n) {
  bubbleSort(arr, dep, n)
  var count = 1 // to store platform count
  let result = 1
  let i = 1
  let j = 0
  while (i < n && j < n) {
    if (arr[i] <= dep[j]) {
      count++
      i++
    } else if (arr[i] > dep[j]) {
      count--
      j++
    }
    if (count > result) result = count
  }
  return result
}

function bubbleSort(arr, dep, n) {
  if (n == 0) return
  for (let i = 0; i < n; i++) {
    if (arr[i] > arr[i + 1]) swap(arr, i, i + 1, dep)
  }
  bubbleSort(arr, dep, n - 1)
}

// function helps to arrange arrival array and departure array according to increasing order od arrival time
function swap(arr, a, b, dep) {
  let temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
  temp = dep[a]
  dep[a] = dep[b]
  dep[b] = temp
  return arr, dep
}

main()
