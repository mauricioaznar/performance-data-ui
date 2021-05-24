import React from 'react';
import {Divider, List, ListIcon, ListItem, Stack} from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import moment from 'moment'

function Info(props){
        const pm2List = props.infoData.pm2List || []
        const upTime = props.infoData.upTime > 0 ? moment().subtract(props.infoData.upTime, 'seconds').fromNow() : '-'

    return (
        <Stack width={'300px'} justify={'center'} spacing={4}>
            <div><strong>Operating System:</strong> {props.infoData.osType}</div>
            <Divider />
            <div><strong>Time Online:</strong> {upTime}</div>
            <Divider />
            <div>Processor information</div>
            <div><strong>Type:</strong> {props.infoData.cpuModel}</div>
            <div><strong>Number of Cores:</strong> {props.infoData.numCores}</div>
            <div><strong>Clock Speed:</strong> {props.infoData.cpuSpeed}</div>
            <Divider />
            <div>PM2 applications</div>
            <List>
                {
                    pm2List.map(pm2App => {
                        return (
                            <ListItem key={pm2App.pm_id}>
                                <ListIcon
                                    as={pm2App.status === 'online' ? CheckIcon : CloseIcon}
                                    color={pm2App.status === 'online' ? 'green' : 'red'}
                                />
                                {pm2App.name}
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