// 액션 생성자 선언

import * as types from './ActionTypes';

export const increment = () => ({
  type: types.INCREMENT
}) 

export const decrement = () => ({
  type: types.DECREMENT
}) 

export const setColor = (color) => ({
  type: types.SET_COLOR,
  color
}) 