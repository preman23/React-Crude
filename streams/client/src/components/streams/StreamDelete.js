import React from 'react';
import Model from '../Model';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import history from '../../history';
import {fetchStream, deleteStream} from '../../actions';


class StreamDelete extends React.Component{
    componentDidMount() { 
       this.props.fetchStream(this.props.match.params.id); 
       }
    renderActions() {
        const {id } = this.props.match.params; // EE16 code to get id
        return (    
            //Note cannot apply multiple jsx code which is div in this case 
            // <div>
            <React.Fragment>
                <Link 
                onClick= { ()=> this.props.deleteStream(id)} 
                className="ui button negative">Delete
                </Link>
                <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment>
            /// </div>  
        ); 
    }
    renderContent(){
        if(!this.props.stream)
        return 'Are you sure you want to delete stream'
        else{
            return `Are you sure you want to delete the stream with title : ${this.props.stream.title}`
        }
    }
    render() {
        return (           
            <div>StreamDelete

                <Model
                    title="Delete Stream"
                    content={this.renderContent()}
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/')}
                />
            </div>
        );
    }
}
const mapStateToProp =(state, ownProps) => {
    return {
        stream : state.streams[ownProps.match.params.id]
    }

}
export default connect (mapStateToProp,{fetchStream,deleteStream}) (StreamDelete);
