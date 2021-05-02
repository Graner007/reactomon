import React, { Component } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

class ThemeToggle extends Component {
    static contextType = ThemeContext;

    render() { 
        const { toggleTheme } = this.context;

        return (
            <label className="switch">
                <input type="checkbox" onClick={ toggleTheme } />
                <span class="slider round"></span>
            </label>
        );
    }
}
 
export default ThemeToggle;