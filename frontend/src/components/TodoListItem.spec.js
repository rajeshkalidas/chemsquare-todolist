import React, { memo } from "react";
import TodoListItem from './TodoListItem';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import enzyme from 'enzyme';

enzyme.configure({ adapter: new Adapter() });

describe('TodoListItem', () => {
  test('it renders todo list item', () => {
    const wrapper = shallow(<TodoListItem />);
    expect(wrapper).toMatchSnapshot();
  });
});