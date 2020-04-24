import React, { Fragment, useState } from 'react';

const useCurrency = (label, stateInitial, optionsCurrency) => {

    //State de nuestro hook
    const [ state, updateState ] = useState(stateInitial);

    const toSelect = ()=>(

        <Fragment>
            <label>{label}</label>
            <select>
                <option value="">---Seleccione</option>
                {optionsCurrency.map(option =>(
                    <option key={option.code} value={option.code}>{option.name}</option>
                ))}
            </select>
        </Fragment>

    );

    //Retornando state, interfaz y fn que modifica el state
    return [state, toSelect, updateState]
}


export default useCurrency;