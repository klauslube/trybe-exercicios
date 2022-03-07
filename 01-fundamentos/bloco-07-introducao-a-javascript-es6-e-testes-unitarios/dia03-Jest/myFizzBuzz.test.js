const myFizzBuzz = require('./myFizzBuzz');

describe('testa a funcao myFizzBuzz', () => {
  it('deve retornar o numero a palavra certa de acordo com os parametros', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(3)).toBe('fizz');
    expect(myFizzBuzz(5)).toBe('buzz');
    expect(myFizzBuzz(2)).toBe(2);
    expect(myFizzBuzz('2')).toBe(false);
  })
});