import React from "react";
import TabPanel from "./TabPanel";
import CapsInfoList from "../caps/CapsInfoList";
import CapsSpecialitiesList from "../caps/CapsSpecialitiesList";
import CapsBusStopsList from "../caps/CapsBusStopsList";

const TabPanels = ({ value }) => {
  return (
    <div>
      <TabPanel value={value} index={0}>
        <CapsInfoList />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CapsSpecialitiesList />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CapsBusStopsList />
      </TabPanel>
    </div>
  );
};

export default TabPanels;
