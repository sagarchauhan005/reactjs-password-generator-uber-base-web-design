import * as React from 'react';
import {FlexGrid, FlexGridItem} from 'baseui/flex-grid';
import SKillListItem from './skill-list-item';
const itemProps = {
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'mono300',
};

const itemPropsGrid = {
};
const stackArr = [
  ['Laravel',5],
  ['ReactJS',5],
  ['React Native',4],
  ['Node Js',4],
  ['Javascript',5],
  ['Jquery',5],
  ['Mysql',5],
  ['MongoDB',4],
  ['Firebase',4],
  ['Elastic Beanstalk',5],
  ['EC2',4],
  ['RDS',4],
  ['S3',3],
  ['Cloudfront',5],
  ['Cloud formation',5],
  ['AWS Lambda',3],
  ['SES',5],
  ['Route 53',5],
  ['Code Pipeline',5],
  ['Serverless',3],
  ['Webpack',3],
  ['Git',5],
  ['Npm',5],
  ['Composer',5],
  ['Shell',3],
  ['Bootstrap',4],
  ['Ajax',5],
  ['Android',4],
  ['HTML',5],
  ['CSS',5],
];
export default () => (
    <FlexGrid {...itemPropsGrid}
        flexGridColumnCount={3}
        flexGridColumnGap="scale600"
        flexGridRowGap="scale600"
    >
        {
            stackArr.map((textskill) =>
                <FlexGridItem {...itemProps}>
                    <SKillListItem stack={textskill[0]} rating={textskill[1]}/>
                </FlexGridItem>
            )
        }

    </FlexGrid>
);
