import styled from 'styled-components';

export const PageContainer = styled.div`
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  margin-top: 50px;
`;

export const AdvantageList = styled.ul`
  padding: 0;
`;

export const AdvantageItem = styled.li`
  text-align: left;
  margin: 10px 0;
  font-size: 16px;
`;

export const Strong = styled.strong`
  color: var(--accent-color);
  font-weight: bold;
`;
