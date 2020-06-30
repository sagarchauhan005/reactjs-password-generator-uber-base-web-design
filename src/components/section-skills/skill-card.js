import * as React from 'react';
import {
    Card,
    StyledBody,
} from 'baseui/card';
import {Paragraph2, Paragraph3} from "baseui/typography";
import {Component} from "react";

class Skills extends Component{
    render(){
        return(
            <Card
                overrides={{Root: {style: {width: '500px', height : '180px'}}}}
                title={this.props.title}
            >
                <StyledBody>
                    {
                        this.props.skills.map((text) =>
                            <Paragraph3 ># {text}</Paragraph3>
                        )
                    }
                </StyledBody>
            </Card>
        );
    }
}
export default Skills;
