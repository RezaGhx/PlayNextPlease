import { BUY_CAKE, BUY_CAKE_BY_COUNT } from './types';

export function buyCake() {
  return {
    type: BUY_CAKE,
  };
}

export function buyCakeByCount(count = 1) {
  return {
    type: BUY_CAKE_BY_COUNT,
    payload: count,
  };
}