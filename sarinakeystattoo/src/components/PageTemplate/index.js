import MainNav from '../MainNav';
import LogoText from '../LogoText';
import Footer from '../Footer';
import './PageTemplate.scss';

export default function PageTemplate({ children, title }) {
  return (
    <div className='page'>
      <div className='app'>
        <header className='app__header'>
          <LogoText />
        </header>
        <div className='app__content'>
          <MainNav />
          <div className='app__content--container'>
            <h2 className='app__content--title'>{title}</h2>
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
