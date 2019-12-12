import React from "react";
import { Spinner } from 'react-bootstrap';
import './LoadingScreen.scss';

class LoadingScreen extends React.Component {
    render() {
        return (
            <div id="loading-screen" className="container h-100 d-flex">
                <div className="my-auto">
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
            </div>
        );
    }
}

export default LoadingScreen;