import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';

const Nav = styled.header`
  width: 100%;
  height: 14vh;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  .container {
    height: 100%;

    .top-nav {
      height: 35%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

      .social,
      .info {
        a {
          padding: 0 8px;
          font-size: 1.2rem;
          cursor: pointer;
          color: var(--dark-blue);

          &:hover {
            color: var(--dark);
          }
        }
      }
    }

    .main-nav {
      height: 65%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .logo {
        height: 100%;
        padding: 0.4rem 0;
      }

      .nav-items {
        display: flex;

        .nav-link {
          font-size: 1.7rem;
          padding-left: 1.2rem;
          color: var(--dark-blue);
          letter-spacing: 1px;
        }
      }
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="container">
        <div className="top-nav">
          <div className="social">
            <Link href="https://www.facebook.com">
              <a>
                <FaFacebookF />
              </a>
            </Link>
            <Link href="https://twitter.com">
              <a>
                <FaTwitter />
              </a>
            </Link>
            <Link href="https://www.linkedin.com">
              <a>
                <FaLinkedinIn />
              </a>
            </Link>
            <Link href="https://www.instagram.com">
              <a>
                <FaInstagram />
              </a>
            </Link>
          </div>
          <div className="info">
            <Link href="/login">Login</Link>
            <Link href="/privacy">Privacy</Link>
          </div>
        </div>
        <div className="main-nav">
          <Link href="/">
            <img className="logo" src="/images/logo.svg" />
          </Link>
          <nav className="nav-items">
            <li>
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/loans">
                <a className="nav-link">Loan</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="nav-link">About</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className="nav-link">Contact</a>
              </Link>
            </li>
          </nav>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
