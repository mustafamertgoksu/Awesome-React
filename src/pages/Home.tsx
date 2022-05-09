import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from '../styles/Container.styles';
import { useSpring, animated } from 'react-spring';

const Home: React.FC = () => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    delay: 200,
  });
  return (
    <Container className="home">
      <animated.div style={props}>
        <h1>This is Home Page</h1>
      </animated.div>
      <Link className="link" to="/about">
        Go to About Page
      </Link>
    </Container>
  );
};

export default Home;
