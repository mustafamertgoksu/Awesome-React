import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from '../styles/Container.styles';
import { useSpring, animated } from 'react-spring';

const About: React.FC = () => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    delay: 200,
  });
  return (
    <Container className="about">
      <animated.div style={props}>
        <h1>This is About Page</h1>
      </animated.div>
      <Link className="link" to="/">
        Go to Home Page
      </Link>
    </Container>
  );
};

export default About;
