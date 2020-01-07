var expect = chai.expect;

describe('Test HomeBanking', () => {
    describe('funcion sumarDinero(dinero)', () => {
        it('si le ingreso un monto ej: 200, lo suma correctamente', () => {
            var entrada = 200;
            var esperado = saldoCuenta + entrada;
            sumarDinero(entrada);
            expect(saldoCuenta).to.equal(esperado);
        });
    });
    describe('funcion restarDinero(dinero)', () => {
        it('Retiro un monto ej: 200, los descuenta correctamente', () => {
            var extraccion = 200;
            var esperado = saldoCuenta - extraccion;
            restarDinero(extraccion);
            //retorna un alerta con los montos correctos pero no pasa el test
            expect(saldoCuenta).to.equal(esperado);
        });
        it('Si el monto excede la cantidad disponible para retirar, retorna "false"', () => {
            var extraccionMayor = saldoCuenta + 1;
            var extraer = restarDinero(extraccionMayor);
            expect(extraer).to.be.false;
        });
    });
})