import Head from "next/head";
import Aside from "./Aside";
import Section from "./Section";

function ordered() {
    return (
        <div>
            <div style={{ display: 'flex', fontFamily: `font-family: 'Barlow', sans-serif` }}>
                <Aside />
                <Section />
            </div>
        </div>
    )
}

export default ordered
