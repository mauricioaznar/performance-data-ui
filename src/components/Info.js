import React from 'react';
import {Divider, List, ListIcon, ListItem, Stack} from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import moment from 'moment'

function Info(props){

    const pm2List = props.infoData.pm2List || []

    return (
        <Stack width={'300px'} justify={'center'} spacing={4}>
            <div><strong>Operating System:</strong> {props.infoData.osType}</div>
            <Divider />
            <div><strong>Time Online:</strong> {moment().subtract(props.infoData.upTime, 'seconds').fromNow()}</div>
            <Divider />
            <div>Processor information</div>
            <div><strong>Type:</strong> {props.infoData.cpuModel}</div>
            <div><strong>Number of Cores:</strong> {props.infoData.numCores}</div>
            <div><strong>Clock Speed:</strong> {props.infoData.cpuSpeed}</div>
            <Divider />
            <div>PM2 applications</div>
            <List>
                {
                    pm2List.map(nodeApp => {
                        return (
                            <ListItem key={nodeApp.pm_id}>
                                <ListIcon
                                    as={nodeApp.pm2_env.status === 'online' ? CheckIcon : CloseIcon}
                                    color={nodeApp.pm2_env.status === 'online' ? 'green' : 'red'}
                                />
                                {nodeApp.name}
                            </ListItem>

                        )
                    })
                }
            </List>
            <Divider />
            <div>Disk information</div>
            <div><strong>Usage</strong> {props.infoData.diskusage}%</div>
            <div><strong>Disk total:</strong> {props.infoData.disktotal}GB</div>
            <div><strong>Disk free:</strong> {props.infoData.diskfree}GB</div>
            <div><strong>Disk used:</strong> {props.infoData.diskused}GB</div>
        </Stack>
    );
}

export default(Info);