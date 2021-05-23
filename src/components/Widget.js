import React, {Component} from 'react';
import Cpu from './Cpu'
import Mem from './Mem'
import Info from './Info'
import './widget.css'
import {Circle, Container, Flex, Heading} from "@chakra-ui/react";

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
            disktotal,
            hostname
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
                <Flex position={'relative'} w={'100%'} align={'center'} justify={'space-between'} alignItems={'strech'}>
                    { notActiveDiv }
                    <Flex flexGrow={1} direction={'column'} justify={'space-between'}>
                        <Flex align={'center'}>
                            <Circle size="40px" bg={isActive ? 'green' : 'red'} border={'2px solid black'} />
                            <Heading flexGrow={1} size={'lg'} w={'100%'} textAlign={'center'}>{hostname}</Heading>
                        </Flex>
                        <Flex w={'100%'} justify={'space-around'} flexGrow={1} align={'center'}>
                            <Cpu cpuData = {cpu} />
                            <Mem memData = {mem} />
                        </Flex>
                    </Flex>
                    <Info infoData = {info} />
                </Flex>
            </Container>
        );
    }
}

export default Widget;

