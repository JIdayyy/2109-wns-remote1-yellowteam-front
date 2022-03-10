/* eslint-disable react/jsx-props-no-spreading */
import { Box } from '@chakra-ui/react'
import CreateBug from 'src/components/Forms/CreateBug'
import BugList from 'src/components/List/BugList'

const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <Box
      width="100%"
      position="relative"
      height="100vh"
      backgroundColor="#E3E6EA"
    >
      {children}
    </Box>
  )
}

const NavBar = () => {
  return (
    <Box width="100%" height="10%" backgroundColor="white">
      test
    </Box>
  )
}

const Header = () => {
  return (
    <Box width="100%" backgroundColor="black" height="10%">
      Dc Bug report
    </Box>
  )
}

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Header />
      <NavBar />
      <Box width="100%" height="80%" display="flex" flexDirection="row">
        <BugList />
        <Box width="70%" p={10} height="full">
          <CreateBug />
        </Box>
      </Box>
    </Layout>
  )
}
