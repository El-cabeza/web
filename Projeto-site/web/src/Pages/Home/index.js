import { useRef } from 'react'
import Footer from '../../Components/Footer';
import NavBar from '../../Components/NavBar';
import BusinessCard from '../../Components/BusinessCard';

import './style.css';
import logoOld from '../../img/logo-old.png';
import scroll from '../../img/scrollButtom.png';

const HomePage = () => {
  const dataCard = [
    {
      id: '1',
      name: 'Jango',
      imgUrl: 'https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/cde7db2f-de7b-448d-b588-8e17950b6961/202008191318_RAya_i.png'
    },
    {
      id: 2,
      name: 'Rastelo',
      imgUrl: 'https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/b8b05723-ed67-48b4-8e47-6dcce03c9242/202104292335_21mU_.jpeg',
    },
    {
      id: 3,
      name: 'Hug',
      imgUrl: 'https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/12876e5b-ad90-4226-90aa-513a412098c0/202011302025_x7V5_i.jpg',
    },
    {
      id: 4,
      name: 'MeatPacking',
      imgUrl: '',
    }

  ]
  const carousel = useRef(null)

  const handleLeft = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
    console.log(carousel.current.offsetWidth);
  }
  const handleRight = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
    console.log(carousel.current.offsetWidth);
  }

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
        <div className='selectBusiness'>
          <ul className='carousel' ref={carousel}>
            {dataCard.map((item) => <BusinessCard name={item.name} img={item.imgUrl} />)}
          </ul>
          <div className='arrowButtons'>
            <button onClick={handleLeft}><img src={scroll} alt="Scroll Left" /></button>
            <button onClick={handleRight}><img src={scroll} alt="Scroll Right" /></button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default HomePage