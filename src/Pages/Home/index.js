import React from 'react'
import Footer from '../../Components/Footer';
import NavBar from '../../Components/NavBar';

import './style.css';
import logoOld from '../../img/logo-old.png';
import fireLogo from '../../img/logo.png';


const HomePage = () => {

  return (
    <div>
      <NavBar />
      <main className='bodyPage'>
        <div className='topBox'>
          <img className='img-text' src={logoOld} alt="" />
          <p className='textTop'>Com o objetivo de ajudar e facilitar o dia a dia e os processos financeiros
            o pequeno e médio empreendedor, criamos este projeto com o intuito de
            facilitar um dos aspectos
            mais complexos e importantes do seu negócio:
            a precificação.
          </p>
        </div>
        <div>
          <ul className='selectBusiness'>
            <li className='itemBusiness'>
              <img className='imgBusiness' src={fireLogo} alt="" />
              <h3 className='titleBusiness'>Seu Negócio</h3>
              <button className='buttonBusiness'>Selecionar</button>
            </li>
            <li className='itemBusiness'>
              <img className='imgBusiness' src={fireLogo} alt="" />
              <h3 className='titleBusiness'>Seu Negócio</h3>
              <button className='buttonBusiness'>Selecionar</button>
            </li>
            <li className='itemBusiness'>
              <img className='imgBusiness' src={fireLogo} alt="" />
              <h3 className='titleBusiness'>Seu Negócio</h3>
              <button className='buttonBusiness'>Selecionar</button>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default HomePage