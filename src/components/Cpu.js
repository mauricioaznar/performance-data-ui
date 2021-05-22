import React, {Component} from 'react';
import {Box, CircularProgress, Stat, StatLabel, StatNumber} from "@chakra-ui/react";


class Cpu extends Component {

    render() {
        // const canvas = document.querySelector(`.${this.props.cpuData.cpuWidgetId}`)
        // drawCircle(canvas, this.props.cpuData.cpuLoad)

        const cpuLoad = this.props.cpuData.cpuLoad === 0 ? 0.000001 : this.props.cpuData.cpuLoad

        let color

        if(cpuLoad < 20){
            color = 'green';
        }else if(cpuLoad < 40){
            color = 'blue';
        }else if(cpuLoad < 60){
            color = 'yellow';
        }else{
            color = 'red';
        }

        return (
            <Box position={'relative'}>
                <CircularProgress value={cpuLoad} size="300px" color={color} />
                <Stat w={'100%'} position={'absolute'} top={'50%'}  transform={'translateY(-50%)'} size={'lg'}>
                    <StatLabel textAlign={'center'}>CPU load</StatLabel>
                    <StatNumber textAlign={'center'}>{this.props.cpuData.cpuLoad}%</StatNumber>
                </Stat>
            </Box>
        );
    }
}

export default Cpu;