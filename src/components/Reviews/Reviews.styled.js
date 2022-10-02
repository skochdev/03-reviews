import styled from 'styled-components/macro';

export const Article = styled.article`
  text-align: center;

  .name {
    margin-bottom: ${(p) => p.theme.space[2]}px;
    font-weight: ${(p) => p.theme.fontWeights.bold};
    font-size: ${(p) => p.theme.fontSizes.l};
  }

  .job {
    color: ${(p) => p.theme.colors.accent};
    font-weight: ${(p) => p.theme.fontWeights.regular};
  }

  .reviewText {
    min-height: ${(p) => p.theme.space[7]}px;
    margin-top: ${(p) => p.theme.space[4]}px;
    color: ${(p) => p.theme.colors.text};
  }
`;

export const Button = styled.button`
  & + & {
    margin-left: 10px;
  }

  :hover,
  :focus {
    color: ${(p) => p.theme.colors.accent};
  }

  width: 60px;
  height: 40px;
  border: none;
  background-color: ${(p) => p.theme.colors.white};
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 auto;
  margin-bottom: 1.5rem;
`;

export const Image = styled.img`
  width: 100%;
  display: block;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  position: relative;
`;

export const Card = styled.div`
  border-radius: ${(p) => p.theme.radii.normal};
  background-color: ${(p) => p.theme.colors.white};
  box-shadow: 10px 10px 5px -4px rgba(143, 143, 143, 0.45);
`;
