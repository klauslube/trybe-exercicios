const { expect } = require("chai")

const leNumero = require('../exer01')

describe('demostrar se numero é positivo ou negativo', () => {
  describe('quando o numero é maior que 0', () => {
    describe('a resposta', () => {
      it('é uma string', () => {
        const resposta = leNumero(5);
        expect(resposta).to.be.a('string')
       });
      it("é igual a 'positivo'",() => {
        const resposta = leNumero(5);
        expect(resposta).to.be.equals('positivo')
      })
    });
  });

  describe('quando o numero é menor que 0', () => {
    describe('a resposta', () => {
      it('é uma string', () => {
        const resposta = leNumero(-1);
        expect(resposta).to.be.a('string')
       });
      it('é igual a "negativo"', () => {
        const resposta = leNumero(-10);
        expect(resposta).to.be.equals('negativo');
      });
    });
  });

  describe('quando o numero é 0', () => {
    describe('a resposta', () => {
      it('é uma string', () => {
        const resposta = leNumero(0);
        expect(resposta).to.be.a('string')
       });
      it("é igual a 'neutro'",() => {
        const resposta = leNumero(0);
        expect(resposta).to.be.equals('neutro')
      })
    });
  });
  describe('quando o parâmetro passado não é um número', () => {
    describe('a resposta', () => {
      it('é uma "string"', () => {
        const resposta = leNumero('AAAA');
  
        expect(resposta).to.be.a('string');
      });
  
      it('é igual a "o parâmetro deve ser um número"', () => {
        const resposta = leNumero('AAAA');
  
        expect(resposta).to.be.equals('o parâmetro deve ser um número');
      });
    });
  });
  
})