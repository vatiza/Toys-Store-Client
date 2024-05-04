import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AllToys from "./AllToys/AllToys";
import OnlyCars from "./OnlyCars/OnlyCars";

const ReactTabs = () => {
  return (
    <div className="text-center">
      <h1 className="text-yellow-500 font-bold text-3xl ">Choose Categories</h1>
      <Tabs>
        <TabList>
          <Tab>All Toys</Tab>
          <Tab>Cars</Tab>
          <Tab>Truck</Tab>
          <Tab>Patrol</Tab>
        </TabList>

        <TabPanel>
          <AllToys></AllToys>
        </TabPanel>
        <TabPanel>
       <OnlyCars></OnlyCars>
        </TabPanel>
        <TabPanel>
          <h2>Show only Truck </h2>
        </TabPanel>
        <TabPanel>
          <h2>Show only Patrol Cars </h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReactTabs;
