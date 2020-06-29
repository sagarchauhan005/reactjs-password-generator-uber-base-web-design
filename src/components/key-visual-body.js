import * as React from 'react';
import {useStyletron} from 'baseui';
import {Grid, Cell} from 'baseui/layout-grid';
import CircularImage from './circualr-image';
import AboutDesc from './about-description';
export default () => (
    <Outer>
        <Grid>
            <Cell span={[1, 4, 6]}>
                <Inner>
                    <CircularImage/>
                </Inner>
            </Cell>
            <Cell span={[1, 4, 6]}>
                <Inner>
                    <AboutDesc/>
                </Inner>
            </Cell>
        </Grid>
    </Outer>
);
const Outer = ({children}) => {
    const [css, theme] = useStyletron();
    return (
        <div className={'key-visual'}>
            {children}
        </div>
    );
};
const Inner = ({children}) => {
    const [css, theme] = useStyletron();
    return (
        <div>
            {children}
        </div>
    );
};
