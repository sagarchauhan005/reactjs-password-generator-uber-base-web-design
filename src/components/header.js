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
                    };
                }
            }
        }}>
            <StyledNavigationList $align={ALIGN.left}>
                <StyledNavigationItem>
                    <Avatar
                        name={`Sagar`}
                        size='scale1200'
                        src="https://not-a-real-image.png"
                        key='scale1200'
                    />
                </StyledNavigationItem>
                <StyledNavigationItem>
                    <H3>Sagar Chauhan</H3>
                </StyledNavigationItem>
            </StyledNavigationList>
            <StyledNavigationList $align={ALIGN.center} />
            <StyledNavigationList $align={ALIGN.right}>
                <StyledNavigationItem>
                    <StyledLink href="#basic-link1">
                        Resume
                    </StyledLink>
                </StyledNavigationItem>
                <StyledNavigationItem>
                    <StyledLink href="#basic-link2">
                        Blog
                    </StyledLink>
                </StyledNavigationItem>
                <StyledNavigationItem>
                    <StyledLink href="#basic-link2">
                        Github
                    </StyledLink>
                </StyledNavigationItem>
                <StyledNavigationItem>
                    <StyledLink href="#basic-link2">
                        Contact
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
