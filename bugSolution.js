function foo(a, b) {
  return Number.isNaN(a) && Number.isNaN(b);
}

console.log(foo(NaN, NaN)); // true
console.log(foo(NaN, 10)); // false
console.log(foo(10, NaN)); // false
console.log(foo(10, 20)); // false