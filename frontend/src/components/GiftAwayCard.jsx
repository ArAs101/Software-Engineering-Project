import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function GiftAwayEntry(props) {
  // State to manage whether the description is visible
  const [showDescription, setShowDescription] = useState(false);

  // Function to toggle the description visibility
  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <Card>
      <Card.Img variant="top" src={props.image || "holder.js/100px180"} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        {/* Conditionally render the description based on the state */}
        {showDescription && <Card.Text>{props.description}</Card.Text>}
        <Button variant="primary" onClick={toggleDescription}>
          {showDescription ? 'Hide Details' : 'View Details'}
        </Button>
        <Button variant="primary" className="ms-2">Claim</Button>
      </Card.Body>
    </Card>
  );
}

export default GiftAwayEntry;
