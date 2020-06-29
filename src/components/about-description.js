import * as React from 'react';
import {FlexGrid, FlexGridItem} from 'baseui/flex-grid';
import {H1, H6, Label3, Label4, Paragraph3} from "baseui/typography";
const itemProps = {
    height: 'auto',
    display: 'flex',
    alignItems: 'left',
    justifyContent: 'left',
    margin: '0px !important',
    padding : '0',
};
const itemPropsGrid = {
    marginTop : '70px',
    padding: '0',
};

const itemPropsHeading = {
    marginTop : '0',
    marginBottom : '20px !important',
};

const itemPropsPara = {
  marginTop: '0'
};

const itemPropsLabel4 = {
    color: '#BFBFBF',
    marginBottom : '10px !important'
};

const itemPropsParaLabel3 = {
    marginBottom : '8px !important'
};

export default () => (
    <FlexGrid {...itemPropsGrid}
        flexGridColumnCount={1}
        flexGridColumnGap="scale800"
        flexGridRowGap="scale800"
    >
        <FlexGridItem {...itemProps}>
            <Label3 {...itemPropsLabel4}>Technical Lead | Product Developer | Founding Team Member</Label3>
        </FlexGridItem>
        <FlexGridItem {...itemProps}>
            <H1 {...itemPropsHeading}>Sagar Chauhan</H1>
        </FlexGridItem>
        <FlexGridItem {...itemProps}>
            <Label3 {...itemPropsParaLabel3}>
                My philosophy of life :
            </Label3>
        </FlexGridItem>
        <FlexGridItem {...itemProps}>
            <Paragraph3 {...itemPropsPara}>
                A human being should be able to change a diaper, plan an invasion, butcher a hog, conn a ship, design a building, write a
                sonnet, balance accounts, build a wall, set a bone, comfort the dying, take orders, give orders, cooperate, act alone, solve
                equations, analyze a new problem, pitch manure, program a computer, cook a tasty meal, fight efficiently, die gallantly.
                Because “specialization is for insects”.
            </Paragraph3>
        </FlexGridItem>
    </FlexGrid>
);
