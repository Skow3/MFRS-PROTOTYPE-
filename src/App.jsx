import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import FloodMap from './FloodMap';
import ForecastPage from './ForecastPage';
import WarningPage from "./WarningPage";
import ReportPage from "./ReportPage";
import ControlPanelPage from "./ControlPanelPage";
import Footer from './Footer';
import Login from "./login";

const pages = [
  { name: "HOME", path: "/" },
  { name: "WARNING", path: "/warning" },
  { name: "REPORTS", path: "/reports" },
  { name: "FORECAST", path: "/forecast" },
  { name: "CONTROL PANEL", path: "/control" },
  { name: "LOGIN", path: "/login" },
];

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center shadow-md fixed w-full z-10">
      <div className="text-xl font-bold">MFRS</div>
      <div className="flex flex-wrap space-x-4">
        {pages.map((page, index) => (
          <Link
            key={index}
            to={page.path}
            className="hover:text-blue-400 transition px-2"
          >
            {page.name}
          </Link>
        ))}
        <Link to="/maps" className="hover:text-blue-400 transition px-2">
          MAPS
        </Link>
      </div>
    </nav>
  );
}

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: false,
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="w-full h-screen pt-1 overflow-hidden">
        <Slider {...settings} className="h-full">
          <div className="h-screen w-screen">
            <img src="/images/8.jpg" alt="Slide 1" className="w-full h-full object-cover" />
          </div>
          <div className="h-screen w-screen">
            <img src="/images/6.webp" alt="Slide 2" className="w-full h-full object-cover" />
          </div>
          <div className="h-screen w-screen">
            <img src="/images/15.jpg" alt="Slide 3" className="w-full h-full object-cover" />
          </div>
          <div className="h-screen w-screen">
            <img src="/images/16.jpg" alt="Slide 4" className="w-full h-full object-cover" />
          </div>
        </Slider>
      </div>
      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Our Project
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our mission is to provide real-time flood monitoring and alerts to help communities stay safe and prepared. With advanced mapping technology and accurate data, we aim to reduce the impact of floods and save lives.
          </p>
          <div className="mt-8">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-blue-700"><Link to="/login" className="hover:text-blue-400 transition px-2">
          SETUP ALERTS
        </Link>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Why Choose Us?</h3>
              <p className="mt-4 text-gray-600">
                We leverage cutting-edge technology to provide accurate and timely flood predictions. Our platform is designed to be user-friendly and accessible to everyone.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
              <p className="mt-4 text-gray-600">
                To create a world where communities are resilient to natural disasters, and no one is caught unprepared during a flood.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Page({ title }) {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-3xl font-bold">{title}</h1>
        <Link to="/" className="mt-4 text-blue-500 underline">Back to Home</Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/maps" element={<FloodMap />} />
        <Route path="/forecast" element={<ForecastPage />} />
        <Route path="/warning" element={<WarningPage />} />
        <Route path="/reports" element={<ReportPage />} />
        <Route path="/control" element={<ControlPanelPage />} />
        {pages.slice(1).map((page, index) => (
          <Route key={index} path={page.path} element={<Page title={page.name} />} />
        ))}
      </Routes>
    </Router>
  );
}