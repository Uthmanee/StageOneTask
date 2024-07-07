import React, { useState } from "react";

function useTab(tabIndex = 1) {
  const [activeTab, setActiveTab] = useState(tabIndex);

  const handleTabPress = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return [activeTab, handleTabPress];
}

export default useTab;
