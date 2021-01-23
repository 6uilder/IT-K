import React from 'react';
import profileReducer, { addPostActionCreator } from './profile_reducer';

//вместо test в строке ниже у Димыча был it

test('length of posts shuld be increment', () => {
  //1. test data
  let action = addPostActionCreator('it-kamasutra');
  let state = {
    posts: [
      { id: 1, message: 'Hi', likesCount: 3 },
      { id: 2, message: 'Nihao', likesCount: 13 },
      { id: 3, message: 'third', likesCount: 0 },
      { id: 4, message: 'bu', likesCount: 3 }
    ]
  };
  //2. action
  let newState = profileReducer(state, action);
  //3. expectation
  expect(newState.posts.length).toBe(5);
});
