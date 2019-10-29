import React from "react"
import { Link } from 'gatsby'
import { useSpring, animated } from 'react-spring'
import Layout from '../components/Layout'
import Head from '../components/head'

const IndexPage = () => {
  const fade = useSpring({
    from: { opacity: 0,
            // marginLeft: -500
      },
    to: { opacity: 1,

     },
    config: { duration: 1000 }
  })
  return (
    <Layout>
      <Head title="Home"/>
      <h1>Hello.</h1>
      <h2>I'm Patrice, a full-stack developer living in beautiful Florida.</h2>
      <animated.div style={fade}>
        <p>Need a developer? <Link to="/contact">Contact Me</Link></p>
      </animated.div>
    </Layout>
  );
};

export default IndexPage;
