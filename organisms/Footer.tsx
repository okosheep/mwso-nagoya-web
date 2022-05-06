import styled from 'styled-components';

export default function Footer() {
  return (
    <Container>
      <Snses>
        <a href="https://mwso-nagoya.connpass.com/" target="_blank">
          <img src={'/connpass_logo_3.png'} alt="connpass" />
        </a>
      </Snses>
      <Copyright>
        &copy; 2022 mwso-nagoya
      </Copyright>
    </Container>
  )
}

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #ddd8d4;
  padding: 16px;
`

const Snses = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  width: 100%;
`

const Copyright = styled.div`
  text-align: center;
  padding: 16px;
  width: 100%;
`
