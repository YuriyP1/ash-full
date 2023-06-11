
import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import './style.scss'
import './style.scss'
import { useRef } from 'react';
import useWindowSize from '../../hook/resizeWindow';
// extend({ OrbitControls })
const Banner = () =>{
    // const { camera, gl } = useThree()
    // const model = useLoader(GLTFLoader, 'models/sushi/scene.gltf')
    // console.log(model)

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    const { width } = useWindowSize()

    return(
        <div className="banner limitWidthSecond">
                <Swiper
                    spaceBetween={30}
                    // centeredSlides={ 'default'}
                    className="mySwiper"
                    modules={[Autoplay, Pagination, Navigation]}
                    autoplay={{
                        delay: 80000,
                        disableOnInteraction: false,
                      }}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div className='banner-container'>
                            <div className="banner-content">
                                <div>
                                <span>СУШІ В <span className='FB9950'> ASH </span></span>
                                ДОСТАВЩИК <br/>
                                <span></span>ВАШ
                                </div>
                                <div className="banner-visual" id='canvas__root'>
                                {
                            width < 1180 &&
                            <video autoPlay loop muted>
                                <source src="banners/video-banner-set.mp4" type="video/mp4" />
                            </video>
                        }
                            </div>
                                <div className='banner-content__btn'>
                                    ЗІБРАТИ КОШИК
                                </div>
                            </div>
                                {
                                    width > 1180 &&
                                    <div className="banner-visual centered" id='canvas__root'>

                                    <video autoPlay loop muted>
                                        <source src="banners/video-banner-set.mp4" type="video/mp4" />
                                    </video>
                                    </div>
                                }
                    
                                {/* <img className="banner-visual__image" src='images/banner/banner-image.png'/> */}
                            
                        </div>
                        <div className="banner-visual" id='canvas__root'>
                
                                {/* <img className="banner-visual__image" src='images/banner/banner-image.png'/> */}
                        </div> 
                    </SwiperSlide>
                    <SwiperSlide >
                    <div className="container">
                        {
                            width > 1180 
                            ?
                            <div className="desktop">
                            <div className="left">
                            <h2>SET <span className='FB9950'>'ДРАКОНІВ'</span>: магія смаку у кожному ковтку!</h2>
                            <p>64 шт 1200 грн</p>
                            <button>В КОРЗИНУ</button>
                            </div>
                            <div className="right">
                                <video src="banners/video-banner-set.mp4" autoPlay controls={false} muted loop />
                            </div>
                            </div>
                            :
                            <div className="mobile">
                                                        <h2>SET <span className='FB9950'>'ДРАКОНІВ'</span>: магія смаку у кожному ковтку!</h2>

                            <p>64 шт 1200 грн</p>
                            
                            <div className="video-container">
                            <video src="banners/video-banner-set.mp4" autoPlay controls={false} muted loop/>
                            </div>
                            <button>У КОШИК</button>
                        </div>
                        }
                        </div>
                    </SwiperSlide>
                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
        </div>
    )
}

export default Banner