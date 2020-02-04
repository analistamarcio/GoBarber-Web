import React from 'react';
import PropTypes from 'prop-types';

import Header from '~/components/Header';

import { Wrapper } from './styles';

export default function DefultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

DefultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
