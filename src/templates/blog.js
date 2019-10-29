// This is the structure of how each Blog Post will be built

import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '../components/Layout';
import Head from '../components/head'

/* Fetch a dynamic query using a Custom Variable for the slug on eq:, which is the value of the slug.
   Query takes an arguement which is the varibale
   markdownRemark take an arguement 'fields', which is an object containing 'slug', which is also an object
   containing the slug eq:.
*/

export const query = graphql`
  query($slug: String) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      publishedDate(formatString:"MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`
// Use dangerouslySetInnerHTML and pass { __html: html filepath } on a div as an attribute to get the HTML content
const Blog = (props) => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url} />
      }
    }
  }
  return (
      <Layout >
        <Head title={props.data.contentfulBlogPost.title}/>
        <h1>{props.data.contentfulBlogPost.title}</h1>
        <p>{props.data.contentfulBlogPost.publishedDate}</p>
        {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
      </Layout>
  );
};

export default Blog;
