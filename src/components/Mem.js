import React, {Component} from 'react';
import {Box, CircularProgress, Stat, StatHelpText, StatLabel, StatNumber} from "@chakra-ui/react";

class Mem extends Component {
    render() {
        const {totalmem, freemem} = this.props.memData

        const memusage = this.props.memData.memusage === 0 ? 0.000001 : Math.floor(this.props.memData.memusage * 100)

        let color

        if(memusage < 20){
            color = 'green';
        }else if(memusage < 40){
            color = 'blue';
        }else if(memusage < 60){
            color = 'yellow';
        }else{
            color = 'red';
        }


        const totalMemInGb = (Math.floor(totalmem/1073741824 * 100)) / 100
        const freeMemInGb = (Math.floor(freemem/1073741824 * 100)) / 100

        return (
            <Box position={'relative'}>
                <CircularProgress value={memusage} size="300px" color={color} />
                <Stat w={'100%'} position={'absolute'} top={'50%'}  transform={'translateY(-50%)'} size={'lg'}>
                    <StatLabel textAlign={'center'}>Mem usage</StatLabel>
                    <StatNumber textAlign={'center'}>{memusage}%</StatNumber>
                    <StatHelpText textAlign={'center'}>Total memory: {totalMemInGb } GB</StatHelpText>
                    <StatHelpText textAlign={'center'}>Free memory: { freeMemInGb } GB</StatHelpText>
                </Stat>
            </ Box>
        );
    }
}

export default Mem;