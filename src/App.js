import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'
import ComingSoon from './components/common/ComingSoon'

// layouts and pages
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import TeamPage from './pages/TeamPage'
import TeamsPage from './pages/TeamsPage'

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}/>
      <Route path="/teams/:id" element={<TeamPage/>}/>
      <Route path="/teams/" element={<TeamsPage/>}/>
      <Route path="/coaches/" element={<ComingSoon/>} />
      <Route path="/stadiums/" element={<ComingSoon/>} />
      <Route path="/news/" element={<ComingSoon/>} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App