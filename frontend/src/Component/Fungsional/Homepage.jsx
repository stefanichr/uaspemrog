import { Jumbotron, Button, Carousel, CarouselItem, CarouselControl,CarouselIndicators, CarouselCaption, Container} from 'reactstrap';
import React, { useState } from 'react';

const items = [
    {
      src: 'https://cdn1.productnation.co/stg/sites/5/5d23187676582.jpeg',
      altText: 'Slide 1',
      caption: 'Slide 1'
    },
    {
      src: 'https://media.karousell.com/media/photos/products/2018/01/24/tas_karakter_1516803856_0e8f8af7.jpg ',
      altText: 'Slide 2',
      caption: 'Slide 2'
    },
    {
      src: 'https://cf.shopee.co.id/file/a6cc3e2581a475a03845731bc560cd88',
      altText: 'Slide 3',
      caption: 'Slide 3'
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
                    <h1 className="display-3">Selamat Datang di Tas.ku</h1>
                    <p className="lead">Ingin jadi Reseller Tas dari Jualan Yuk dengan omset puluhan juta? Gampang banget hanya dengan daftar jadi member </p>
                    <hr className="my-2" />
                    <p>Tersedia katalog Tas Jualan Yuk dengan berbagai model </p>
                    <p className="lead">
                        <Button color="primary">Daftar Menjadi Member</Button>
                    </p>
        </Jumbotron>
      </Container>
    );
  }
  
  export default Example;
