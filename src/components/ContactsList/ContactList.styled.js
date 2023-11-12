import styled from 'styled-components';

export const List = styled.ul`
  padding: 0;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${p => p.theme.spasing(2)};

  & + & {
    border-top: 1px solid ${p => p.theme.colors.lightGray};

  }
`;
