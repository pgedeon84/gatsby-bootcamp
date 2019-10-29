import React from 'react';
import Layout from '../components/Layout'
import Head from '../components/head'

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>The best way to reach us is by email: <a href="mailto: pgedeon84@gmail.com">pgedeon84@gmail.com</a></p>
    </Layout>
  );
};

export default ContactPage;
