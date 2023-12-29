import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Navbar from '../components/Navbar';
import GiftAwayEntry from '../components/GiftAwayCard';

export default function Home() {
    // Assuming you have an array of entries that you want to map over
    const entries = [/* ... your entries ... */];

    return (
        <>
            <Navbar />
            <Container style={{ marginTop: '100px' }}>
                <Row className="mt-3">
                    {entries.map((entry, index) => (
                        <Col md={3} key={index} className="mb-3">
                            <GiftAwayEntry {...entry} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}
