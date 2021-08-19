import React,{ Component} from 'react';

export default class FormularioCadastro extends Component {
  render() {
    return(
      <form>
        <input type="text" placeholder="Título"/>
        <textarea placeholder="Escreva sua nota..."/>
        <button action="submit">Criar Nota</button>
      </form>
    );
  }
}