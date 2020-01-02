import React, { useState } from "react";
import { Select, NativeSelect } from "../src";
import { ToggleSwitch } from "@fremtind/jkl-toggle-switch-react";
import "@fremtind/jkl-core/core.min.css";
import "@fremtind/jkl-select/select.min.css";
import "@fremtind/jkl-toggle-switch/toggle-switch.min.css";
import "./index.scss";

const Example = () => {
    const items = [
        "The flower shop is very far away from here",
        "I have cancer",
        "Throwing the football",
        "ChirpChirpChirp",
    ];
    const valuePairs = [
        { value: "firstvalue", label: "Value 1" },
        { value: "secondvalue", label: "Value 2" },
    ];
    const years = [...Array(120)].map((_, i) => (i + 1900).toString()); // 1900 - 2019

    const [favoriteScene, setFavoriteScene] = useState<string>();
    const [valuePair, setValuePair] = useState<string>();
    const [darkMode, isDarkMode] = useState(false);

    return (
        <section className={"example-page " + (!darkMode ? "example-page--light-mode" : "example-page--dark-mode")}>
            <ToggleSwitch className={"toggle-switch"} inverted={darkMode} onChange={() => isDarkMode(!darkMode)}>
                Dark Mode
            </ToggleSwitch>
            <Select
                forceCompact
                inline
                className="jkl-spacing--top-3"
                label="The Room scene"
                defaultPrompt="Choose your favorite"
                items={items}
                onChange={setFavoriteScene}
                value={favoriteScene}
                helpLabel="The room is the greatest movie"
                errorLabel={favoriteScene ? "You can't pick, they are all the best" : undefined}
                variant="large"
            />
            <Select
                inline
                className="jkl-spacing--top-3"
                label="Fødselsår"
                items={years}
                value="1986"
                variant="small"
                forceCompact
            />

            <NativeSelect
                className="jkl-spacing--top-5"
                label="Native select"
                items={valuePairs}
                onChange={(e) => setValuePair(e.target.value)}
                value={valuePair}
                helpLabel="This uses value/label pairs"
            />
            <NativeSelect
                className="jkl-spacing--top-3"
                helpLabel="The room is the greatest movie"
                errorLabel={favoriteScene ? "You can't pick, they are all the best" : undefined}
                label="Native select"
                items={items}
                onChange={(e) => setFavoriteScene(e.target.value)}
                placeholder="Choose your favorite"
                variant="large"
                value={favoriteScene}
                forceCompact
            />

            <Select className="jkl-spacing--top-5" label="Favorite The Room scene" items={items} />
            <Select
                className="jkl-spacing--top-3"
                label="Value pairs"
                items={valuePairs}
                onChange={(v) => console.log(v)}
                helpLabel="This uses value/label pairs"
            />
        </section>
    );
};

export default Example;