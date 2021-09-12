import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { IoIosArrowRoundForward } from 'react-icons/io';

const Wrapper = styled.section`
  width: 100%;
  padding: 10rem 0;

  .container {
    .service-cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      margin-top: 3rem;
      gap: 2rem 4rem;

      @media screen and (max-width: 900px) {
        grid-template-columns: 1fr;
      }

      .card {
        /* max-width: 350px; */
        min-width: 300px;

        overflow: hidden;
        border-radius: 0.7rem;
        box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
          rgba(17, 17, 26, 0.05) 0px 8px 32px;

        .imgBox {
          width: 100%;
          overflow: hidden;
          position: relative;

          div {
            width: 100%;

            img {
              aspect-ratio: 1.5/1;
            }
          }
        }

        .textBox {
          padding: 2rem 2rem 1rem 3rem;

          h3 {
            font-size: 1.8rem;
            margin-bottom: 1rem;
          }

          p {
            font-size: 1.4rem;
            margin: 10px 0;
          }

          .card-icon {
            margin: 2rem 0;
            padding: 10px;
            font-size: 3rem;
            width: 5rem;
            height: 5rem;
            background-color: var(--dark);
            color: #fff;
            border-radius: 50%;
          }
        }
      }
    }
  }
`;

const ServicesSection = () => {
  return (
    <Wrapper>
      <div className="container">
        <h3 className="section-sub-heading">What We Are Offering</h3>
        <h2 className="section-heading">Loan Services</h2>
        <div className="service-cards">
          <div className="card">
            <div className="imgBox">
              <Image src="/images/business-1.jpeg" width={1920} height={1280} />
            </div>
            <div className="textBox">
              <h3>Personal Cash Loans</h3>
              <p>
                Get access to cash loans between R1,000 and R5,000. Pay off your
                loan in fixed monthly instalments over one to three months. The
                maximum monthly interest rate is 5% for new clients and 3% for
                returning clients.
              </p>
              <IoIosArrowRoundForward className="card-icon" />
            </div>
          </div>

          <div className="card">
            <div className="imgBox">
              <Image src="/images/business-2.jpeg" width={1920} height={1280} />
              <div className="textBox">
                <h3>SMME Purchase Order Finance</h3>
                <p>
                  Do you have a contract for an order from a local municipality,
                  government department, private company or even an offshore
                  client, but you don’t have the finances to purchase supplies
                  or finance the resources to execute the order? We can help
                  you! We’ll provide you with the capital required, and then you
                  pay us back once your client pays you.
                </p>

                <h4>Qualifying Criteria</h4>
                <p>
                  A registered business that has been trading for at least one
                  year
                </p>
                <p>(Startups do not qualify).</p>
                <ol>
                  <li>CIPC Documents</li>
                  <li>All director IDs and proof of addresses</li>
                  <li>The company’s proof of address</li>
                  <li>A valid purchase order</li>
                  <li>Supplier Quotes</li>
                  <li>Minimum annual turnover of R500,000</li>
                </ol>
                <IoIosArrowRoundForward className="card-icon" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="imgBox">
              <Image src="/images/business-3.jpeg" width={1920} height={1280} />
              <div className="textBox">
                <h3>Micro Lending</h3>
                <p>
                  Our microlending facility is an alternative to the
                  conventional lending facilities that our clients will have
                  access to. We seek to assist new businesses and small firms
                  with access to finance early in their business journey at an
                  accessible and scalable interest rate.
                </p>
                <IoIosArrowRoundForward className="card-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ServicesSection;
