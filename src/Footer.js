import React from "react";

export default function Footer() {
    return (
        <div className="webFooter">
            <footer className="Bottom">
                <div className="link">
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                Learn React
                </a>
                </div>
                <small>testStats from <a href="https://sportsdata.io" className="link">sportsdata.io</a> (adjusted 5-10%) © 2022 Goldsmith Development. All rights reserved.</small>
            </footer>
        </div>
    )
}
