import styled from 'styled-components';

export const FilterTitle = styled.span`
  display: block;
  font-weight: ${p => p.theme.weight.accent};
  font-size: 16px;
  margin-bottom: ${p => p.theme.spasing(3)};
`;

export const StyleInput = styled.input`
  display: block;
  margin-bottom: ${p => p.theme.spasing(5)};
  width: 100%;
  border: ${p => p.theme.borders.gray};
  border-radius: ${p => p.theme.spasing(1)};
`;
