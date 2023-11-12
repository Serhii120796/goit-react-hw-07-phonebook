import styled from 'styled-components';

export const ContactData = styled.p`
  margin-right: ${p => p.theme.spasing(3)};
  font-weight: ${p => p.theme.weight.accent};
  text-transform: capitalize;
`;

export const Span = styled.span`
  display: block;
`;

export const Button = styled.button`
  height: 20px;
  font-size: 12px;
  background-color: inherit;
  border: ${p => p.theme.borders.gray};
  border-radius: ${p => p.theme.radius};

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.gray};
  }
`;
