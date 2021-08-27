import socket from "./utilities/socketConnection";
import {Component} from "react";
import Widget from "./components/Widget";
import {Stack, Text} from "@chakra-ui/react";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            performanceData: {}
        }
    }

    componentDidMount() {
        socket.emit('clientAuth', 'asdfasd')

        socket.on('data', (data) => {
            // inside this callback we just gome some new data!
            // lets update state so we can re-render app --> widget --> cpu
            // we need to make a copy of current state
            // so we can mutate it!
            const currentState = ({...this.state.performanceData})
            // const currentState = Object.assign(this.state.performanceData)
            // currentState is an object! Not an array!
            // the reason for this is so we can use the machines
            // macA as it's property
            // console.log(data)
            currentState[data.macA] = data
            this.setState({
                performanceData: currentState
            })
        })

        socket.on('error', (data) => {
            console.log(data)
        })

        socket.on('reconnect', (data) => {
            socket.emit('clientAuth', 'asdfasd')
        })
    }

    render() {

        // console.log(this.state.performanceData)

        let widgets = []
        const data = this.state.performanceData

        // grab each machine, by property, from data
        Object.entries(data).forEach(([key, value]) => {
            widgets.push(<Widget key={key} data={value}/>)
        })

        return (
            <Stack align={'center'} spacing={20} paddingY={20}>
                <Text width={'100%'} textAlign={'center'} fontSize="4xl">Performance data from personal machines</Text>
                {widgets}
            </Stack>
        )
    };
}

export default App;
