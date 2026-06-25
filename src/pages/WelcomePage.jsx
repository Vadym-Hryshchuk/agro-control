import styled from "styled-components";
import AppWrapper from "../components/Wrapper/AppWrapper";

const Hero = styled.section`
  padding: 60px 0 80px;
  text-align: center;

  @media screen and (min-width: 768px) {
    padding: 100px 0 120px;
  }
`;

const Tag = styled.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-accent);
  background-color: var(--color-accent-muted);
  border: 1px solid var(--color-border-hover);
  padding: 4px 14px;
  border-radius: 20px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-family: 'Manrope', sans-serif;
  font-size: 32px;
  font-weight: 800;
  color: var(--color-text);
  line-height: 1.2;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: var(--color-text-secondary);
  max-width: 480px;
  margin: 0 auto;
  line-height: 1.7;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export default function WelcomePage() {
  return (
    <AppWrapper>
      <Hero>
        <Tag>Агро Контроль</Tag>
        <Title>На варті врожаю</Title>
        <Subtitle>
          Система обліку засобів захисту рослин. Контролюйте залишки, реєструйте операції та керуйте запасами ефективно.
        </Subtitle>
      </Hero>
    </AppWrapper>
  );
}