import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { AiOutlineCheck, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';

const data = [
  {
    question: 'For personal cash loans, calculate your loan amount ',
    answer:
      'Use the slide calculator to select your loan amount and the number of days until you receive your next salary. Click, Apply Now to complete your application. You can update your information at any stage of the application process.',
  },
  {
    question: 'Complete the online application form',
    answer:
      'Please provide accurate information to avoid delays in your application process. This step will only be completed once, and any information provided will be kept private. ',
  },
  {
    question:
      'Send us your three-month bank statements and a copy of your identification document.',
    answer:
      'Email documents to: loans@sidrofinance.co.za. We are also available on WhatsApp: +27XXXXXX.',
  },
  {
    question: 'We perform a credit check.',
    answer:
      'Our advanced software analyses your application and performs a credit check based on the information you have entered. ',
  },
  {
    question: 'Check your SMS or email for an update on your application ',
    answer:
      'We occasionally experience delayed responses from the credit bureaus, which can slow our processes slightly. We are always working to enhance the decision-making process.',
  },
  {
    question: 'Accept the Quote, sign the contract and email or fax it to us.',
    answer:
      'We will send you a quotation and contract for servicing the loan, providing you with full details and associated charges. If you are satisfied with the agreement, accept all of the terms and conditions and agree to the declarations online, then email or fax the completed contract back to: accounts@sidrofinance.co.za or Whatsapp to xxxxxx. Each quote is valid for five days, which gives you some time to consider it further and make a final decision. You can view your loan application in the My Account section for further reference. ',
  },
  {
    question: 'Receive money directly into your bank account.',
    answer:
      'Once we have received your signed contract, the money will be transferred directly into your account.',
  },
  {
    question: 'Non Payment',
    answer:
      'We charge a monthly service fee of R50 and a 3% interest charge for any non-repayments. If you refrain from making payments for two months, your account will be sent to an external debt collection company. This could affect your credit score and may hinder you from receiving credit or other financial help from external providers in the future.',
  },
];

const Accordion = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  color: #fff;

  p {
    font-size: 16px;
  }
`;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  font-size: 2rem;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-top: 1rem;

  h4 {
    max-width: 50ch;
  }

  span {
    font-size: 3rem;
    padding-left: 2rem;
  }
`;

const Dropdown = styled.div``;

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
      justify-content: space-around;

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
      min-height: 80vh;
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
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

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
          <Accordion>
            {data.map((item, index) => {
              return (
                <Fragment key={index}>
                  <Wrap onClick={() => toggle(index)} key={index}>
                    <h4>{item.question}</h4>
                    <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                  </Wrap>
                  {clicked === index ? (
                    <Dropdown>
                      <p>{item.answer}</p>
                    </Dropdown>
                  ) : null}
                </Fragment>
              );
            })}
          </Accordion>
        </div>
      </div>
    </Wrapper>
  );
};

export default HowItWorks;
