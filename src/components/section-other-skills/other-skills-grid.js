import * as React from 'react';
import {FlexGrid, FlexGridItem} from 'baseui/flex-grid';
import OtherSkillCard from "./other-skill-card";
const itemProps = {
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

export default () => (
    <FlexGrid
        flexGridColumnCount={3}
        flexGridColumnGap="scale800"
        flexGridRowGap="scale800"
    >
        <FlexGridItem {...itemProps}>
            <OtherSkillCard
                title={"Ethical Hacker"}
                desc={"Helped companies make their product more secure and robust by offering hacking services, ethically"}
                headerImage={"https://image.flaticon.com/icons/png/128/3014/3014254.png"}/>
        </FlexGridItem>
        <FlexGridItem {...itemProps}>
            <OtherSkillCard
                title={"Stock Trader"}
                desc={"Actively trades on National Stock Exchange, India on a daily basis for swing trading and intra-day trades."}
                headerImage={"https://image.flaticon.com/icons/png/128/3121/3121625.png"}/>
        </FlexGridItem>
        <FlexGridItem {...itemProps}>
            <OtherSkillCard
                title={"Bug Bounty Hunter"}
                desc={"Takes active part in big bounty programes on BugCrowd, HackerOne, Intigrity and various offline programmes"}
                headerImage={"https://image.flaticon.com/icons/png/128/2007/2007524.png"}/>
        </FlexGridItem>
    </FlexGrid>
);
