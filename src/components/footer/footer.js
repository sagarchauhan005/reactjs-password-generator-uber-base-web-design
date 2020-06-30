import * as React from 'react';
import {useStyletron} from 'baseui';
import {Grid, Cell} from 'baseui/layout-grid';
import {StyledLink} from "baseui/link";
export default () => (
    <Outer>
        <Grid>
            <Cell span={[1, 2, 3]}>
                <Inner>
                    <StyledLink href="https://www.facebook.com/sagar.chauhan3">
                        Facebook
                    </StyledLink>
                </Inner>
            </Cell>
            <Cell span={[1, 2, 3]}>
                <Inner>
                    <StyledLink href="https://twitter.com/chauhansahab005">
                        Twitter
                    </StyledLink>
                </Inner>
            </Cell>
            <Cell span={[1, 2, 3]}>
                <Inner>
                    <StyledLink href="https://www.instagram.com/sagar.chauhan.005/">
                        Instagram
                    </StyledLink>
                </Inner>
            </Cell>
            <Cell span={[1, 2, 3]}>
                <Inner>
                    <StyledLink href="https://www.linkedin.com/in/sagar-chauhan/">
                        LinkedIn
                    </StyledLink>
                </Inner>
            </Cell>
        </Grid>
    </Outer>
);
const Outer = ({children}) => {
    const [css, theme] = useStyletron();
    return (
        <div
            className={css({
                backgroundColor : "#e7e4e4",
            })}
        >
            {children}
        </div>
    );
};
const Inner = ({children}) => {
    const [css, theme] = useStyletron();
    return (
        <div
            className={css({
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop : '20px',
                marginBottom : '20px',
                padding: '.25rem',
            })}
        >
            {children}
        </div>
    );
};
