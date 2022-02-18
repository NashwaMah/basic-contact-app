
import App from '../components/App'
import { expect } from 'chai';
import '@testing-library/jest-dom'
import data_list from '../../../server/data.json'
import React from 'react'; // so that we can use JSX syntax
import {
  render,
  cleanup,
} from '@testing-library/react'; // testing helpers
import userEvent from '@testing-library/user-event' // testing helpers for imitating user events

afterEach(cleanup);

const name = "newForTest"
const email = "newfortest@hotmail.com"

describe('Add new Contact', () => {
  it('Add New contact and check Conatct List', async () => {
    const { getByText, getByTestId } = render(<App />);
    const add_new_contacts = getByText("Add Contact")
    userEvent.click(add_new_contacts)
    userEvent.type(getByTestId('name'), name);
    userEvent.type(getByTestId('email'), email);
    userEvent.click(getByTestId("submit button"))

    expect(data_list.contacts[data_list.contacts.length - 1].name).eql(name)
    expect(data_list.contacts[data_list.contacts.length - 1].email).eql(email)

  });

});




