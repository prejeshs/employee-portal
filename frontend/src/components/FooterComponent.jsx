import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <div>
                <footer className="footer mt-auto py-3 bg-dark text-light">
                    <div className="container text-center">
                        <span>All Rights Reserved &copy; 2024 @EmployeePortal</span>
                    </div>
                </footer>
            </div>
        )
    }
}

export default FooterComponent;
