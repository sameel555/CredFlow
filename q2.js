function main() {
  var n = 3
  var m = 4
  var matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 12, 13, 14],
  ]
  console.log(spiral(matrix, n, m))
}

function spiral(matrix, n, m) {
  let result = []

  let startRow = 0
  let endRow = n - 1
  let startColumn = 0
  let endColumn = m - 1

  while (startRow <= endRow && startColumn <= endColumn) {
    for (let j = startColumn; j <= endColumn; j++) {
      result.push(matrix[startRow][j])
    }
    for (let i = startRow + 1; i <= endRow; i++) {
      result.push(matrix[i][endColumn])
    }

    for (let j = endColumn - 1; j >= startColumn; j--) {
      if (startRow == endRow) break
      result.push(matrix[endRow][j])
    }
    for (let i = endRow - 1; i > startRow; i--) {
      if (endColumn == startColumn) break
      result.push(matrix[i][startColumn])
    }

    startRow++
    startColumn++
    endColumn--
    endRow--
  }
  return result
}

main()
