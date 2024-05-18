import basic from './basic';
import typescript from './typescript';
import type { Linter } from 'eslint';

export default function igorjacauna(overrides: Linter.FlatConfig[] = []): Linter.FlatConfig[] {
  return [
    ...basic(),
    ...typescript(),
    ...overrides,
  ];
}