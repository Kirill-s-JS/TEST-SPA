import { Route, Routes, Navigate } from 'react-router-dom'
import FeedPage from 'pages/Feed'
import CharacterPage from '../../pages/Character'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/feed" element={<FeedPage />} />
      <Route path="/character/:name" element={<CharacterPage />} />
      <Route path="/*" element={<Navigate to="/feed" replace />} />
    </Routes>
  )
}
export default AppRoutes
