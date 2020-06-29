import * as React from "react";
import { Avatar } from "baseui/avatar";

export default () => {
    return (
        <Avatar overrides={{
            Avatar: {
                style: () => ({
                    borderRadius : '1000px',
                    border:"20px solid #e7e4e4",
                    height:'400px',
                    width:'400px',
                    marginLeft : '175px'
                }),
            },
        }}
            src="https://media-exp1.licdn.com/dms/image/C4D03AQE-s0fTf3br6A/profile-displayphoto-shrink_400_400/0?e=1599091200&v=beta&t=cW8xNgKgydX8uCFhtAr8RMlznS1dIuDvtCBoI2LGmlQ"
        />
    );
}
