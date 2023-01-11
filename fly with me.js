function helper(arr, i, ans) {
    if (i == arr.length - 1) {
        return 0;
    }

    if (i >= arr.length || arr[i] == 0) {
        return Number.MAX_VALUE;
    }

    if (ans[i] != undefined) {
        return ans[i];
    }

    let min_jumps = Number.MAX_VALUE;
    for (let j = i + 1; j <= i + arr[i]; j++) {
        let cost = helper(arr, j, ans);
        if (cost != Number.MAX_VALUE) {
            min_jumps = Math.min(min_jumps, cost + 1);
        }
    }

    return (ans[i] = min_jumps);
}

function solution(arr) {
    if (arr.length == 0)
        return 0;
    var ans = new Array(arr.length);
    let r = helper(arr, 0, ans);
    if (r == Number.MAX_VALUE)
        return -1;
    return r;
}


let arr = [1, 6, 3, 4, 5, 0, 0, 0, 6];
console.log(solution(arr));
