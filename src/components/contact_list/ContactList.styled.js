import styled from 'styled-components';

export const ContainerList = styled.ul`
  top: 460px;
  padding: 0;
  min-width: 300px;
  display: flex;
  gap: 4px;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  overflow: auto;
  max-height: 320px; /* Максимальная высота блока списка */
  padding-right: 10px; /* Отступ справа для полосы прокрутки */
  ::-webkit-scrollbar {
    width: 8px; /* Ширина полосы прокрутки */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888; /* Цвет полосы прокрутки */
    border-radius: 4px; /* Скругление углов полосы прокрутки */
  }

  ::-webkit-scrollbar-track {
    background-color: #f5f5f5; /* Цвет фона полосы прокрутки */
  }
`;

export const ContainerItem = styled.li`
  padding: 6px 0;
  min-width: 300px;
  display: flex;
  gap: 16px;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`;
