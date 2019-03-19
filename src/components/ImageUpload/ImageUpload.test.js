import React from 'react';
import { shallow } from 'enzyme';
import ImageUpload from './ImageUpload';

describe('<ImageUpload />', () => {
  test('renders', () => {
    const wrapper = shallow(<ImageUpload />);
    expect(wrapper).toMatchSnapshot();
  });
});
