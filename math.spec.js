const math = require('./math.js');
const fc = require('fast-check');

describe('signum', () => {
    it('should return 0 on 0', () => {
        const actual = math.signum(0);

        expect(actual).toBe(0);
    });

    it('should return 1 on any positive number', () => {
        fc.assert(fc.property(fc.nat().filter(x => x !== 0), (num) => {
            expect(math.signum(num)).toBe(1);
        }), {verbose: true});
    });

    it('should return -1 on any negative number', () => {
        fc.assert(fc.property(fc.nat().filter(x => x !== 0), (num) => {
            const neg = num * -1;
            expect(math.signum(neg)).toBe(-1);
        }), {verbose: true});
    });

    it('should return 0(?) on any weird falsy value', () => {
        fc.assert(fc.property(fc.falsy(), (num) => {
            expect(math.signum(num)).toBe(0);
        }), {verbose: true});
    });
});

describe('sum', () => {
    it('should calculate 1+1 as 2', () => {
        expect(math.sum([1, 1])).toBe(2);
    });

    it('should calculate 0 from empty input', () => {
        expect(math.sum([])).toBe(0);
    });

    it('should summarize zeroes to 0', ()=> {
       fc.assert(fc.property(fc.array(fc.integer(0, 0)), (nums) => {
           expect(math.sum(nums)).toBe(0);
       }));
    });

    it('should sum positive numbers so that the result is always positive', ()=> {
        fc.assert(fc.property(fc.array(fc.integer(1, Number.MAX_SAFE_INTEGER)).filter(x => x.length), (nums) => {
            expect(math.sum(nums)).toBeGreaterThan(0);
        }));
    });

    it('should sum positive numbers so that the result is at least as big as the largest input number', ()=> {
        fc.assert(fc.property(fc.array(fc.integer(1, Number.MAX_SAFE_INTEGER)).filter(x => x.length), (nums) => {
            const max = Math.max(...nums);
            expect(math.sum(nums)).toBeGreaterThanOrEqual(max);
        }));
    });

    it('should sum negative numbers so that the result is always negative', ()=> {
        fc.assert(fc.property(fc.array(fc.integer(Number.MIN_SAFE_INTEGER, -1)).filter(x => x.length), (nums) => {
            expect(math.sum(nums)).toBeLessThan(0);
        }));
    });

    it('should sum negative numbers so that the result is at least as small as the smallest input number', ()=> {
        fc.assert(fc.property(fc.array(fc.integer(Number.MIN_SAFE_INTEGER, -1)).filter(x => x.length), (nums) => {
            const min = Math.min(...nums);
            expect(math.sum(nums)).toBeLessThanOrEqual(min);
        }));
    });

    it('should sum a number and its inverse to 0', ()=> {
        fc.assert(fc.property((fc.integer()), (num) => {
            expect(math.sum([num, -num])).toBe(0);
        }));
    });

    it('should sum a negative number and a positive number so that the absolute larger one "wins"', ()=> {
        fc.assert(fc.property(
            fc.integer(1, Number.MAX_SAFE_INTEGER),
            fc.integer(Number.MIN_SAFE_INTEGER, -1)
        , (pos, neg) => {
            const expected = pos + neg;
            expect(math.sum([pos, neg])).toBe(expected);
        }));
    });
});
