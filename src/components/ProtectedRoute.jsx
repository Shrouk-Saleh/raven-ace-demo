import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

// Wraps any route that needs a logged-in user.
// In this standalone interactive demo, if a visitor navigates to a dashboard
// belonging to another role, we automatically switch their persona so they
// never hit an unauthorized dead end.
function ProtectedRoute({ children, roles }) {
  const { user, loading, switchRole } = useAuth()

  useEffect(() => {
    if (!loading && user && roles && !roles.includes(user.role)) {
      switchRole(roles[0])
    }
  }, [loading, user, roles, switchRole])

  if (loading) return null

  if (!user) return <Navigate to="/login" replace />

  if (roles && !roles.includes(user.role)) {
    return null // wait for useEffect to switch role
  }

  return children
}

export default ProtectedRoute
