import { Card } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import img1 from '../../images/delivery 1.png';
import img2 from '../../images/delivery 2.jpg';
import './About.css'
const AboutUs = () => {
    
    return (
        <div>
        <h2 className = "p-5">About Us</h2>
        <h4>We are online delivery service who are dedicated to deliver pizzas from top pizza places to your doorstep </h4>
        {/* Details About More Services */}
        <h2 className = "pb-5">We will provide you:</h2>
                <div className="mb-4 container">
                <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={img1} />
                      <Card.Body>
                        <Card.Title>Faster Delivery</Card.Title>
                        <Card.Text>
                          
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={img2} />
                      <Card.Body>
                        <Card.Title>Deliver Food at the most fresh state</Card.Title>
                        <Card.Text>
                         
                        </Card.Text>

                      </Card.Body>
                    </Card>
                    <h2 className = "pt-5">We hope you'll use our service to order delicious pizza</h2>
        <h1 className = "pb-5"><span className = "text-primary">Thank You for Visiting!</span></h1>
                </div>
        <Footer></Footer>
            </div>
    );
};

export default AboutUs;