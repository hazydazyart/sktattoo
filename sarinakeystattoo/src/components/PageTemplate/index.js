import MainNav from '../MainNav';
import LogoText from '../LogoText';
import Footer from '../Footer';
import './PageTemplate.scss';

export default function PageTemplate({ children, title }) {
  return (
    <div className='app'>
      <header className='app__header'>
        <LogoText />
      </header>
      <div className='app__content'>
        <MainNav />
        <div className='app__content--title'>
          <h2>{title}</h2>
        </div>
        {children}
      </div>
      <Footer />
    </div>
  );
}
