import React from 'react';
import Container from '@components/Container';
import Appearance from './Appearance';

import About from './About';

const SettingsScreen = () => {
  return (
    <Container>
      <Appearance />
      <About />
    </Container>
  );
};

export default SettingsScreen;
