import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AllToys from "./AllToys/AllToys";
import OnlyCars from "./OnlyCars/OnlyCars";
import OnlyTrucks from "./OnlyTrucks/OnlyTrucks";
import OnlyPatrols from "./OnlyPatrols/OnlyPatrols";

const ReactTabs = () => {
  return (
    <div className="text-center">
      <h1 className="text-yellow-500 font-bold text-3xl ">Choose Categories</h1>
      <Tabs>
        <TabList>
          <Tab>All Toys</Tab>
          <Tab>Cars</Tab>
          <Tab>Trucks</Tab>
          <Tab>Patrols</Tab>
        </TabList>

        <TabPanel>
          <AllToys></AllToys>
        </TabPanel>
        <TabPanel>
       <OnlyCars></OnlyCars>
        </TabPanel>
        <TabPanel>
        <OnlyTrucks></OnlyTrucks>
        </TabPanel>
        <TabPanel>
         <OnlyPatrols></OnlyPatrols>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReactTabs;
