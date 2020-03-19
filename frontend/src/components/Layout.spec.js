import React, { memo } from "react";
import Layout from './Layout';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import enzyme from 'enzyme';

enzyme.configure({ adapter: new Adapter() });

describe('Layout', () => {
  test('it renders layout with main conatiner', () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper).toMatchSnapshot();
  });
});