const math = require('./math.js');
const fc = require('fast-check');

describe('example-based tests', () => {
    it('should return -1 on a negative number', () => {
        const actual = math.signum(-42);
        const expected = -1;

        expect(actual).toEqual(expected);
    });

    it('should return 1 on a positive number', () => {
        const actual = math.signum(42);
        const expected = 1;

        expect(actual).toEqual(expected);
    });

    it('should return 0 on 0', () => {
        const actual = math.signum(0);
        const expected = 0;

        expect(actual).toEqual(expected);
    });
});

describe('property-based tests', () => {
    it('should return 1 on every positive number', () => {
        fc.assert(
            fc.property(
                fc.nat().filter((n) => n > 0),
                (num) => {
                    const actual = math.signum(num);
                    const expected = 1;

                    expect(actual).toEqual(expected);
                }
            ),
            {verbose: true}
        );
    });

    it('should return -1 on every negative number', () => {
        fc.assert(
            fc.property(
                fc.integer().filter((n) => n < 0),
                (num) => {
                    const actual = math.signum(num);
                    const expected = -1;

                    expect(actual).toEqual(expected);
                }
            )
        );
    });

    it('should return -1, 0, or 1 on every input', () => {
        fc.assert(
            fc.property(fc.integer(), (num) => {
                const actual = math.signum(num);

                expect(actual === -1 || actual === 0 || actual === 1).toBeTruthy();
            })
        );
    });

    it('should return undefined on invalid inputs', () => {
        fc.assert(
            fc.property(
                fc.falsy().filter((x) => x !== 0),
                (num) => {
                    const actual = math.signum(num);

                    expect(actual).toBeUndefined();
                }
            )
        );
    });
});

describe('sum', () => {
    describe('example-based', () => {
        it('should return 0 on empty array', () => {
            expect(math.sum([])).toEqual(0);
        });
    });

    describe('property-based', () => {
        it('should always have a sum at least as large as the largest input value if given only positive numbers', () => {
            fc.assert(
                fc.property(fc.array(fc.nat()), (nums) => {
                    const actual = math.sum(nums);
                    const largest = Math.max(...nums);
                    expect(actual).toBeGreaterThanOrEqual(largest);
                })
            );
        });

        it('should always have a sum at least as small as the smallest input value if given only negative numbers', () => {
            fc.assert(
                fc.property(fc.array(fc.integer().filter(x => x < 0)), (nums) => {
                    const actual = math.sum(nums);
                    const smallest = Math.min(...nums);
                    expect(actual).toBeLessThanOrEqual(smallest);
                })
            );
        });

        it('should always calculate 0 if we sum a number and its inverse', () => {
            fc.assert(fc.property(fc.nat(), (num) => {
                const actual = math.sum([num, -num]);
                expect(actual).toBe(0);
            }));
        });
    });
});
