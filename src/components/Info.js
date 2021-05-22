import React from 'react';
import moment from 'moment'
import {Divider, Stack} from "@chakra-ui/react";

function Info(props){



    return (
        <Stack width={'300px'} justify={'center'} spacing={4}>
            <div><strong>Operating System:</strong> {props.infoData.osType}</div>
            <Divider />
            <div><strong>Time Online:</strong> {moment.duration(props.infoData.upTime).humanize()}</div>
            <Divider />
            <div>Processor information</div>
            <div><strong>Type:</strong> {props.infoData.cpuModel}</div>
            <div><strong>Number of Cores:</strong> {props.infoData.numCores}</div>
            <div><strong>Clock Speed:</strong> {props.infoData.cpuSpeed}</div>
        </Stack>
    );
}

export default(Info);