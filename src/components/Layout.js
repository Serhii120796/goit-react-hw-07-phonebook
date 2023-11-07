import styled from 'styled-components';

export const Layout = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 95%;
  padding: ${p => p.theme.spasing(5)};
  border-radius: ${p => p.theme.spasing(3)};
  background-color: ${p => p.theme.colors.white};
`;
