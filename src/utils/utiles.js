const formateaNumero = (valor) => {

    const numero = Number(valor);
    
    if (isNaN(numero)) return "Valor inválido";
    
    return numero.toLocaleString("es-ES");
};

export { formateaNumero }