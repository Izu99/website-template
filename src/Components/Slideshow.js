import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../Styles/Slideshow.css';

export default class Slideshow extends Component {
  render() {
    const data = [
      {
        image: 'https://picsum.photos/id/23/750/300',
        caption: "Caption 1",
        description: "Description 1 Here"
      },
      {
        image: 'https://picsum.photos/id/253/750/300',
        caption: "Caption 2",
        description: "Description 2 Here"
      },
      {
        image: 'https://picsum.photos/id/213/750/300',
        caption: "Caption 3",
        description: "Description 3 Here"
      }
    ];

    return (
      <Carousel style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {data.map((slide, i) => (
          <Carousel.Item key={i}>
            <img
              className="d-block w-100"
              src={slide.image}
              alt="slider image"
              style={{ maxWidth: '100%', height: 'auto', margin: '0 auto' }}
            />
            <Carousel.Caption>
              <h3>{slide.caption}</h3>
              <p>{slide.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}
