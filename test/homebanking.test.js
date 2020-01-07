var expect = chai.expect;
describe('Test HomeBanking', () => {
    describe('funcion sumarDinero(dinero)', () => {
        it('si le ingreso un monto lo suma correctamente', () => {
            var entrada = 200;
            var esperado = 5200;
            sumarDinero(entrada);
            expect(saldoCuenta).to.equal(esperado);
        });
    });
})