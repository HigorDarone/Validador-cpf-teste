/** @jest-environment jsdom */

const { validarCPF } = require("./script")
test('verificar tamanho do cpf', function () {
var resultado = validarCPF("1111111111");
expect(resultado).toBe(false);
})


test('verificar cpf válido', function () {
var resultado = validarCPF("47170052873");
expect(resultado).toBe(true);
})