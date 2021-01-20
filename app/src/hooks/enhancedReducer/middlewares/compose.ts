interface Func<T extends any[], R> {
  (...args: T): R
}

export default function compose(): <R>(a: R) => R;
export default function compose<F extends Function>(f: F): F;
export default function compose<A, T extends any[], R>(f1: (a: A) => R, f2: Func<T, A>): Func<T, R>;
export default function compose<A, B, T extends any[], R>(f1: (b: B) => R, f2: (a: A) => B, f3: Func<T, A>): Func<T, R>;
export default function compose<R>(f1: (a: any) => R, ...fns: Function[]): (...args: any[]) => R;

export default function compose(...fns: Function[]) {
  if (fns.length === 0) {
    return <T>(arg: T) => arg;
  }

  if (fns.length === 1) {
    return fns[0]
  }

  return fns.reduce((assemble, fn) => (...args: any) => assemble(fn(...args)))
}