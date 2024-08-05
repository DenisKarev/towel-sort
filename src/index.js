// You should implement your task here.

module.exports = towelSort;
function towelSort(matrix) {
    if (!matrix) return [];
    let res = []
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) res += matrix[i];
        else res += matrix[i].reverse();
    }
    return matrix.flat();
}
