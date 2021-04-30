import React, { useState } from 'react';


import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
  
} from 'reactstrap';

const items = [
  {
    src: 'https://cdn.pixabay.com/photo/2016/07/22/18/34/cocktail-1535518_960_720.jpg',
    
  },
  {
    src: 'https://cdn.pixabay.com/photo/2016/01/19/15/07/cocktails-1149171_960_720.jpg',
    
  },
  {
    src: 'https://cdn.pixabay.com/photo/2016/01/02/04/58/martini-1117932_960_720.jpg',
    
  }
];

const Example = ({props}) => {
    
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
        <img src={item.src} alt={item.altText} background='black' />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        
      </CarouselItem>
      
      
    );
  });

  return (
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
  );
  }
  


export default Example;