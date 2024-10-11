const asteroidCollision = (a) => {
    let p = -1;
    for (let i = 0; i < a.length;)
        if (a[i] > 0 || p < 0 || a[p] < 0) a[++p] = a[i++];
        else if (a[p] + a[i] < 0) --p;
        else if (a[p] + a[i] > 0) ++i;
        else { --p; ++i; }
    return a.slice(0, p + 1);
};