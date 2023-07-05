import React from "react";
import { Skeleton } from 'antd'

export default function Skelet(props) {

    return (
        <>
            <Skeleton
                avatar
                active
                title={true}
                paragraph={{ rows: 10 }}
            />
        </>
    );
}
