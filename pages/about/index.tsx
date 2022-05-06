import type { NextPage } from "next"
import Basic from "../../templates/Basic"
import styled from "styled-components"

const TitleSection = () => (
  <TitleContainer>
    <TitleName>mwso-nagoya</TitleName>
    <TitleSubName>mwso-nagoyaとは</TitleSubName>
  </TitleContainer>
)

const ArticleSection = () => (
  <ArticleContainer>
    <ArticleTitle>目的</ArticleTitle>
    <ArticleLine>
      mwso-nagoyaでは、名古屋のITエンジニアの雇用の流動性を高めることを目的に活動しています。
    </ArticleLine>
    <ArticleTitle>ミッション</ArticleTitle>
    <ArticleMission>
      名古屋のITエンジニアの価値を上げ、名古屋のIT業界を活性化する。
    </ArticleMission>
    <ArticleTitle>活動内容</ArticleTitle>
    <ArticleLine>
      connpass等で参加者を募り、勉強会のイベントを開催します。
      <br />
      その他、ミッションを達成するための様々な活動を行います。
    </ArticleLine>
  </ArticleContainer>
)

const About: NextPage = () => {
  return (
    <Basic>
      <TitleSection />
      <ArticleSection />
    </Basic>
  )
}

const TitleContainer = styled.section`
  background-color: #fff;
  padding: 16px;
`

const TitleName = styled.h1`
  font-size: 16px;
  width: 100%;
  color: #555;
  margin: 0;
`

const TitleSubName = styled.h2`
  font-size: 64px;
  width: 100%;
  margin: 0;
`

const ArticleContainer = styled.section`
  background-color: #eee9e5;
  padding: 16px;
`

const ArticleTitle = styled.h3`
  padding: 16px;
  margin: 0;
  font-size: 24px;
`

const ArticleLine = styled.article`
  margin: 0;
  padding: 16px;
`

const ArticleMission = styled(ArticleLine)`
  background-color: #fff;
`


export default About
