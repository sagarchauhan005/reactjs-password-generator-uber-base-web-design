import * as React from 'react';
import {
    Card,
    StyledBody,
    StyledAction,
    StyledThumbnail,
} from 'baseui/card';
import {Component} from "react";

class OtherSkillCard extends Component{
    render() {
        return (
            <Card
                overrides={{
                    Root: {style: {width: '328px', border: 'none !important'}},
                    StyledThumbnail: {style: {border: 'none !important'}}
                }}
                title={this.props.title}
            >
                <StyledThumbnail
                    src={this.props.headerImage}
                />
                <StyledBody>
                    {this.props.desc}
                </StyledBody>
            </Card>
        );
    }
}
export default OtherSkillCard;
