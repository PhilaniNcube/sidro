import { Fragment } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import AboutSection from '../components/HomePage/AboutSection';
import Hero from '../components/HomePage/Hero';
import HowItWorks from '../components/HomePage/HowItWorks';
import LoanSection from '../components/HomePage/LoanSection';
import ServicesSection from '../components/HomePage/ServicesSection';
import FinanceServices from '../components/HomePage/FinanceServices';

const Title = styled.h1`
  font-size: 3rem;
  color: blue;
`;

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Sidro Finance | Home</title>
      </Head>
      <Hero />
      <LoanSection />
      <ServicesSection />
      <AboutSection />
      <HowItWorks />
      <FinanceServices />
    </Fragment>
  );
}
