'use strict';

//a reducer take in 1) action 2) copy of current state

function posts(state=[], action) {
  console.log('The post will change');
  console.log(state, action);
  return state;
}

export default posts;