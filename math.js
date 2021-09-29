function signum(num) {
    if (isInvalid(num)) {
        return undefined;
    }

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

function isInvalid(num) {
    return (
        num === undefined ||
        num === false ||
        num === '' ||
        isNaN(num) ||
        num === null
    );
}

module.exports = {
    signum,
    sum
};
