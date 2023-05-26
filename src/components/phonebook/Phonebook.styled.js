import { colors } from 'settings/variables';
import styled, { css, keyframes } from 'styled-components';

const wiggleAnimation = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  25% {
    transform: rotateZ(-5deg);
  }
  75% {
    transform: rotateZ(5deg);
  }
  100% {
    transform: rotateZ(0deg);
  }
`;

export const ContainerSettings = styled.div`
  top: 80px;
  ${css`
    @media screen and (min-width: 767px) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  `}
`;
export const Title = styled.h1`
  display: none;
  ${css`
    @media screen and (min-width: 767px) {
      display: block;
      writing-mode: vertical-lr; /* Вертикальное направление слева направо */
      text-orientation: upright; /* Поворот текста в вертикальном направлении */
      color: ${colors.success};
      animation: ${wiggleAnimation} 1s ease -in -out 5;
    }
  `}
`;
