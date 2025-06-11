import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const validCities = {
  Imphal: [24.8170, 93.9368],
  Thoubal: [24.6300, 94.0100],
  Bishnupur: [24.6200, 93.7500],
  Churachandpur: [24.3330, 93.6660],
  Senapati: [25.2700, 94.0160]
};

function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [error, setError] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Imphal");
  const navigate = useNavigate();

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setError("");

    if (!phoneNumber) {
      setError("Please enter a valid phone number.");
      return;
    }

    try {
      if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
          size: "invisible",
          callback: () => console.log("reCAPTCHA verified!"),
        });
      }
      const confirmation = await signInWithPhoneNumber(auth, `+${phoneNumber}`, window.recaptchaVerifier);
      setConfirmationResult(confirmation);
      setIsOtpSent(true);
      setError("OTP sent successfully!");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError("");

    if (!otp) {
      setError("Please enter the OTP.");
      return;
    }

    try {
      await confirmationResult.confirm(otp);
      setIsLoggedIn(true);
      setError("Login successful! Please select your city.");
    } catch (err) {
      setError("Invalid OTP. Please try again.");
    }
  };

  const handleCitySubmit = (e) => {
    e.preventDefault();
    if (validCities[selectedCity]) {
      navigate(`/maps?city=${selectedCity}`);
    } else {
      setError("Invalid city. Please select a valid city in Manipur.");
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col">
     <Navbar />
      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold mb-4 text-center">Login / Signup</h2>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          {!isLoggedIn ? (
            !isOtpSent ? (
              <form onSubmit={handleSendOtp}>
                <div className="mb-4">
                  <label className="block text-gray-700">Phone Number</label>
                  <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your phone number" />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">Send OTP</button>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp}>
                <div className="mb-4">
                  <label className="block text-gray-700">OTP</label>
                  <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter OTP" />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">Verify OTP</button>
              </form>
            )
          ) : (
            <form onSubmit={handleCitySubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Select Your City in Manipur</label>
                <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
                  {Object.keys(validCities).map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>
              <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">Go to Map</button>
            </form>
          )}
          <div id="recaptcha-container"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
