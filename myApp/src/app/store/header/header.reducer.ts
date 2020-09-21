import { createReducer, on } from '@ngrx/store';
import { open, close } from './header.actions';
 
export const openState = false;
 
const _headerOpenStateReducer = createReducer(
    openState,
  on(open, (state) => true),
  on(close, (state) => false)
);
 
export function headerOpenStateReducer(state, action) {
  return _headerOpenStateReducer(state, action);
}