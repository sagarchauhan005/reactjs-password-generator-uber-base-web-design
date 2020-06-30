import * as React from 'react';
import {Button} from 'baseui/button';
import Check from 'baseui/icon/check';
import ChevronRight from 'baseui/icon/chevron-right';
import {ListItem, ListItemLabel} from 'baseui/list';
import {useStyletron} from 'baseui';
import {EmoticonRating} from "baseui/rating";
import {Component} from "react";

class Stack extends Component{
    render(){
        return(
                <ListItem endEnhancer={() =>
                    <EmoticonRating
                        numItems={1}
                        value={this.props.rating}
                    />
                }>
                    <ListItemLabel>{this.props.stack}</ListItemLabel>
                </ListItem>
        )
    };
};
export default Stack;
