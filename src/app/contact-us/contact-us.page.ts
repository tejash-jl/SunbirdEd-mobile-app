import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage {

  constructor() {}

  submitContactForm(form: NgForm) {
    if (form.valid) {
      const { name, email, mobile, message } = form.value;

      // You can log or send this data to a backend API
      console.log('Contact Form Submitted:', {
        name,
        email,
        mobile,
        message
      });

      // Show a success message or reset the form
      alert('Thank you for contacting us! We will get back to you soon.');
      form.reset();
    } else {
      alert('Please fill out all required fields correctly.');
    }
  }
}
 