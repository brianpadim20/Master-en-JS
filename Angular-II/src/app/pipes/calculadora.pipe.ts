import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:'calculadora'})

export class calculadoraPipe implements PipeTransform{

    //dato | calculadora:otroDato
    // Parámetro uno        Parámetro dos
    transform(value:any, value_two:any) {
        let operaciones = `
            suma: ${value+value_two} -
            resta: ${value-value_two} -
            multiplicación: ${value*value_two} -
            división: ${value/value_two}

        `;

        return operaciones;
        
    }

}