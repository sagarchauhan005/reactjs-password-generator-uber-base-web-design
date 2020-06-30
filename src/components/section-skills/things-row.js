import * as React from 'react';
import {FlexGrid, FlexGridItem} from 'baseui/flex-grid';
import SKillCard from './skill-card';
const itemProps = {
    backgroundColor: 'mono300',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};
const skilArr = [
    [
        'Conceptualize the idea',
        'Identify the existing solution & competition',
        'Ideate over the implementation & feasibility',
    ],
    [
        'Prepare financial model & earnings',
        'Prepare budget & identify required resources',
        'Setup hiring process, if need be',
    ],
    [
        'Define MVP guidelines for the idea',
        'Wireframing to understand edge cases',
        'Define a tentative achievable goal for MVP',
    ],
    [
        'Setup full-stack dev environment & workflow',
        'Build back-end API\'s & micro-services',
        'Construct full-stack apps (Front-end & Back-end framework)'
    ],
    [
        'Deploy to the cloud using AWS Services',
        'EBS, EC2, RDS, S3, Cloud front, Cloud formation, Lambda',
        'SES, Route 53, Code Pipeline, Serverless Image Handler',
    ],
    [
        'Define proper support mechanism for feedback',
        'Test, fix, patch, support and pivot the project',
        'Upon achieving defined goal, move on',
    ]
];


export default () => (
    <FlexGrid
        flexGridColumnCount={3}
        flexGridColumnGap="scale800"
        flexGridRowGap="scale800"
    >
        <FlexGridItem {...itemProps}>
            <SKillCard skills={skilArr[0]} title={"Ideation"}/>
        </FlexGridItem>
        <FlexGridItem {...itemProps}>
            <SKillCard skills={skilArr[1]} title={"Preparation / Team building"}/>
        </FlexGridItem>
        <FlexGridItem {...itemProps}>
            <SKillCard skills={skilArr[2]} title={"MVP Guidelines"}/>
        </FlexGridItem>
        <FlexGridItem {...itemProps}>
            <SKillCard skills={skilArr[3]} title={"Development"}/>
        </FlexGridItem>
        <FlexGridItem {...itemProps}>
            <SKillCard skills={skilArr[4]} title={"Deployment"}/>
        </FlexGridItem>
        <FlexGridItem {...itemProps}>
            <SKillCard skills={skilArr[5]} title={"Testing / Support"}/>
        </FlexGridItem>
    </FlexGrid>
);
