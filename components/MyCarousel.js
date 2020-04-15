
import PropTypes from 'prop-types';
import { Carousel } from "react-bootstrap";

const MyCarousel = props => (
  <Carousel.Item {...props}>
    <img className="d-block w-100" src={props.src} alt={props.alt} />
    <Carousel.Caption>
      <h3>{props.h3label}</h3>
      <p>{props.pcontent}</p>
    </Carousel.Caption>
  </Carousel.Item>
);

MyCarousel.propTypes = {
    // Style
    // Props
    src: PropTypes.string,
    alt: PropTypes.string,
    h3label: PropTypes.string,
    pcontent: PropTypes.string
    // Callbacks
};

export default MyCarousel;