import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component{
    // Babel cria o constructor automaticamente
    state =  {latitude: null, errorMessage: ''}

    componentDidMount(){
        // Exemplo de callback
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ latitude: position.coords.latitude}),
            (erro) => this.setState({errorMessage: erro.message})
        );
    }

    renderConteudo(){
        let { latitude, errorMessage } = this.state;

        if(latitude && !errorMessage){
            return <SeasonDisplay latitude={latitude}/>
        }

        if(!latitude && errorMessage){
            return <div>Error: {errorMessage}</div>        
        }

        return <Spinner message="Por favor, aceite a solicitação de localização"/>
    }

    //Refatorar conteúdo
    render(){
        return(
            <div> {this.renderConteudo()} </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));