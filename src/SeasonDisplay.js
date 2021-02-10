import './SeasonDisplay.css';
import React from 'react';

//Boa prática para refatoração de códigos
const seasonConfig = {
    verao : {
        texto: 'Vamos à praia',
        icon: 'sun'
    },
    inverno: {
        texto: 'Temos que nos agasalhar',
        icon: 'snowflake'
    }
}

const getSeason = (latitude, mes) => {
    if (mes > 2 && mes < 9){
        return latitude > 0 ? 'verao' : 'inverno';
    } else {
        return latitude > 0 ? 'inverno' : 'verao' ;
    }

}
const SeasonDisplay = (props) => {
    const season = getSeason(props.latitude, new Date().getMonth());
    const {texto, icon} = seasonConfig[season];
    
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${icon} icon`} /> 
            <h1>{texto}</h1> 
            <i className={`icon-right massive ${icon} icon`} /> 
        </div>
    );
}

export default SeasonDisplay;