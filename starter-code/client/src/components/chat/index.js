import React from 'react';
import {connect} from 'react-redux';
import * as util from '../../lib/__';

// Our Redux Actions
import * as chatActions from './actions';

// TODO: Import io ibrary that connects to the server and dispatches messages to our actions via subscribers

// TODO: Import the redux store that was created in main.js (need to pass this to the io library)

// TODO: import server message subscribers

// TODO: call io() with the store and our subscribers

class Chat extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { content:'' };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(e){
        this.setState({content: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault()
        // Call the messageCreate action with a packet for the server (meta and content)
    }
    
    render() {
        
        // TODO: Iterate the messages in state and display them nicely ...
        return (
            <div className='chat-container'>
                
                <ul>
                </ul>
                
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        value={this.state.content}
                        onChange={this.handleChange} 
                    />
                </form>
            </div>
        )
    }
}


// TODO: map state.chat to props
export const mapStateToProps = (state) => ({
})

// TODO: map the "message" chat action
export const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps,mapDispatchToProps)(Chat);

