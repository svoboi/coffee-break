import { useState } from "react";
import { Row, Col, InputGroup, Form } from "react-bootstrap";
import LocationList from "../locations/LocationList";
import OfferList from "../offers/OfferList";
import { translations } from "../../i18n/czech";

function Home() {
  const t = translations.home;
  const [searchQuery, setSearchQuery] = useState("");

  // Sample data for recent reviews
  const recentReviews = [
    {
      id: 1,
      author: "Barbora",
      rating: 5,
      comment: "Výborná káva a milý personál!",
    },
    {
      id: 2,
      author: "Petr",
      rating: 4,
      comment: "Skvělá atmosféra, ceny trochu vyšší.",
    },
    {
      id: 3,
      author: "Marie",
      rating: 5,
      comment: "Nejlepší cappuccino v městě!",
    },
  ];

  return (
    <>
      {/* Search Bar */}
      <Row className="mb-5">
        <Col>
          <InputGroup className="search-bar">
            <InputGroup.Text className="bg-white border-dark">
              <span className="search-icon">🔍</span>
            </InputGroup.Text>
            <Form.Control
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border-dark"
            />
          </InputGroup>
        </Col>
      </Row>

      <LocationList title={t.recommendedCafes} />
      <OfferList />

      {/* Positive Reviews Section */}
      <Row className="mb-5 reviews-section">
        <Col>
          <h2 className="section-title">{t.positiveReviews}</h2>
          <Row className="g-3 justify-content-around">
            {recentReviews.map((review) => (
              <Col md={3} key={review.id}>
                <div className="review-card">
                  <div className="review-rating">
                    {"⭐".repeat(review.rating)}
                  </div>
                  <p className="review-author">
                    <strong>{review.author}</strong>
                  </p>
                  <p className="review-comment">{review.comment}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Home;
