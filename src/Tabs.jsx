import { useState } from "react";
import "./Tabs.css";
import Profile from "./Profile";

const Tabs = () => {
  const [tabsData, setTabsData] = useState({});

  const [activeTab, setActiveTab] = useState("profile");

  const changeSection = (section) => {
    setActiveTab(section);
  };

  return (
    <div className="container">
      <div className="tabs-action">
        <button
          style={{
            backgroundColor: activeTab === "profile" ? "red" : null,
            cursor: "pointer",
          }}
          onClick={() => changeSection("profile")}
        >
          Profile
        </button>
        <button
          style={{
            backgroundColor: activeTab === "interests" ? "red" : null,
            cursor: "pointer",
          }}
          onClick={() => changeSection("interests")}
        >
          Interests
        </button>
        <button
          style={{
            backgroundColor: activeTab === "settings" ? "red" : null,
            cursor: "pointer",
          }}
          onClick={() => changeSection("settings")}
        >
          Settings
        </button>
      </div>

      <div className="body">{activeTab === "profile" && <Profile />}</div>
    </div>
  );
};

export default Tabs;
