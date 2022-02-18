
import App from '../components/App'
import { expect } from 'chai';
import '@testing-library/jest-dom'
import React from 'react'; // so that we can use JSX syntax
import {
  render,
  cleanup,
} from '@testing-library/react'; // testing helpers
import userEvent from '@testing-library/user-event' // testing helpers for imitating user events

afterEach(cleanup);

const name = "newForTest"

describe('Search new Contact', () => {

  it('Search for contact', async () => {
    const {  getByPlaceholderText, getByDisplayValue } = render(<App />);
    const search_text = getByPlaceholderText("Search Contacts")
    userEvent.type(search_text, "newForTest");
    const search_result= getByDisplayValue("newForTest")
    expect(search_result).exist
  });

});




