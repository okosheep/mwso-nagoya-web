import Footer from "../organisms/Footer"
import GlobalNavigation from "../organisms/GlobalNavigation"

type Props = {
  children: React.ReactNode
}

export default function Basic(props: Props) {
  return (
    <>
      <GlobalNavigation />
      {props.children}
      <Footer />
    </>
  )
}
