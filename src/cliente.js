export default class Cliente{
    constructor(nombre,impuesto){
        this._nombre = nombre;
        this._impuesto = impuesto;
    }

 ///Implementar getter y setter para acceder y/o modificar los datos de las clases
    get nombre(){
        return this._nombre;
    }
    
    set nombre(nombreNuevo){
        this._nombre = nombreNuevo;
    }
    
    get impuesto() {
        return this._impuesto
    }

    set impuesto(impuesto) {
        this._impuesto= impuesto;
    }
    /// Cálculo de Impuestos
    calcularImpuesto(monto_bruto_anual,deducciones){
        return (monto_bruto_anual - deducciones) * 21/100;
    }
};