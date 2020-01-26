module.exports = {
    configuracionMes:function(params){
        let periodo = params['date-period'];
        let conceptoCorto = params['conceptoTiempo'];
        let retorno = '';
        if(periodo != ''){
            startDate = new Date(periodo.startDate);
            retorno = {ano:startDate.getFullYear() ,mes:startDate.getMonth()+1};
        }else if(conceptoCorto != ''){
            if(conceptoCorto == conceptoTiempo.ACTUAL){
                fActual = new Date();
                retorno = {ano:fActual.getFullYear() ,mes:fActual.getMonth()+1};
            }else if(conceptoCorto == conceptoTiempo.PROXIMO){
                fSiguiente = new Date();
                fSiguiente.setMonth(fSiguiente.getMonth()+1);
                retorno = {ano:fSiguiente.getFullYear() ,mes:fSiguiente.getMonth()+1};
            }else{
                throw 'Error concepto de tiempo imposible de procesar';
            }
        }else{
            throw 'Error faltan parametros';
        }
        return retorno;
    }

}


const conceptoTiempo = {
    ACTUAL: 'este',
    PROXIMO: 'proximo'
}