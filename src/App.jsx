import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Navbar from './component/common/Navbar';
import Footer from './component/common/Footer';
import HomePage from './component/home/HomePage'
import AllRoomsPage from './component/booking_rooms/AllRoomsPage'
import FindBookingPage from './component/booking_rooms/FindBookingPage'
import RoomDetailsPage from './component/booking_rooms/RoomDetailsPage'
import LoginPage from './component/auth/LoginPage'
import Register from './component/auth/Register'
import AddRoomPage from './component/admin/AddRoomPage';
import AdminPage from './component/admin/AdminPage';
import EditBookingPage from './component/admin/EditBookingPage';
import EditRoomPage from './component/admin/EditRoomPage';
import ManageBookingsPage from './component/admin/ManageBookingsPage';
import ManageRoomPage from './component/admin/ManageRoomPage';
import EditProfilePage from './component/profile/EditProfilePage';
import ProfilePage from './component/profile/ProfilePage';
export default function App() {
  return (
    <BrowserRouter>

     <div className="App">
      <Navbar/>

    <div className="content">
      <Routes>
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path='/home' element={<HomePage/>}/> 
      <Route exact path='/rooms' element={<AllRoomsPage/>}/> 
      <Route exact path='/find-booking' element={<FindBookingPage/>}/> 
      <Route exact path='/rooms/:roomId' element={<RoomDetailsPage/>}/> 



      <Route exact path='//profile' element={<ProfilePage/>}/> 
      <Route exact path='/edit-profile' element={<EditProfilePage/>}/> 




      <Route exact path='/admin/add-room' element={<AddRoomPage/>}/> 
      <Route exact path='/admin' element={<AdminPage/>}/> 
      <Route exact path='/admin/edit-booking/:bookingCode' element={<EditBookingPage/>}/> 
      <Route exact path='/admin/edit-room/:stringId' element={<EditRoomPage/>}/> 
      <Route exact path='/admin/manage-bookings' element={<ManageBookingsPage/>}/> 
      <Route exact path='/admin/manage-rooms' element={<ManageRoomPage/>}/> 
      



      </Routes>
    </div>

      <Footer/>
     </div>
    </BrowserRouter>
  )
}