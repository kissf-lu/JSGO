/**
 * Created by lujian on 2017-03-01.
 *
 * update now day 2017-03-02
 */

//------ lib.js ------
export const sqrt = Math.sqrt;
export function square(x) {
    return x * x;
}
export function diag(x, y) {
    return sqrt(square(x) + square(y));
}