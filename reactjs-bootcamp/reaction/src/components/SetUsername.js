import React from "react";
import { connect } from "react-redux";
import { setUsername } from "../actions/username";

/*
 * anti-pattern: arrow function will be recreated every time the render function is called which is lot in a react application.
 *
const SetUsername = ({ setUsername }) => {
    return (
        <div>
            <h3>username</h3>
            <input onChange={event => setUsername(event.target.value)} />
        </div>
    )
}

export default connect(null, { setUsername })(SetUsername);
*/

const SetUsername = ({ setUsername }) => {
    return (
        <div>
            <h3>username</h3>
            <input onChange={setUsername} />
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        setUsername: event => dispatch(setUsername(event.target.value))
    }
}

export default connect(null, mapDispatchToProps)(SetUsername);