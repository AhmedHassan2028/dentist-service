import Figure from 'react-bootstrap/Figure';
// import aboutus from '../assets/about-us.jpg';

function FigureExample() {
  return (
    <Figure className="aboutme-section d-flex align-items-start gap-4">
        <Figure.Caption className="aboutme-caption mb-0">
        <h1>About Our Dental Clinic</h1>
        <div className="margin-bottom-80">
          We are a great team of dental professionals who have been dedicated to providing high-quality dental care to our patients since 1973. Our mission is to help our patients achieve optimal oral health through dental services personalized to you.
        </div>
      </Figure.Caption>

      {/* <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src={aboutus}
        rounded
      /> */}
      
    </Figure>
  );
}

export default FigureExample;