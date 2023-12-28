import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Navbar from '../components/Navbar';
import GiftAwayEntry from '../components/GiftAwayCard';

export default function Home() {
    return (
        <>
            <Navbar />
            <Container style={{ paddingTop: '56px' }}> 
                <Row>
                    <Col lg={8}>
                        <GiftAwayEntry />
                    </Col>
                    <Col lg={4}>
                        <GiftAwayEntry />
                    </Col>
                </Row>
            </Container>
        </>
    );
}
