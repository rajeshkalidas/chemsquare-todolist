import React, { memo } from "react";
import TodoList from './TodoList';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import enzyme from 'enzyme';

enzyme.configure({ adapter: new Adapter() });

describe('TodoList', () => {
  test('it renders list of Todo items', () => {
      const array = [{
          id: "1",
          todoName: "sample"
      }];
    const wrapper = shallow(<TodoList items={array} />);
  });
});