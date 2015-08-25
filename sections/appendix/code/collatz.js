function collatzSequence(n) {
    var sequence = [n];

    if (n <= 0) {
        return [];
    }

    while (n !== 1) {
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = 3 * n + 1;
        }

        sequence.push(n);
    }

    return sequence;
}
