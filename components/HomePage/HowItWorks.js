import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

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
  }

  .box1,
  .box2 {
    height: 100%;
    width: 100%;
  }

  .box2 {
    transform: translateY(-10%);

    ul {
      border-radius: 0.5rem;
      width: 80%;
      height: 100%;
      min-height: 80vh;
      margin: 0 auto;
      background-color: var(--blue);
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      li {
        height: 20%;
        width: 70%;
        margin: 0 auto;
        display: flex;
        align-items: center;

        background-color: #fff;
        border-radius: 0.5rem;
        transition: 0.2s;

        &:hover {
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        }

        span {
          margin-right: 3rem;
          margin-left: 2rem;
          font-size: 2rem;
          background-color: var(--blue);
          /* width: 90px; */
          /* height: 50px; */
          aspect-ratio: 1/1;
          width: 20%;
          display: grid;
          place-items: center;

          border-radius: 50%;
        }
      }
    }
  }

  .imgCard {
    margin-top: 2rem;
    color: #fff;
    display: grid;
    grid-template-columns: 2fr 3fr;
    gap: 1rem;
    width: 100%;
  }
`;

const HowItWorks = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="box1">
          <h2 className="section-heading">How The Application Process Works</h2>
          <div className="imgCard">
            <Image src="/images/person.jpeg" width={640} height={426} />
            <div className="text">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae,
                alias iure. Possimus facere sit provident delectus magnam
                soluta, distinctio animi, eveniet quasi, accusamus et deleniti
                dicta rem. Itaque necessitatibus, optio nesciunt magni fugiat
                odio voluptatem!
              </p>
            </div>
          </div>
        </div>
        <div className="box2">
          <ul>
            <li>
              <span>1</span> Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Ipsum quia, dolore deserunt fugiat quam officia.
            </li>
            <li>
              <span>2</span> Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Ipsum quia, dolore deserunt fugiat quam officia.
            </li>
            <li>
              <span>3</span> Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Ipsum quia, dolore deserunt fugiat quam officia.
            </li>
            <li>
              <span>4</span> Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Ipsum quia, dolore deserunt fugiat quam officia.
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default HowItWorks;
