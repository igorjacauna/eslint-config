import basic from './basic';
import typescript from './typescript';

export default function igorjacauna(overrides: unknown[] = []) {
  return [
    ...basic(),
    ...typescript(),
    ...overrides,
  ];
}