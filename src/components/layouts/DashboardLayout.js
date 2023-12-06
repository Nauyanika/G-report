import React from "react";
import "../../views/points/style/Home.css"
import { CAccordionItem ,CAccordion,CAccordionHeader,CAccordionBody,} from '@coreui/react'
import Home from "./Home";
import AppSideber from "./AppSideber";
import Content from "./Content";
function DashboardLayout() {

  const [selectedDate, handleDateChange] = useState(new Date());
    const [selectedDate1, handleDateChange1] = useState(new Date());
  return (
   <>
  <AppSideber/>
  <Content/>
 
   </>
  );
}
export default DashboardLayout;
