import type { NextPage } from "next"
import Basic from "../templates/Basic"
import styled from "styled-components"

const TitleSection = () => (
  <TitleContainer>
    <TitleName>mwso-nagoya</TitleName>
  </TitleContainer>
)

const InformationSection = () => (
  <InformationContainer>
    <InformationName>お知らせ</InformationName>
    <InformationLine>
      <div>2022/04/15</div>
      <div>mwso-nagoyaの公式サイトができました。</div>
    </InformationLine>
  </InformationContainer>
)

const Home: NextPage = () => {
  return (
    <Basic>
      <TitleSection />
      <InformationSection />
    </Basic>
  )
}

const TitleContainer = styled.section`
  background-color: #fff;
  padding: 320px 0;
`

const TitleName = styled.h1`
  font-size: 128px;
  width: 100%;
  text-align: center;
  margin: 0;
`

const InformationContainer = styled.section`
  background-color: #eee9e5;
  display: flex;
  flex-direction: column;
  padding: 16px;
`

const InformationName = styled.section`
  padding: 16px;
  font-size: 24px;
`

const InformationLine = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;

  &>div:not(:first-child) {
    margin-left: 16px;
  }
`

export default Home
