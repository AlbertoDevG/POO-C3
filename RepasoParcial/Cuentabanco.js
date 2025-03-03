class Cuentas {
    constructor(nCuenta, titular, saldo) {
        this._nCuenta = nCuenta;
        this._titular = titular;
        this._saldo = saldo;
    }

    depositar(cantidad){
        if (cantidad>0) {
            this._saldo += cantidad
            console.log(`Se acaba de realizar un deposito de: $${cantidad}.`);
            
        } else {
            console.log("deposite un valor positivo");
            
        }
    }

    retirar(cantidad){
        if (cantidad <= this._saldo) {
            this._saldo-= cantidad 
            console.log(`Se acaban de retirar: $${cantidad}.`);
            
        } else {
            console.log(`Saldo insuficiente.`);
            
        }
    }

    consultar(){
        console.log(`El saldo disponible de: ${this._titular}, con numero de cuenta: ${this._nCuenta} es de: $${this._saldo}`);
        
    }
}

const persona1 = new Cuentas("23051202", "Alberto García", 100);


persona1.retirar(100);
persona1.consultar();
persona1.depositar(200);
persona1.consultar();