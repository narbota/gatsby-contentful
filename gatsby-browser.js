import "@fontsource/dm-sans"
import "@fontsource/dm-sans/500.css"
import "@fontsource/dm-sans/700.css"
import "@fontsource/dm-mono"
import "@fontsource/dm-mono/500.css"
import React from 'react';
import { CartProvider } from './src/context/cart-provider';
import { PriceProvider } from './src/context/price-provider';
export const wrapRootElement = ({ element }) => (
  <PriceProvider>
    <CartProvider>{element}</CartProvider>
  </PriceProvider>
);
