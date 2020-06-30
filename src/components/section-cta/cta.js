import * as React from 'react';
import {useStyletron} from 'baseui';
import {Grid, Cell} from 'baseui/layout-grid';
import CtaButton from './cta-button';
import {H1} from "baseui/typography";

const heading = {
  marginRight : '50px',
};

export default () => (
    <Outer>
        <Grid>
            <Cell skip={1} span={[4, 8, 12]}>
                <Inner>
                    <H1 {...heading}>Sounds Interesting?</H1>
                    <CtaButton/>
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
                marginTop : '200px',
                marginBottom : '150px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '.25rem',
            })}
        >
            {children}
        </div>
    );
};
