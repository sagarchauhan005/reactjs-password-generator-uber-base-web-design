import * as React from 'react';
import {FlexGrid, FlexGridItem} from 'baseui/flex-grid';
import {H3, H4, Label1, Paragraph2} from "baseui/typography";
import {StyledLink} from "baseui/link";
import ThingsRow from './things-row';
const itemProps = {
    height: 'scale1000',
    alignItems: 'center',
};
const itemPropsGrid = {
    marginTop : '150px',
    marginLeft : '100px',
    marginRight : '100px',
    marginBottom : '100px',
};

export default () => (
    <FlexGrid {...itemPropsGrid}
              flexGridColumnCount={1}
              flexGridRowGap="scale2400"
    >
        <FlexGridItem {...itemProps}>
            <StyledLink href="#">
                <H4>Things I Do</H4>
            </StyledLink>
        </FlexGridItem>
        <FlexGridItem {...itemProps}>
            <ThingsRow/>
        </FlexGridItem>
    </FlexGrid>
);
