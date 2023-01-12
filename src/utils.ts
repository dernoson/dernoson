/**限定型態列舉 */
export function ConstType<T>() {
    return function <temp extends T>(object: temp) {
        return object;
    };
}

/**獲取物件keyname array */
export const getObjectKeys = <T extends object>(object: T) => Object.getOwnPropertyNames(object) as Array<keyof T>;

/**回傳amt數量的隨機抽樣array */
//TODO 這個function太醜了
export const randSelect = (amt: number, w: { [propName: string]: number }): string[] => {
    let V: [string, number][] = [];
    Object.keys(w).forEach((v) => {
        let weight = w[v] <= 0 ? 0.0001 : w[v];
        V.push([v, Math.pow(Math.random(), 1 / weight)]);
    });
    V.sort((a, b) => b[1] - a[1]);
    let output: string[] = [];
    for (let i = 0; i < amt; i++) {
        output.push(V[i][0]);
    }
    return output;
};
