import React, { useState, useEffect } from "react";
import {
  FaUserCircle,
  FaQuestionCircle,
  FaGift,
  FaMoneyCheckAlt,
  FaUniversity,
  FaRupeeSign,
  FaHistory,
  FaLanguage,
  FaHeart,
  FaShareAlt,
  FaEllipsisH,
  FaWallet,
  FaCog,
  FaStar,
  FaGavel,
  FaSignOutAlt,
} from "react-icons/fa";

const menuItems = [
  { icon: <FaQuestionCircle />, label: "Help Centre" },
  { icon: <FaGift />, label: "Refer & Earn ₹100" },
  { icon: <FaMoneyCheckAlt />, label: "My Payments" },
  { icon: <FaUniversity />, label: "Bank & UPI Details" },
  { icon: <FaRupeeSign />, label: "Payment & Refund" },
  { icon: <FaHistory />, label: "My Activity" },
  { icon: <FaLanguage />, label: "Change Language" },
  { icon: <FaHeart />, label: "Wishlisted Products" },
  { icon: <FaShareAlt />, label: "Shared Products" },
  { icon: <FaEllipsisH />, label: "Others" },
  { icon: <FaWallet />, label: "Swagberry Balance" },
  { icon: <FaCog />, label: "Settings" },
  { icon: <FaStar />, label: "Rate Swagberry" },
  { icon: <FaGavel />, label: "Legal and Policies" },
  { icon: <FaSignOutAlt />, label: "Logout", color: "text-red-500" },
];

const UserProfile = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    image: "", // optional profile image
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("userProfile"));
    if (saved) setProfile(saved);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6 md:p-10">
        {/* Profile Header */}
        <div className="flex items-center gap-6 mb-10">
          {profile.image ? (
            <img
              src={profile.image}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover border"
            />
          ) : (
            <FaUserCircle className="w-20 h-20 text-gray-400" />
          )}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{profile.name}</h2>
            <p className="text-gray-500">{profile.email}</p>
          </div>
        </div>

        {/* Menu List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 p-3 rounded hover:bg-gray-100 transition cursor-pointer ${
                item.color ? item.color : "text-gray-700"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-base font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
