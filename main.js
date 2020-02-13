const create = (n, dup, bg = '-', sign = '*') =>
    [...Array(n + 1)].map((_, i) => {
        const
            inc = i * 2,
            first = bg.repeat(n - i),
            second = sign.repeat(n),
            midOuter = sign.repeat(inc),
            midNum = n - inc,
            third = bg.repeat(Math.abs(Math.min(midNum, 0))),
            midInner = bg.repeat(Math.max(midNum, 0)),
            midMax = -(n * 2 + midNum),
            mid = (midOuter + midInner + midOuter).slice(midMax);

        return (first + second + third + mid + third + second + first).repeat(dup);
    }).join('\n');

console.log(create(5, 2));