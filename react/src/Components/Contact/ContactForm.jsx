import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9angy2k', 'template_7ik1gg3', form.current, {
        publicKey: 'D_fPr4f-JC0qd3I8W',
      })
      .then(
        () => {
          setName('');
          setEmail('');
          setMessage('');
          setSuccess('Message Sent!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className='text-green-200'>
      <p>{success}</p>
      <form className='flex flex-col gap-4' ref={form} onSubmit={sendEmail}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name='from_name'
          placeholder='Your Name'
          required
          className='h-12 text-green-100 rounded-lg bg-[#645550] px-2'
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name='from_email'
          placeholder='Your Email'
          required
          className='h-12 text-green-100 rounded-lg bg-[#645550] px-2'
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          name='message'
          placeholder='Message'
          rows='9'
          required
          className='rounded-lg text-green-100 bg-[#645550] p-2'
        ></textarea>
        <button
          type='submit'
          className='w-full rounded-lg border border-cyan-400 text-green-100 h-12 font-bold text-xl hover:bg-cyan-500 bg-cyan-300 transition-all duration-500'
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
