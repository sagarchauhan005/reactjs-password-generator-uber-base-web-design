import * as React from "react";
import {
    HeaderNavigation,
    ALIGN,
    StyledNavigationList,
    StyledNavigationItem
} from "baseui/header-navigation";
import { StyledLink } from "baseui/link";
import { Button } from "baseui/button";
import {H3} from "baseui/typography";
import {Avatar} from "baseui/avatar";

export default () => {
    return (
        <HeaderNavigation overrides={{
            Root: {
                style: () => {
                    return {
                        border: 'none',
                        marginTop : '30px !important',
                    };
                }
            }
        }}>
            <StyledNavigationList $align={ALIGN.center} />
            <StyledNavigationList $align={ALIGN.right}>
                <StyledNavigationItem>
                    <StyledLink href="https://drive.google.com/file/d/1qY2drEeQg6ma-gsyaEz-WfmJJqtRQHgb/view?usp=sharing">
                        Resume
                    </StyledLink>
                </StyledNavigationItem>
                <StyledNavigationItem>
                    <StyledLink href="https://drive.google.com/file/d/1BcV8xQyhcSGNOvxqdzlizMQEQbK6fjnK/view?usp=sharing">
                        Cover Letter
                    </StyledLink>
                </StyledNavigationItem>
                <StyledNavigationItem>
                    <StyledLink href="https://medium.com/@coolsagar005">
                        Blog
                    </StyledLink>
                </StyledNavigationItem>
                <StyledNavigationItem>
                    <StyledLink href="https://github.com/sagarchauhan005/">
                        Github
                    </StyledLink>
                </StyledNavigationItem>
            </StyledNavigationList>
            <StyledNavigationList $align={ALIGN.right}>
                <StyledNavigationItem>
                 </StyledNavigationItem>
            </StyledNavigationList>
        </HeaderNavigation>
    );
}
