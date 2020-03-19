import React, { memo } from "react";
import Header from './Header';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import enzyme from 'enzyme';

enzyme.configure({ adapter: new Adapter() });

describe('Header', () => {
  test('it renders header component', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});