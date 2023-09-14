import React from 'react';


export const catchBound = function (Component: React.FC<any>) {
    try {
        return Component;
    } catch (e: any) {
        return <h2>Error { e.message }</h2>;
    }
};

type ErrorBoundaryProps = {
    children: React.ReactNode;
}

type ErrorBoundaryState = {
    error: boolean;
    message: string;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor (props: { children: React.ReactNode }) {
        super(props);
        this.state = {
            error  : false,
            message: '',
        };
    }

    componentDidCatch (error: Error): void {
        this.setState({
            error  : true,
            message: error.message,
        });
    }

    render () {
        const { error } = this.state;
        if (error) {
            return <h2>Error { this.state.message }</h2>;
        } else {
            return <>{ this.props.children }</>;
        }
    }
}