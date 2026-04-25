import Navbar from "@/component/shared/Navbar";
import { montserrat } from "../layout";
import React from "react";

const LayoutPage = ({children}) => {
    return (
        <div className={`${montserrat.className3}`}>
            <Navbar/>
            {children}
        </div>
    );
};

export default LayoutPage;