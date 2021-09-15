const freteGratis = require("./descontos");

test('freteGratis é verdadeiro para 200', () => {
  expect(freteGratis(200)).toBeTruthy();
})

test('freteGratis é falso para 100', () => {
  expect(freteGratis(100)).not.toBeTruthy();
})

test('freteGratis é verdadeiro para 150', () => {
  expect(freteGratis(150)).toBeTruthy();
})
