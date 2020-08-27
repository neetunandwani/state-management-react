import React from "react";

export class ClassComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            abc: "test"
        }
    }



    render() {
        return (<div>this.state.abc</div>);
    }
}

// export default ClassComponent