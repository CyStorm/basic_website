import React from "react";
import "./topbar.scss"

import Topitem from "../topitem/topitem";

class Topbar extends React.Component {
    render() {
        return (
            <div className="topbar">
                <div className="topbar-left">
                    <Topitem link="#landing" displayText="Landing"></Topitem>
                    <Topitem link="#intro" displayText="Intro"></Topitem>
                    <Topitem link="#projects" displayText="Projects"></Topitem>
                    <Topitem link="#experience" displayText="Experience"></Topitem>
                    <Topitem link="#contact" displayText="Contact"></Topitem>
                </div>
                <div className="topbar-right">
                    <Topitem link="#" displayText="Icon"></Topitem>
                    <Topitem link="#" displayText="Icon"></Topitem>
                    <Topitem link="#" displayText="Icon"></Topitem>
                </div>
            </div>
        );
    }
}

export default Topbar
