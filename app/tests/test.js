import React from 'react';
import renderer from 'react-test-renderer';
import LogInScreen from '../screens/LogInScreen';

it('Render Login Screen', () => {
  const login = renderer.create(<LogInScreen/>).toJSON();
  expect(login).toMatchSnapshot();
});