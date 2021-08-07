import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { AiOutlineCheck, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const Wrapper = styled.section`
  width: 100%;
  margin: 4rem 0;
  min-height: 80vh;
  background-image: url('/images/dark-bg.jpeg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  padding: 2rem 0;

  h3,
  h2 {
    text-align: left;
    color: #fff;
    max-width: 25ch;
  }

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    height: 100%;

    @media screen and (max-width: 900px) {
      grid-template-columns: 1fr;
    }
  }

  .box1,
  .box2 {
    height: 100%;
    width: 100%;
  }

  .box2 {
    padding: 2rem;
    background-color: var(--blue);
    border-radius: 0.5rem;

    .accordion {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .accordion-item {
        width: 90%;

        h3 {
          width: 100%;
          max-width: 100%;
          margin-top: 3rem;
          font-size: 1.8rem;
        }

        p {
          font-size: 1.4rem;
          color: lightgrey;
        }
      }
    }

    @media screen and (max-width: 900px) {
      transform: translateY(0);
      min-height: 100vh;
    }
  }

  .iconList {
    width: 100%;
    margin-top: 3rem;

    ul {
      width: 100%;

      li {
        display: flex;
        align-items: center;
        color: #fff;
        margin: 1rem 0;
        span {
          font-size: 2rem;
          margin-right: 2rem;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          border: 1px solid var(--blue);
          display: grid;
          place-items: center;
        }

        p {
          font-size: 1.7rem;
          width: 80%;
        }
      }
    }
  }

  .imgCard {
    margin-top: 2rem;
    color: #fff;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    width: 100%;

    @media screen and (max-width: 900px) {
      grid-template-columns: 1fr;
    }
  }
`;

const HowItWorks = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="box1">
          <h2 className="section-heading">How The Application Process Works</h2>
          <Image src="/images/person.jpeg" width={640} height={426} />
          <div className="imgCard">
            <div className="text">
              <p>
                We offer cost effective rates, transparency and excellent
                customer care throughout the borrowing process. Our offerings
                not from high interest seeking lenders and we have cut out any
                middlemen. Our processes seek to give you seamless access to the
                finances that you from the comfort of your home or office.
              </p>
            </div>
          </div>
          <div className="iconList">
            <ul>
              <li>
                <span>
                  <AiOutlineCheck />
                </span>
                <p>Personal Loans</p>
              </li>

              <li>
                <span>
                  <AiOutlineCheck />
                </span>
                <p>Online Applications</p>
              </li>

              <li>
                <span>
                  <AiOutlineCheck />
                </span>
                <p>Loan Applications</p>
              </li>

              <li>
                <span>
                  <AiOutlineCheck />
                </span>
                <p>Purchase Order Finance</p>
              </li>

              <li>
                <span>
                  <AiOutlineCheck />
                </span>
                <p>Micro Lending</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="box2">
          <div className="accordion">
            <div className="accordion-item">
              <h3>Calculate Your Loan Amount & Term</h3>{' '}
              <div className="accordion-description">
                <p>
                  Use the slide calculator to select the amount of money you
                  would like to loan and the number of days until your next
                  pay-day. Satisfied with your request? Press the Apply Now for
                  an online loan button. (Should you wish to change the
                  information on your request, don't stress, you can update this
                  information at any stage during the application process.)
                </p>
              </div>
            </div>
            <div className="accordion-item">
              <h3>Fill in the online application form</h3>{' '}
              <div className="accordion-description">
                <p>
                  Enter the required details into the application form provided.
                  Be honest now, otherwise you'll just slow the process. You
                  would only be lying to yourself which is a futile business,
                  unless of course you are planning a surprise party for
                  yourself.
                </p>
                <p>
                  We will guide you through the whole process, so it should be
                  quick and easy. We will keep your information private and you
                  only need to complete this step once.{' '}
                </p>
              </div>
            </div>
            <div className="accordion-item">
              <h3>
                Mail or Whatsapp us three months bank statements and a copy of
                your ID document.
              </h3>
              <div className="accordion-description">
                <p>
                  Mail your latest 3 months bank statements and a clear copy of
                  your ID document to accounts@sidrofinance.co.za or Whatsapp to
                </p>
              </div>
            </div>
            <div className="accordion-item">
              <h3>We perform a quick credit check.</h3>
              <div className="accordion-description">
                <p>
                  Our advanced software then analyses your application and
                  performs a quick credit check based on the information you
                  have entered. This process is seamless and quick.
                </p>
              </div>
            </div>
            <div className="accordion-item">
              <h3>We notify you via sms and email if the loan is approved.</h3>
              <div className="accordion-description">
                <p>
                  We occasionally receive a delayed response from the credit
                  bureaus, which can cause delays, but we are always working to
                  enhance the decision-making process.
                </p>
              </div>
            </div>
            <div className="accordion-item">
              <h3>
                Accept the Quote and sign the contract and mail or fax it to us.
              </h3>
              <div className="accordion-description">
                <p>
                  We will send to you a quotation and contract for servicing the
                  loan which will give you full details of the loan and
                  associated charges. Accept all of the terms and conditions and
                  agree to the declarations online, then mail or fax the
                  completed contract back to us if you are satisfied with the
                  agreement, which we are confident you will be.
                </p>
                <p>
                  Mail the contract to: accounts@sidrofinance.co.za or Whatsapp
                  to{' '}
                </p>
                <p>
                  If you need some time to consider it further, each quote is
                  valid for 5 days from its issue date and you can view your
                  loan application in the My account section for further
                  reference.
                </p>
              </div>
            </div>
            <div className="accordion-item">
              <h3>We transfer the Money directly into your bank account.</h3>
              <div className="accordion-description">
                <p>
                  This is the best step. Money, transferred directly into your
                  account.
                </p>
              </div>
            </div>
            <div className="accordion-item">
              <h3>Non Repayment</h3>
              <div className="accordion-description">
                <p>
                  We charge a monthly R50 service fee and a 3% interest charge
                  for any non-repayments. If you refrain from making payments
                  for two months, your account will be sent to an external debt
                  collection company. This could affect your credit score and
                  may hinder you from receiving credit or other financial help
                  from external providers in the future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HowItWorks;
