import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
          <header>
            <img src="https://avatars2.githubusercontent.com/u/60194147?s=460&u=7b15cc0fdb6fa5fe381a9aceddbe6cde2f748f89&v=4" alt="Juaj" />
            <div>
              <strong>Juaj</strong>
              <span>Música</span>
            </div>
          </header>

         <p>
           Breve intro do professor.
           <br /><br />
           Descrição do professor.
         </p>

         <footer>
           <p>
             Preço/hora
             <strong>R$ 50,00</strong>
           </p>
           <button type="button">
             <img src={whatsappIcon} alt="Whatsapp"/>
             Entrar em contato
           </button>
         </footer>
       </article>
  )
}

export default TeacherItem;