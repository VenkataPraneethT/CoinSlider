import { ReactComponent as BgImage } from "../../images/bg.svg";
import Lottie from "lottie-react";
import magicAnimation from "../../config/magic.json";
import {useState, useEffect} from 'react';

const Main = () => {
  const [scrolledClass, setScrolledClass] = useState('');
  const [visibilityClass, setVisibilityClass] = useState('');
  const [changePositionClass, setChangePositionClass] = useState('position-fixed');

  useEffect(() => {
    const handleScroll = () => {
      setVisibilityClass('coin-visible');
      setChangePositionClass('position-fixed');

      if(window.scrollY > 150 && window.scrollY < 450) {
        setVisibilityClass('coin-invisible');
        setScrolledClass('coin-inner-container-rotate-1');
      } 
      else if(window.scrollY >= 450 && window.scrollY < 504) {
        setVisibilityClass('coin-invisible');
        setScrolledClass('coin-inner-container-rotate-2');
        
      } else if(window.scrollY >= 504 && window.scrollY < 580) {
        setScrolledClass('coin-inner-container-rotate-3');
      }  
      else if(window.scrollY >= 580 && window.scrollY < 672) {
        setScrolledClass('coin-inner-container-rotate-4');
      }  
      else if(window.scrollY >= 672 && window.scrollY < 756) {
        setScrolledClass('coin-inner-container-rotate-5');
      }  
      else if(window.scrollY >= 756 && window.scrollY < 841) {
        setScrolledClass('coin-inner-container-rotate-6');
      } 
      else if(window.scrollY >= 841 && window.scrollY < 925) {
        setScrolledClass('coin-inner-container-rotate-7');
      }
      
      else if(window.scrollY >= 925 && window.scrollY < 927 ) {
        setScrolledClass('coin-inner-container-rotate-8');
      }
      
      else if(window.scrollY >= 927 ) {
        setScrolledClass('coin-inner-container-rotate-9');
        setChangePositionClass('position-absolute');
        
      } 
      else {
        setScrolledClass('');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className="w-full h-full block relative bg-transparent">
      <BgImage className="-z-40 object-cover top-0 right-0 w-full h-auto" />
      <div className={`absolute inset-x-0 z-10 rotatedCoinTop ${visibilityClass}`} >
        <div className="coin-container" >
            <div className={`coin-inner-container  ${changePositionClass}` } id="trigger" >
              <div className="flex justify-center" id="coin-wrapper"  >
                  <div className={`w-[31vw] h-[31vw] -translate-x-1 sm:translate-x-0 sm:w-[18.51vw] sm:h-[18.51vw] aspect-square max-h-[270px] max-w-[270px] coin-innermost-container ${scrolledClass}`} >

                  </div>
              </div>
            </div>
        </div>
      </div>
      <Lottie
        animationData={magicAnimation}
        loop={true}
        autoplay={true}
        className="z-0 absolute w-full bg-transparent top-0 right-0"
      />
    </div>
  );
};

export default Main;
