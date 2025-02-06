import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import ApiService from "../../service/ApiService"

const Navbar = () => {
  const isAuthenticated = ApiService.isAuthenticated()
  const isAdmin = ApiService.isAdmin()
  const isUser = ApiService.isUser()
  const [isOpen, setIsOpen] = useState(false)
  const [showLogoutModal, setShowLogoutModal] = useState(false)
  const navigate = useNavigate()

  const handleLogout = () => {
    setShowLogoutModal(true)
  }

  const confirmLogout = () => {
    ApiService.logout()
    setShowLogoutModal(false)
    navigate("/home")
  }

  return (
    <>
      <nav className="sticky top-0 z-40 w-full bg-white shadow-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <NavLink to="/home" className="text-2xl font-semibold text-teal-600 hover:text-teal-700">
                Ali's Hotel
              </NavLink>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? "text-orange-500 hover:text-orange-600" : "text-gray-600 hover:text-gray-900"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/rooms"
                className={({ isActive }) =>
                  isActive ? "text-orange-500 hover:text-orange-600" : "text-gray-600 hover:text-gray-900"
                }
              >
                Rooms
              </NavLink>
              <NavLink
                to="/find-booking"
                className={({ isActive }) =>
                  isActive ? "text-orange-500 hover:text-orange-600" : "text-gray-600 hover:text-gray-900"
                }
              >
                Find My Bookings
              </NavLink>

              {isUser && (
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    isActive ? "text-orange-500 hover:text-orange-600" : "text-gray-600 hover:text-gray-900"
                  }
                >
                  Profile
                </NavLink>
              )}
              {isAdmin && (
                <NavLink
                  to="/admin"
                  className={({ isActive }) =>
                    isActive ? "text-orange-500 hover:text-orange-600" : "text-gray-600 hover:text-gray-900"
                  }
                >
                  Admin
                </NavLink>
              )}

              {!isAuthenticated && (
                <>
                  <NavLink to="/login" className="text-gray-600 hover:text-gray-900 px-3 py-2">
                    Login
                  </NavLink>
                  <NavLink
                    to="/register"
                    className="text-gray-600 hover:text-gray-900 border border-gray-300 rounded-md px-3 py-2"
                  >
                    Register
                  </NavLink>
                </>
              )}

              {isAuthenticated && (
                <button onClick={handleLogout} className="text-gray-600 hover:text-gray-900 px-3 py-2">
                  Logout
                </button>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* Icon when menu is closed */}
                <svg
                  className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                {/* Icon when menu is open */}
                <svg
                  className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${isActive ? "text-orange-500 hover:text-orange-600" : "text-gray-600 hover:text-gray-900"} hover:bg-gray-50`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/rooms"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${isActive ? "text-orange-500 hover:text-orange-600" : "text-gray-600 hover:text-gray-900"} hover:bg-gray-50`
              }
            >
              Rooms
            </NavLink>
            <NavLink
              to="/find-booking"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${isActive ? "text-orange-500 hover:text-orange-600" : "text-gray-600 hover:text-gray-900"} hover:bg-gray-50`
              }
            >
              Find My Bookings
            </NavLink>

            {isUser && (
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${isActive ? "text-orange-500 hover:text-orange-600" : "text-gray-600 hover:text-gray-900"} hover:bg-gray-50`
                }
              >
                Profile
              </NavLink>
            )}
            {isAdmin && (
              <NavLink
                to="/admin"
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${isActive ? "text-orange-500 hover:text-orange-600" : "text-gray-600 hover:text-gray-900"} hover:bg-gray-50`
                }
              >
                Admin
              </NavLink>
            )}

            {!isAuthenticated && (
              <>
                <NavLink
                  to="/login"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                >
                  Register
                </NavLink>
              </>
            )}

            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Custom Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 max-w-sm w-full mx-4 transform transition-all ease-in-out duration-300 scale-100">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Confirm Logout</h2>
            <p className="text-gray-600 mb-6">Are you sure you want to log out? We'll miss you!</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={confirmLogout}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar;

