/** instanceofOr
 *
 * 等价于 `obj instanceof a || obj instanceof b ...`
 *
 * 判断对象是否是其中任意一个类型  
 * @param obj 要判断的对象
 * @param type 要判断的类型
 */
export function instanceofOr<T, O>(obj: O, type: new (...args: any[]) => T): O extends T ? true : false
/** instanceofOr
 *
 * 等价于 `obj instanceof a || obj instanceof b ...`
 *
 * 判断对象是否是其中任意一个类型  
 * @param obj 要判断的对象
 * @param types 要判断的类型
 */
export function instanceofOr<T, O>(obj: O, ...types: (new (...args: any[]) => T)[]): O extends T ? true : false
/** instanceofOr
 *
 * 等价于 `obj instanceof a || obj instanceof b ...`
 *
 * 判断对象是否是其中任意一个类型
 * @param obj 要判断的对象
 * @param types 要判断的类型
 */
export function instanceofOr<O>(obj: O, ...types: (new (...args: any[]) => O)[]): true
/** instanceofOr
 *
 * 等价于 `obj instanceof a || obj instanceof b ...`
 *
 * 判断对象是否是其中任意一个类型
 * @param obj 要判断的对象
 * @param types 要判断的类型
 */
export function instanceofOr<O>(obj: O, ...types: (new (...args: any[]) => any)[]): boolean
/** instanceofOr
 *
 * 等价于 `obj instanceof a || obj instanceof b ...`
 *
 * 判断对象是否是其中任意一个类型
 * @param obj 要判断的对象
 * @param types 要判断的类型
 */
export function instanceofOr(obj: any, ...types: (new (...args: any[]) => any)[]): boolean
export function instanceofOr(obj: any, ...types: (new (...args: any[]) => any)[]) {
    for (const type of types) {
        if (obj instanceof type) return true
    }
    return false
}
/** instanceofAnd
 *
 * 等价于 `obj instanceof a && obj instanceof b ...`
 *
 * 判断对象是否是同时是每个类型
 * @param obj 要判断的对象
 * @param type 要判断的类型
 */
export function instanceofAnd<T, O>(obj: O, type: new (...args: any[]) => T): O extends T ? true : false
/** instanceofAnd
 *
 * 等价于 `obj instanceof a && obj instanceof b ...`
 *
 * 判断对象是否是同时是每个类型
 * @param obj 要判断的对象
 * @param types 要判断的类型
 */
export function instanceofAnd<T, O>(obj: O, ...types: (new (...args: any[]) => T)[]): O extends T ? true : false
/** instanceofAnd
 *
 * 等价于 `obj instanceof a && obj instanceof b ...`
 *
 * 判断对象是否是同时是每个类型
 * @param obj 要判断的对象
 * @param types 要判断的类型
 */
export function instanceofAnd<O>(obj: O, ...types: (new (...args: any[]) => O)[]): true
/** instanceofAnd
 *
 * 等价于 `obj instanceof a && obj instanceof b ...`
 *
 * 判断对象是否是同时是每个类型
 * @param obj 要判断的对象
 * @param types 要判断的类型
 */
export function instanceofAnd<O>(obj: O, ...types: (new (...args: any[]) => any)[]): boolean
/** instanceofAnd
 *
 * 等价于 `obj instanceof a && obj instanceof b ...`
 *
 * 判断对象是否是同时是每个类型
 * @param obj 要判断的对象
 * @param types 要判断的类型
 */
export function instanceofAnd(obj: any, ...types: (new (...args: any[]) => any)[]): boolean
export function instanceofAnd(obj: any, ...types: (new (...args: any[]) => any)[]) {
    for (const type of types) {
        if (!(obj instanceof type)) return false
    }
    return true
}
/** AllInstanceofOr
 *
 * 等价于 `a instanceof type || b instanceof type ...`
 *
 * 判断对象是不是这个类型
 * @param type 目标类型
 * @param obj 要判断的对象
 */
export function AllInstanceofOr<T, O>(type: new (...args: any[]) => T, obj: O): O extends T ? true : false
/** AllInstanceofOr
 *
 * 等价于 `a instanceof type || b instanceof type ...`
 *
 * 判断是不是其中有一个对象是这个类型
 * @param type 目标类型
 * @param objs 要判断的对象
 */
export function AllInstanceofOr<T, O>(type: new (...args: any[]) => T, ...objs: O[]): O extends T ? true : false
/** AllInstanceofOr
 *
 * 等价于 `a instanceof type || b instanceof type ...`
 *
 * 判断是不是其中有一个对象是这个类型
 * @param type 目标类型
 * @param objs 要判断的对象
 */
export function AllInstanceofOr<T>(type: new (...args: any[]) => T, ...objs: T[]): true
/** AllInstanceofOr
 *
 * 等价于 `a instanceof type || b instanceof type ...`
 *
 * 判断是不是其中有一个对象是这个类型
 * @param type 目标类型
 * @param objs 要判断的对象
 */
export function AllInstanceofOr<T>(type: new (...args: any[]) => T, ...objs: any[]): boolean
/** AllInstanceofOr
 *
 * 等价于 `a instanceof type || b instanceof type ...`
 *
 * 判断是不是其中有一个对象是这个类型
 * @param type 目标类型
 * @param objs 要判断的对象
 */
export function AllInstanceofOr(type: new (...args: any[]) => any, ...objs: any[]): boolean
export function AllInstanceofOr(type: new (...args: any[]) => any, ...objs: any[]) {
    for (const o of objs) {
        if(o instanceof type) return true
    }
    return false
}
/** AllInstanceofAnd
 *
 * 等价于 `a instanceof type && b instanceof type ...`
 *
 * 判断对象是不是这个类型
 * @param type 目标类型
 * @param obj 要判断的对象
 */
export function AllInstanceofAnd<T, O>(type: new (...args: any[]) => T, obj: O): O extends T ? true : false
/** AllInstanceofAnd
 *
 * 等价于 `a instanceof type && b instanceof type ...`
 *
 * 判断是不是所有对象都是这个类型
 * @param type 目标类型
 * @param objs 要判断的对象
 */
export function AllInstanceofAnd<T, O>(type: new (...args: any[]) => T, ...objs: O[]): O extends T ? true : false
/** AllInstanceofAnd
 *
 * 等价于 `a instanceof type && b instanceof type ...`
 *
 * 判断是不是所有对象都是这个类型
 * @param type 目标类型
 * @param objs 要判断的对象
 */
export function AllInstanceofAnd<T>(type: new (...args: any[]) => T, ...objs: T[]): true
/** AllInstanceofAnd
 *
 * 等价于 `a instanceof type && b instanceof type ...`
 *
 * 判断是不是所有对象都是这个类型
 * @param type 目标类型
 * @param objs 要判断的对象
 */
export function AllInstanceofAnd<T>(type: new (...args: any[]) => T, ...objs: any[]): boolean
/** AllInstanceofAnd
 *
 * 等价于 `a instanceof type && b instanceof type ...`
 *
 * 判断是不是所有对象都是这个类型
 * @param type 目标类型
 * @param objs 要判断的对象
 */
export function AllInstanceofAnd(type: new (...args: any[]) => any, ...objs: any[]): boolean
export function AllInstanceofAnd(type: new (...args: any[]) => any, ...objs: any[]) {
    for (const o of objs) {
        if (!(o instanceof type)) return false
    }
    return true
}