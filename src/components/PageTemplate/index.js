import MainNav from '../MainNav';
import corner from '../../images/decorations/corner.png';
import divider from '../../images/decorations/divider1.png';
import divider2 from '../../images/decorations/divider2.png';
import side from '../../images/decorations/side.png';
import tag from '../../images/decorations/tag.png';
import './PageTemplate.scss';

export default function PageTemplate({ children, title }) {
  return (
    <div className='homepage'>
      <div className='page-content'>
        <div className='homepage__top'>
          <div className='homepage__title'>
            <img className='homepage__corner--left' src={corner} />
            <h1 className='title-text'>Sarina Keys Tattoo</h1>
            <img className='homepage__corner--right' src={corner} />
          </div>
          <div className='address'>Colby Ave Tattoo / 2712 Colby Ave, Everett, WA 98201 / (425) 658 2271</div>
          <div className='homepage__divider-container'>
            <img className='homepage__divider' src={divider} />
          </div>
        </div>
        <div className='nav-container'>
          <img className='nav-container__tag--left' src={tag} />
          <MainNav />
          <img className='nav-container__tag--right' src={tag} />
        </div>
        <div className='page-content__main'>
          <img className='page-content__side' src={side} />
          <div className='page-content__center'>
            {children}
          </div>
          <img className='page-content__side' src={side} />
        </div>
        <div className='homepage__bottom'>
          <img src={divider2} />
        </div>
      </div>
    </div>
  );
}
