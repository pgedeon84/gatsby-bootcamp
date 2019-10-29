import React from 'react';
import Layout from '../components/Layout';
import { Link, graphql, useStaticQuery } from 'gatsby';
import blogStyles from './blogs.module.scss'
import Head from '../components/head'

// Fetch Blog data from graphQL using Gatsby source filesystems
const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (
        sort: {
          fields: publishedDate,
          order: DESC
        }
      ) {
        edges {
          node {
            title
            slug
            publishedDate(formatString:"MMMM Do, YYYY")
          }
        }
      }
    }
    `)

  //  This returns a List of Blogs and displays them on the Blog page.
    return (
      <Layout>
        <Head title="Blog"/>
        <h1>Blog</h1>
        <ol className={ blogStyles.posts }>
          {data.allContentfulBlogPost.edges.map((edge) => {
            return (
              <li className={ blogStyles.post  } key={edge.node.id}>
                <Link to={`blogs/${edge.node.slug}`}>
                  <h2>{edge.node.title}</h2>
                  <p>{edge.node.publishedDate}</p>
                </Link>
              </li>
            )}
          )}
        </ol>
      </Layout>
    );
};

export default BlogPage;
