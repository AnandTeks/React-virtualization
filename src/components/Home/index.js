import React from 'react';
import { connect } from "react-redux"
import {
    increaseCounter,
    decreaseCounter,
} from "../../redux/Counter/counter.actions";
import {addUserDetails,removeUserDetails} from '../../redux/UserDetails/userdetails.actions'

const mapStateToProps = state => {
    console.log("CALLED MAP STATE TO PROPS", state);
    return {
        count: state.counter.count,
        userDetails: state.userDetail?.userDetails
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increaseCounter: () => dispatch(increaseCounter()),
        decreaseCounter: () => dispatch(decreaseCounter()),
        addUserDetail: (userObject) => dispatch(addUserDetails(userObject)),
        removeUserDetail: () => dispatch(removeUserDetails())
    }
}

class Home extends React.Component {
    constructor(props){
        super(props);
        console.log(props)
        this.state = { userDetails:{
            firstName:'', lastName:'' ,email:''
        }}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            userDetails:  {...this.state.userDetails,[name]: value}
        });
        
    }

    handleSubmit(event) {        
        console.log(this.state);
        this.props.addUserDetail(this.state.userDetails)
       // this.props.addUserDetail(this.state);
       // event.preventDefault();
    }

  


    render() {
       
        return <div>
            
            <form onSubmit={this.handleSubmit}>
                <label>
                    First Name:
                    <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                </label>
                <br/>
                <label>
                    Last Name:
                    <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Email Id:
                    <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>

            <div>
                <div>UserDetails: {this.props.userDetails.firstName}</div>
                <div>Count: {this.props.count}</div>
                <button onClick={() => this.props.increaseCounter()}>Increase Count</button>
                <button onClick={() => this.props.decreaseCounter()}>Decrease Count</button>


                <button onClick={() => this.props.addUserDetail(this.state.userDetails)}>Test</button>
            </div>
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);