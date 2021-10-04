import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const Wrapper = styled.section`
  width: 100%;

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 10rem 1fr 1fr;
    gap: 2rem 2rem;
    grid-auto-flow: row;
    grid-template-areas:
      'payment fees inputs'
      'text text inputs'
      'text text inputs';

    @media screen and (max-width: 900px) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 10rem 1fr 1fr;

      grid-template-areas:
        'payment fees '
        'text text'
        'inputs inputs';
    }
  }

  .payment,
  .fees {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    padding: 0.5rem;

    h4 {
      font-size: clamp(1.6rem, 2.5rem, 3vw);
    }
  }

  .payment {
    grid-area: payment;
    position: relative;
    overflow-y: hidden;
    font-size: 2.2rem;
  }

  .fees {
    grid-area: fees;
    position: relative;
    overflow-y: hidden;
    font-size: 2.2rem;
  }

  .payment:hover,
  .fees:hover {
    color: #fff;

    &:after {
      transform: translateY(0);
    }
  }

  .payment:after,
  .fees:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--dark);
    z-index: -1;
    transform: translateY(-100%);
    border-radius: 0.1rem;
    transition: all 0.3s ease;
  }

  .inputs {
    grid-area: inputs;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px,
      rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;

    h3 {
      /* text-align: center; */
      margin: 2rem auto;
      font-size: 2.3rem;
    }

    h2 {
      text-align: center;
      padding: 3rem;
      background-color: var(--dark);
      color: #fff;
      font-size: 2rem;
    }

    .form {
      width: 90%;
      margin: 1rem auto;

      h3 {
        font-weight: 300;
        font-size: 1.6rem;
      }

      .form-group {
        display: flex;
        flex-direction: column;
        margin: 3rem auto;

        label {
          font-size: 1.6rem;
          font-weight: 300;
          margin: 2rem 0;
        }

        input[type='range'] {
          -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
          width: 100%; /* Specific width is required for Firefox. */
          background: transparent; /* Otherwise white in Chrome */
        }

        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
        }

        input[type='range']:focus {
          outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
        }

        input[type='range']::-ms-track {
          width: 100%;
          cursor: pointer;

          /* Hides the slider so custom styles can be added */
          background: transparent;
          border-color: transparent;
          color: transparent;
        }

        /* Special styling for WebKit/Blink */
        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          border: 1px solid var(--dark);
          height: 36px;
          width: 16px;
          border-radius: 3px;
          background: var(--light-blue);
          cursor: pointer;
          margin-top: -14px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
          box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; /* Add cool effects to your sliders! */
        }

        /* All the same stuff for Firefox */
        input[type='range']::-moz-range-thumb {
          box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
          border: 1px solid var(--dark);
          height: 36px;
          width: 16px;
          border-radius: 3px;
          background: var(--light-blue);
          cursor: pointer;
        }

        /* All the same stuff for IE */
        input[type='range']::-ms-thumb {
          box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
          border: 1px solid var(--dark);
          height: 36px;
          width: 16px;
          border-radius: 3px;
          background: var(--light-blue);
          cursor: pointer;
        }

        input[type='range']::-webkit-slider-runnable-track {
          width: 100%;
          height: 8.4px;
          cursor: pointer;
          box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
          background: #3071a9;
          border-radius: 1.3px;
          border: 0.2px solid var(--dark);
        }

        input[type='range']:focus::-webkit-slider-runnable-track {
          background: #367ebd;
        }

        input[type='range']::-moz-range-track {
          width: 100%;
          height: 8.4px;
          cursor: pointer;
          box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
          background: #3071a9;
          border-radius: 1.3px;
          border: 0.2px solid #010101;
        }

        input[type='range']::-ms-track {
          width: 100%;
          height: 8.4px;
          cursor: pointer;
          background: transparent;
          border-color: transparent;
          border-width: 16px 0;
          color: transparent;
        }
        input[type='range']::-ms-fill-lower {
          background: #2a6495;
          border: 0.2px solid #010101;
          border-radius: 2.6px;
          box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
        }
        input[type='range']:focus::-ms-fill-lower {
          background: #3071a9;
        }
        input[type='range']::-ms-fill-upper {
          background: #3071a9;
          border: 0.2px solid #010101;
          border-radius: 2.6px;
          box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
        }
        input[type='range']:focus::-ms-fill-upper {
          background: #367ebd;
        }
      }
    }
  }

  .text {
    grid-area: text;

    h4 {
      font-size: 1.6rem;
      margin-bottom: 1.5rem;
      font-weight: 300;
    }

    h2 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.6rem;
      font-weight: 300;
      margin-bottom: 1.5rem;
    }

    .sub-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-top: 4rem;
      gap: 4rem;
      height: 10rem;
      place-items: center;

      div {
        padding: 0.5rem;
        margin: 0;
        width: 80%;
        height: 8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--dark);
        border-radius: 0.2rem;

        h4 {
          margin: 0;
          font-weight: 700;
          font-size: clamp(1.6rem, 2.5rem, 3vw);
          color: #fff;
        }
      }
    }
  }
`;

const LoanSection = () => {
  const [loanAmount, setLoanAmount] = useState(1000);
  const [months, setMonths] = useState(1);

  const interestRate = 0.05;
  const initiationFee = 265;
  const serviceFee = 40;

  let repayment = loanAmount * (1 + interestRate) + initiationFee + serviceFee;

  let monthlyRepayment = repayment / months;

  return (
    <Wrapper>
      <div className="container">
        <div className="payment">
          <h4 className="box-title">Quick Payment Process</h4>
        </div>
        <div className="fees">
          <h4 className="box-title">No Prepayment Fees</h4>
        </div>
        <form className="inputs">
          <h2 className="form-title">How Much Do You Need?</h2>
          <div className="form">
            <div className="form-group">
              <label>How Much? - R{loanAmount}</label>
              <input
                type="range"
                min={0}
                max={3000}
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>How Long? - {months} months</label>
              <input
                type="range"
                min={1}
                max={3}
                value={months}
                onChange={(e) => setMonths(e.target.value)}
              />
            </div>

            <h3> Initiation Fee R{initiationFee}</h3>
            <h3>Service Fee R{serviceFee}</h3>
            <h3>Monthly Repayment R{monthlyRepayment.toFixed(2)}</h3>
          </div>
        </form>
        <div className="text">
          <h4>Company Introductions</h4>
          <h2>
            Our offerings aim to give high quality service and convenience.
          </h2>
          <p>
            Our team believes that access to financial services facilitates the
            alleviation of poverty and supports the development of a better
            economy. Financial tools and training empower entrepreneurs to start
            and sustain businesses, provide services to their families, and
            transform communities.
          </p>
          <div className="sub-grid">
            <div>
              <h4>Micro Finance</h4>
            </div>
            <div>
              <h4>Purchase Order Finance</h4>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default LoanSection;
