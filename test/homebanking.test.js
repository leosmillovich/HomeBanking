var expect = chai.expect;

describe('funcion sumarDinero(dinero)', () => {
    it('si le ingreso un monto lo suma correctamente', () => {
        var entrada = 200;
        var salida = sumarDinero(entrada);
        var esperado = 5200;
        expect(saldoCuenta).to.equal(esperado);
    });
});