import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { Container } from '../assets/styles/Container.styles';

const About: React.FC = () => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    delay: 200,
  });
  return (
    <Container>
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
