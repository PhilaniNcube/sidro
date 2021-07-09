import styled from 'styled-components';

const Button = styled.button`
  margin-top: 20px;
  outline: none;
  text-align: center;
  width: 130px;
  height: 40px;
  padding: 10px 25px;
  border: 2px solid var(--dark);
  font-weight: 500;
  font-size: 1.8rem;
  text-transform: uppercase;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  background: var(--dark);
  color: #fff;
  z-index: 1;
  border-radius: 2px;

  &:after {
    position: absolute;
    content: '';
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
    direction: rtl;
    z-index: -1;
    background: var(--dark-blue);

    transition: all 0.3s ease;
  }

  &:hover {
    color: #fff;
    border: 2px solid var(--dark-blue);

    &:after {
      left: auto;
      right: 0;
      width: 100%;
    }
  }
`;

export default Button;
