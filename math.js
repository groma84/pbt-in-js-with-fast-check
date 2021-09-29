function signum(num) {
    if (num > 0) {
        return 1;
    } else if (num < 0) {
        return -1;
    } else {
        return 0;
    }
}

function sum(nums) {
    return nums.reduce((a, b) => a + b, 0);
}

module.exports = {
    signum,
    sum
};
