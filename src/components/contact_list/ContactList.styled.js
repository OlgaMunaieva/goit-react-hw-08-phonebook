import styled from 'styled-components';

export const ContainerList = styled.ul`
  /* position: relative; */
  top: 460px;
  /* max-width: 800px; */
  /* width: 80%; */
  /* left: 6%; */
  /* right: 6%; */
  padding: 0;
  min-width: 300px;
  display: flex;
  gap: 4px;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  overflow: auto;
  max-height: 400px; /* Максимальная высота блока списка */
  padding-right: 10px; /* Добавляем небольшой отступ справа для полосы прокрутки */
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
