import React from 'react';
import App, { Container } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { theme } from '../theme/theme';

import '../styles/globals.css';


export default class WrappedApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    );
  }
}