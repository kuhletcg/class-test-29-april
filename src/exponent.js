function power(base, exp) {
  if (exp === 0) return 1;

  let result = base;

  result = result * power(base, exp - 1);

  return result;
}
