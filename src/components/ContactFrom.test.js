import React from 'react';
import {render, screen} from '@testing-library/react';
import ContactForm from './ContactForm';
import userEvent from '@testing-library/user-event'

test('render contact form', () => {
    render(<ContactForm />)
})




test('form fills out and new contact is created and displayed', () => {
    //arrange
    render(<ContactForm />)
    const firstNameInput = screen.getByPlaceholderText(/edd/i);
    const lastNameInput = screen.getByPlaceholderText(/burke/i);
    const emailInput = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i);
    const messageInput = screen.getByPlaceholderText(/type here/i);
    
    const submitBtn = screen.getByRole('button', {name: /submit/i})

    //act

    userEvent.type(firstNameInput, "Kob");
    userEvent.type(lastNameInput, "Matagi");
    userEvent.type(emailInput, "jkmatagi@hotmail.com");
    userEvent.type(messageInput, "howdy yall");
    userEvent.click(submitBtn)


    //assert

    const newContact = screen.findByText(/kob/i)
    
    newContact.then((Element) => {
        expect(Element).toBeVisible();
        expect(Element).toBeInTheDocument();
    })
})