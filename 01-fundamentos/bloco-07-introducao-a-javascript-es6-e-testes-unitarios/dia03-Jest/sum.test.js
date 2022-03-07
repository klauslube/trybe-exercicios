const sum = require('./sum');

describe('testa a funcao sum', () => {
 it('deve retornar resultado da soma', () => {
   expect(sum(4,5)).toBe(9);
   expect(sum(0,0)).toBe(0); 
});
  it('deve dar um error caso receba uma string ao invez de numero', () => {
    expect(() => sum(4,'5')).toThrowError();
    expect(() => sum(4,'5')).toThrowError('parameters must be numbers');
  })
})