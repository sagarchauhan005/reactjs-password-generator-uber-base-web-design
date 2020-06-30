import * as React from 'react';
import {FlexGrid, FlexGridItem} from 'baseui/flex-grid';
import {H3, H4, Label1, Paragraph2} from "baseui/typography";
import {StyledLink} from "baseui/link";
const itemProps = {
    height: 'scale1000',
    alignItems: 'center',
};
const itemPropsGrid = {
    margin : '100px',
};

export default () => (
    <FlexGrid {...itemPropsGrid}
        flexGridColumnCount={1}
        flexGridRowGap="scale2400"
    >
        <FlexGridItem {...itemProps}>
            <StyledLink href="#">
                <H4>My Pitch</H4>
            </StyledLink>
            <Paragraph2>
                Having worked in 3 startups as "Founding Member + Tech Lead", taking them to market & successfully failing at my own
                EdTech Startup, I am currently looking to work with Large companies and Scaled Business.
                Looking to work with organization which can offer SCALE to test my knowledge & experience.
                Having seen full product life cycle (scratch -> customer) & full life cycle growth of startup (0 -> 100+ employees), I feel I can
                be a good fit for your organization in different roles, specially in Leadership Roles.
            </Paragraph2>
        </FlexGridItem>
    </FlexGrid>
);
