import React from 'react';
import { connect } from "react-redux"

class About extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return <h1>welcome to About Component {this.props.count}</h1>
    }
}
const mapStateToProps = state => {
    return {
        count: state.counter.count,
    }
}
export default connect(mapStateToProps)(About);