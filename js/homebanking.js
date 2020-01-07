//Declaración de variables
var nombreUsuario = 'Leonardo Smillovich';
var saldoCuenta = 5000;
var limiteExtraccion = 5000;
var saldoAnterior;
var claveUsuario = 1234;

//Variables servicios
var agua = 350;
var telefono = 425;
var luz = 210;
var internet = 570;

//Variables transferencias
var cuentaUno = '1234567';
var cuentaDos = '7654321';


//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
    iniciarSesion();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();


}

//Funciones agregadas por el alumno.
function sumarDinero(dinero) {
    saldoAnterior = saldoCuenta;
    saldoCuenta += dinero;

}

function restarDinero(dinero) {
    if (dinero > limiteExtraccion) {
        alert('La cantidad de dinero que deseas extraer es mayor a tu límite de extracción.');
        return false;
    } else if (dinero > saldoCuenta) {
        alert('No hay saldo disponible en su cuenta para extraer esa cantidad de dinero.');
        return false;
    } else {
        saldoAnterior = saldoCuenta;
        saldoCuenta -= dinero;
        alert('Has retirado : $' + dinero + '\n' + 'Saldo anterior: $' + saldoAnterior + '\n' + 'Saldo actual: $' + saldoCuenta)
        actualizarSaldoEnPantalla();
        return true;
    }
}

function modificarLimiteExtraccion(dinero) {
    limiteExtraccion = dinero;
}

function billetesDeCien(dinero) {
    if ((dinero >= 100) && (dinero % 100 === 0)) {
        return true;
    } else {
        alert('Solo puedes extraer billetes de 100.');
        return false;
    }

}

function pagoDeServicios(agua, luz, internet, telefono) {
    if (saldoCuenta >= agua) {
        return true;
    } if (saldoCuenta >= luz) {
        return true;
    } if (saldoCuenta >= internet) {
        return true;
    } if (saldoCuenta >= telefono)
        return true;
    else {
        alert('No hay suficiente saldo en su cuenta para pagar este servicio.');
        return false;
    }
}



//Funciones que tenes que completar
function cambiarLimiteDeExtraccion(dinero) {
    var cambioLimite = parseInt(prompt('Ingrese nuevo limite de extraccion'));
    if (isNaN(cambioLimite)) {
        alert('Solo puedes ingresar numeros.');
        return;
    }
    modificarLimiteExtraccion(cambioLimite);
    actualizarLimiteEnPantalla();
    alert('Su nuevo limite de extaccion es $ ' + cambioLimite);
}



function extraerDinero(dinero) {
    var dinero = parseInt(prompt('Monto a extraer?'));
    if (isNaN(dinero)) {
        return;
    }
    if (billetesDeCien(dinero)) {
        restarDinero(dinero);
    }
}

function depositarDinero(dinero) {
    var dinero = parseInt(prompt('Monto a ingresar?'));
    if (isNaN(dinero)) {
        alert('Solo puedes ingresar numeros.');
        return;
    }
    sumarDinero(dinero);
    alert('Has depositado : $' + dinero + '\n' + 'Saldo anterior: $' + saldoAnterior + '\n' + 'Saldo actual: $' + saldoCuenta);
    actualizarSaldoEnPantalla();
}

function pagarServicio() {
    saldoAnterior = saldoCuenta;
    var pagarServicio = prompt('Ingrese el numero del servicio a pagar. ' + '\n' + '1 - Agua ' + '\n' + '2 - Luz' + '\n' + '3 - Internet' + '\n' + '4 - Teléfono');
    switch (pagarServicio) {
        case '1':
            if (pagoDeServicios(agua)) {
                saldoCuenta -= agua;
                alert('Has pagado el servicio de Agua' + '\n' + 'Saldo anterior: $' + saldoAnterior + '\n' + 'Dinero descontado: $' + agua + '\n' + 'Saldo actual: $' + saldoCuenta);
                actualizarSaldoEnPantalla();
            }
            break;
        case '2':
            if (pagoDeServicios(luz)) {
                saldoCuenta -= luz;
                alert('Has pagado el servicio de Luz' + '\n' + 'Saldo anterior: $' + saldoAnterior + '\n' + 'Dinero descontado: $' + luz + '\n' + 'Saldo actual: $' + saldoCuenta);
                actualizarSaldoEnPantalla();
            }
            break;
        case '3':
            if (pagoDeServicios(internet)) {
                saldoCuenta -= internet;
                alert('Has pagado el servicio de Internet' + '\n' + 'Saldo anterior: $' + saldoAnterior + '\n' + 'Dinero descontado: $' + internet + '\n' + 'Saldo actual: $' + saldoCuenta);
                actualizarSaldoEnPantalla();
            }
            break;
        case '4':
            if (pagoDeServicios(telefono)) {
                saldoCuenta -= telefono;
                alert('Has pagado el servicio de Teléfono' + '\n' + 'Saldo anterior: $' + saldoAnterior + '\n' + 'Dinero descontado: $' + telefono + '\n' + 'Saldo actual: $' + saldoCuenta);
                actualizarSaldoEnPantalla();
            }
            break;
        default:
            alert('El numero elegido no es un servicio valido.');
            break;
    }
}

function transferirDinero(montoTransferencia) {
    var montoTransferencia = parseInt(prompt('Monto que desea transferir: '));
    if (isNaN(montoTransferencia)) {
        alert('Solo puedes ingresar numeros.');
        return;
    } else if (montoTransferencia > saldoCuenta) {
        alert('El monto a transferir es mayor que el saldo de su cuenta');
        return false;
    } else {
        var TransferirCuenta = prompt('Ingrese el numero de cuenta al que deseea transferir \n  1 - Cuenta amiga uno \n  2 - Cuenta amiga dos');

        switch (TransferirCuenta) {
            case '1':
                saldoCuenta -= montoTransferencia;
                alert(' Se han transferido $ ' + montoTransferencia + '\n Cuenta destino: ' + cuentaUno);
                actualizarSaldoEnPantalla();
                break;
            case '2':
                saldoCuenta -= montoTransferencia;
                alert(' Se han transferido $ ' + montoTransferencia + '\n Cuenta destino: ' + cuentaDos);
                actualizarSaldoEnPantalla();
                break;
            default:
                alert('Solo puede transferir a cuenta amigas.');
                break;

        }

    }

}

function iniciarSesion(clave) {
    clave = parseInt(prompt('ingrese su clave de inicio.'));
    if (clave === claveUsuario) {
        alert('Bienvenido ' + nombreUsuario + ' ya puedes comenzar a realizar operaciones.');
    } else {
        alert('Clave incorrecta. Tu dinero ha sido retenido por cuestiones de seguridad.');
        saldoCuenta = 0;
        limiteExtraccion = 0;
        depositarDinero = function() {return null};
        nombreUsuario = "";
        extraerDinero = function() {return null};
        pagarServicio = function() {return null};
        transferirDinero = function() {return null};
        cambiarLimiteDeExtraccion = function() {return null};
        actualizarSaldoEnPantalla();
    }

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}