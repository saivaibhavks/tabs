import { useState } from "react";
import "./Tabs.css";

const Tabs = () => {
  const [tabsData, setTabsData] = useState({});

  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="container">
      <div className="tabs-action">
        <button>Profile</button>
        <button>Interests</button>
        <button>Settings</button>
      </div>
    </div>
  );
};

export default Tabs;
