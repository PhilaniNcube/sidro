import styled from 'styled-components';
import AboutSection from '../components/HomePage/AboutSection';
import Hero from '../components/HomePage/Hero';
import HowItWorks from '../components/HomePage/HowItWorks';
import LoanSection from '../components/HomePage/LoanSection';
import ServicesSection from '../components/HomePage/ServicesSection';

const Title = styled.h1`
  font-size: 3rem;
  color: blue;
`;

export default function Home() {
  return (
    <div>
      <Hero />
      <LoanSection />
      <ServicesSection />
      <AboutSection />
      <HowItWorks />
    </div>
  );
}
