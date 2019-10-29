import React from 'react';
// Link provides routes; graphql: localhost:8000/ ___graphql
import { Link, graphql, useStaticQuery } from 'gatsby';
import './header.module.scss';
import headerStyles from './header.module.scss'

const Header = () => {
  // Fetches data from gatsby-config.js file

  const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
   `)

  return (
    <header className={ headerStyles.header }>
      <h1>
        <Link className={ headerStyles.title }to='/'>
          { data.site.siteMetadata.title }
        </Link>
      </h1>
      <nav>
        <ul className={ headerStyles.navList }>
          <li>
            <Link className={ headerStyles.navItem } activeClassName={ headerStyles.activeNavItem } to="/">Home</Link>{" "}
          </li>
          <li>
            <Link className={ headerStyles.navItem } activeClassName={ headerStyles.activeNavItem } to="/blogs">Blog</Link>
          </li>
          <li>
            <Link className={ headerStyles.navItem } activeClassName={ headerStyles.activeNavItem } to="/about">About</Link>{" "}
          </li>
          <li>
            <Link className={ headerStyles.navItem } activeClassName={ headerStyles.activeNavItem } to="/contact">Contact</Link>{" "}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
