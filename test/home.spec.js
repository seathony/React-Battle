import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Home from '../app/components/Home';

describe("<Home />", function() {
  it('should have a button to get started', function() {
    const wrapper = shallow(<Home />);
  });
});
