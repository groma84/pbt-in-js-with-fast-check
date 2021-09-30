/**
 * Returns 1 on positive numbers, -1 on negative numbers, and 0 on 0
 */
function signum(num) {
    if(num > 0) {
        return 1;
    }
    if(num < 0) {
        return -1;
    }

    return 0;
}

/**
 * Calculates the sum of the input numbers
 */
function sum(nums) {
    if (!nums.length) {
        return 0;
    }

    if (nums.every(x => x === 0)) {
        return 0;
    }

    return nums.reduce((x, y) => x + y);
}

module.exports = {
    signum,
    sum
};
