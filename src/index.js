import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ← Import BrowserRouter
import './index.css';
import Navbar from './components/Navbar.js';
import AchievementCounter from "./components/AchievementCounter.js";
import SocialIcons from "./components/SocialIcons.js";
import CircleCardGrid from "./components/CircleCardGrid.js";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter> {/* ← Wrap with Router */}
    <Navbar />
    <AchievementCounter/>
    <CircleCardGrid/>
    <SocialIcons/>
  </BrowserRouter>
);
