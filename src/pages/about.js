import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout'
import Head from '../components/head'

const AboutPage = () => {
  return (
    <Layout>
    <Head title="About" />
      <h1>About</h1>
      <p>I am a junior full-stack developer learing how to use Gatsby.</p>
      <Link to="/contact">Want to work with me?</Link>
    </Layout>
  );
};

export default AboutPage;
