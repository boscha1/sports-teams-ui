import { Container, Box } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

export default function RootLayout() {
  return (
    <Box overflowY="scroll" height="100vh">
      <Navbar />
      <Container maxWidth="7xl" bg={"gray.300"}>
        <Outlet />
      </Container>
    </Box>
  )
}
