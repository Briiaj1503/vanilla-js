import {
    filtroPares,
    restar,
    dividir,
    sumar,
    multiplicar,
    filtroDivisibles
  } from "../src/calculadora..js";
  
  //funcion de joseph
  
  describe("sumar", () => {
    test("sumar 1 + 2 es 3", () => {
      expect(sumar(1, 2)).toBe(3);
    });
  });
  
  describe("multiplicar", () => {
    test("multiplicar 1 * 2 es 2", () => {
      expect(multiplicar(1, 2)).toBe(2);
    });
  });
  
  describe("numerosPares", () => {
    test("numerosPares 1, 2, 3, 4 es 0", () => {
      expect(filtroPares([1, 2, 3, 4])).toStrictEqual([2, 4]);
    });
  });
  
  //funcion brit
  
  describe("restar", () => {
    test("restar 5 - 2 es 3", () => {
      expect(restar(5, 2)).toBe(3);
    });
  });
  
  describe("dividir", () => {
    test("dividir 6 / 2 es 3", () => {
      expect(dividir(6, 2)).toBe(3);
    });
  });
  
  
  
  describe("numerosdivisiles", () => {
      test("numerosDivisibles 5, 20, 50, 25 es 0", () => {
        expect(filtroDivisibles([5, 21, 51, 20])).toStrictEqual([5,20]);
      });
    });