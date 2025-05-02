import { useReducer } from 'react';

export function useToggle(
  initialState: boolean = false
): [boolean, () => void] {
  return useReducer((state) => !state, initialState);
}
