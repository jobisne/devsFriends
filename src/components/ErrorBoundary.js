import React, { Component } from 'react';


class ErrorBoundary extends Component{
    constructor(){
        super()
        this.state = {
            Error: false
        }
    }
    componentDidCatch(){
        //ComponentdidCatch run like try and catch
        //it will run where there is an error
        this.setState({ Error: true })
    }

    render(){
        if (this.state.Error) {
            return <h1> oooops. There an error</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary;