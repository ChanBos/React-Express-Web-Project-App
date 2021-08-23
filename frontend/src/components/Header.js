// Imported react libraries.
import React from "react";
// Imported Help component.
import UsageInstructions from "./UsageInstructions";

/**
 * Created a header for the Web Projects App. Added a .gif logo, header and a Usage Instructions component.
 * Returning the elements.
 */

const Header = () => {
  return (
    <div>
      <header className="App-header">
        <div id="headersection1">
          <img src="./media/logo.gif" alt="Logo" />
          <h1 className="display-4">My Web Projects</h1>
        </div>
        <UsageInstructions />
      </header>
    </div>
  );
};

// Exported Header to App.js.
export default Header;
