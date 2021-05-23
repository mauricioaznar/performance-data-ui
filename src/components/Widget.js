import React, {Component} from 'react';
import Cpu from './Cpu'
import Mem from './Mem'
import Info from './Info'
import './widget.css'
import {Container, Flex, Spacer} from "@chakra-ui/react";

class Widget extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {
            freemem,
            upTime,
            osType,
            totalmem,
            usedmem,
            memusage,
            cpuModel,
            cpuSpeed,
            numCores,
            cpuLoad,
            macA,
            isActive,
            pm2List,
            diskusage,
            diskfree,
            diskused,
            disktotal
        } = this.props.data

        const cpuWidgetId = `cpu-widget-${macA}`
        const memWidgetId = `mem-widget-${macA}`
        const cpu = { cpuLoad, cpuWidgetId }
        const mem = {memusage, usedmem, totalmem, freemem, memWidgetId}
        const info = {macA, osType, upTime, cpuModel, cpuSpeed, numCores, pm2List, diskusage, diskfree, diskused, disktotal}

        let notActiveDiv = ''
        if (!isActive) {
            notActiveDiv = <div className="not-active">Offline</div>
        }


        return (
            <Container maxW="container.lg">
                <Flex w={'100%'} align={'center'}>
                    { notActiveDiv }
                    <Cpu cpuData = {cpu} />
                    <Spacer />
                    <Mem memData = {mem} />
                    <Spacer />
                    <Info infoData = {info} />
                </Flex>
            </Container>
        );
    }
}

export default Widget;

