import * as React from 'react';
import {Button, SHAPE} from 'baseui/button';
import Upload from 'baseui/icon/upload';
import ArrowRight from 'baseui/icon/arrow-right';
import {ArrowDown} from "baseui/icon";
export default () => (
    <React.Fragment>
        <a href="https://drive.google.com/file/d/1qY2drEeQg6ma-gsyaEz-WfmJJqtRQHgb/view?usp=sharing">
            <p>
                <Button shape={SHAPE.pill} startEnhancer={() => <ArrowDown size={24} />}>
                    Download Resume
                </Button>
            </p>
        </a>
    </React.Fragment>
);
