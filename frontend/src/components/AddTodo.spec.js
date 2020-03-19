import React, { memo } from "react";
import AddTodo from './AddTodo';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import enzyme from 'enzyme';

enzyme.configure({ adapter: new Adapter() });

describe('AddTodo', () => {
  test('it renders Addtodo component with button and input', () => {
    const wrapper = shallow(<AddTodo />);
    expect(wrapper).toMatchSnapshot();
  });
});