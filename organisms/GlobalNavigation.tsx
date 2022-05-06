import Link from "next/link"
import styled from "styled-components"

export default function GlobalNavigation() {
  return (
    <Nav>
      <Ul>
        <li>
          <Link href="/" passHref>
            <Anchor>お知らせ</Anchor>
          </Link>
        </li>
        <li>
          <Link href="/about" passHref>
            <Anchor>mwso-nagoyaとは</Anchor>
          </Link>
        </li>
      </Ul>
    </Nav>
  )
}

const Nav = styled.nav`
  padding: 16px;
  background: #EEE9E5;
`

const Ul = styled.ul`
  display: flex;
  align-items: flex-start;
  list-style: none;
  padding: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;

  &>li {
    &:not(:first-child) {
      margin-left: 16px;
    }
  }
`

const Anchor = styled.a`
  &:hover {
    text-decoration: underline;
    color: #00e;
    cursor: pointer;
  }
`
