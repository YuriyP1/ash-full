
import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import './style.scss'
import './style.scss'
import { useRef } from 'react';
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

    return(
        <div className="banner limitWidthSecond">
                <Swiper
                    // spaceBetween={30}
                    // centeredSlides={ 'default'}
                    className="mySwiper"
                    modules={[Autoplay, Pagination, Navigation]}
                    autoplay={{
                        delay: 5500,
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
                            
                            </div>
                                <div className='banner-content__btn'>
                                    ЗІБРАТИ КОШИК
                                </div>
                            </div>
                            <div className="banner-visual" id='canvas__root'>
                                <img className="banner-visual__image" src='images/banner/banner-image.png'/>
                            </div> 
                        </div>
                        <div className="banner-visual" id='canvas__root'>
                                <img className="banner-visual__image" src='images/banner/banner-image.png'/>
                            </div> 
                    </SwiperSlide>
                    <SwiperSlide >
                    <div className='banner-container'>
                    <div className="banner-content">
                        <div style={{display: 'flex'}}>СУШІ В <div className='FB9950'> ASH</div></div>
                            ДОСТАВЩИК <br/>
                            ВАШ
                            <div className='banner-content__btn'>
                                ЗІБРАТИ КОШИК
                            </div>
                        </div>
                        <div className="banner-visual" id='canvas__root'>
                            <img className="banner-visual__image" src='https://img.tsn.ua/cached/929/tsn-8d1621a47e57f8d275b9b822fb9c4f13/thumbs/428x268/2d/cc/31d62e3155896505b2f96187fccccc2d.jpg'/>
                        </div>
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