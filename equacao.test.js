const {solucaoPrimeiroGrau, solucaoSegundoGrau} = require("./equacao")

test('solucapPrimeiroGrau é null', () => {
    expect(solucaoPrimeiroGrau(0, 10)).toBeNull();
})

test('solucaoPrimeiroGrau é igual a -0.2', () => {
  expect(solucaoPrimeiroGrau(20, 4).raiz).toBe(-0.2);
})

test('solucaoPrimeiroGrau é igual a -0.1875', () => {
  expect(solucaoPrimeiroGrau(32, 6).raiz).toBe(-0.1875);
})

test('solucaoPrimeiroGrau é igual a 1.5', () => {
  expect(solucaoPrimeiroGrau(20, -30).raiz).toBe(1.5);
})

test('solucaoPrimeiroGrau b é igual a 0', () => {
  expect(solucaoPrimeiroGrau(3, 0).raiz).toBe(-0);
})




//método solucaoSegundoGrau
test('solucaoSegundoGrau possui a == 0', () => {
  expect(solucaoSegundoGrau(0, 3, 8)).toBeNull;
})

test('solucaoSegundoGrau possui delta negativo', () => {
  expect(solucaoSegundoGrau(1, 5, 7)).toBeNull;
})

test('solucaoSegundoGrau com duas raizes negativas', () => {
  expect(solucaoSegundoGrau(1, 100, 10)).toMatchObject({raiz1: -0.10010020050140156, raiz2: -99.8998997994986});
})

test('solucaoSegundoGrau com c igual a zero', () => {
  expect(solucaoSegundoGrau(1, 10, 0)).toMatchObject({raiz1: 0, raiz2: -10});
})

test('solucaoSegundoGrau com b igual a zero', () => {
  expect(solucaoSegundoGrau(8, 0, -32)).toMatchObject({raiz1: 2, raiz2: -2});
})