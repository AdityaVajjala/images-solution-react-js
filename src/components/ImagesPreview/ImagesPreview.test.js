import React from 'react';
import { shallow } from 'enzyme';
import ImagesPreview from './ImagesPreview';

describe('<ImagesPreview />', () => {
  test('renders', () => {
    const wrapper = shallow(<ImagesPreview />);
    expect(wrapper).toMatchSnapshot();
  });
});
