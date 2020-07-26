import { Jumbotron, Button, Carousel, CarouselItem, CarouselControl,CarouselIndicators, CarouselCaption, Container} from 'reactstrap';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const items = [
    {
      src: 'https://cdn1.productnation.co/stg/sites/5/5d23187676582.jpeg',
      altText: 'Tas Wanita',
      caption: 'Tas Wanita'
    },
    {
      src: 'https://asianparent-assets-id.dexecure.net/wp-content/uploads/sites/24/2016/08/Sebelum-Membeli-Tas-Sekolah-Anak-Memilih-Tas-Ransel-yang-Tepat-untuk-Anak-1024x576.jpg',
      altText: 'Tas Anak',
      caption: 'Tas Anak'
    },
    {
      src: 'https://i2.wp.com/kreativv.com/wp-content/uploads/2019/04/5-Jenis-Tas-Pria.png?resize=1140%2C694&ssl=1',
      altText: 'Tas Pria',
      caption: 'Tas Pria'
    },
  ];
  
const Example = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
        
      );
    });
  
    return (
    <Container>
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
        <Jumbotron>
                    <h1 className="display-3">Selamat Datang di Tas-ku</h1>
                    <p className="lead">Ingin jadi Reseller Tas dari Jualan Yuk dengan omset puluhan juta? Gampang banget hanya dengan daftar jadi member </p>
                    <hr className="my-2" />
                    <p>Tersedia katalog Tas Jualan Yuk dengan berbagai model </p>
                    <p className="lead">
                        <Link to="/daftar"  className="">
                        Daftar Menjadi Member       
                            </Link>
                    </p>
        </Jumbotron>
      </Container>
    );
  }
  
  export default Example;
