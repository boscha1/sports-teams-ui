import { Container, Grid, GridItem } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"

export default function RootLayout() {
  return (
    <>
    <Container maxWidth="7xl">
      <Outlet />
    </Container>
    </>
  )
}
