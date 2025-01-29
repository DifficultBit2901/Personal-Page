import Background from "./components/Background.tsx";
import Card from "./components/Card.tsx";
import Icon from "./components/Icon.tsx";

import profileIcon from "./assets/profile_icon.png";
import Tabs from "./components/tabs/Tabs.tsx";
import IconList from "./components/IconList.tsx";
import { PROGRAMMING_FRAMEWORKS, PROGRAMMING_LANGUAGES, SOCIAL_LINKS } from "./data.ts";

function App() {
    return (
        <>
            <Background />
            <Card>
                <Icon src={profileIcon} alt="Profile Picture" size="medium"
                    credit={{ name: "IlPizzaPai", link: "https://ilpizzaguy.carrd.co/" }} />
                <Card title="Introduction">
                    Hi! My name is <strong>DifficultBit</strong>. Depending on the platform I might also go
                    by <strong>DifficultBit2901</strong>, <strong>Difficult_Bit</strong> or <strong>Difficult_Bit2901</strong>.
                    I'm 20 and go by <strong>they/it</strong> pronouns. I enjoy coding, mostly in the field of game
                    development.
                </Card>
                <Card title="Experience">
                    <Tabs tabs={["Languages", "Frameworks"]} id={"experience-tab"}>
                        <Tabs.Tab id="Languages">
                            <IconList data={PROGRAMMING_LANGUAGES} />
                        </Tabs.Tab>
                        <Tabs.Tab id="Frameworks">
                            <IconList data={PROGRAMMING_FRAMEWORKS} />
                        </Tabs.Tab>
                    </Tabs>
                </Card>
                <Card title="Contact">
                    <IconList data={SOCIAL_LINKS} size="small" />
                </Card>
            </Card>
        </>
    )
}

export default App
