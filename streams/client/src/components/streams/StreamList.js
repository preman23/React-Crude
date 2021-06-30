//import { times } from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';


class StreamList  extends React.Component {
    componentDidMount (){
    this.props.fetchStreams();
    }


    renderAdmin(stream){
        
  if( stream.userId === this.props.currentUserId ) 
       { 
       return (
           <div className ="right floated content">
            <Link to={`/streams/edit/${stream.id}`} className="ui button primary">EDIT
            </Link>
            <Link to ={`/streams/delete/${stream.id}`} className ='ui button negative'>
                Delete
            </Link>
               
           </div>

       );
      }
   }
    renderList(){
        return this.props.streams.map( stream => {
            //console.log(stream.userId)
            return (
                <div className = " item" key ={stream.id}>
                    <i className = " large middle icon camera"/>
                    <div className =" content">
                        <Link to={`/streams/${stream.id}`} className="header">{stream.title}</Link>
                        <div className =" description">{stream.description}</div>
                    </div>
                    {this.renderAdmin(stream)}
                </div>
            )
        })
    }
    renderCreate (){
        if(this.props.isSignedIn){
            return (
               // console.log(this.props.isSignIn)
                <div style= {{textAlign: 'right'}}>
                    <Link to ="/streams/new" className ="ui button primary">
                        Create Stream
                    </Link>
                </div>
            );

        }

    }
   render(){
    
    return ( 
            <div>
                <h2>Streams</h2> 
                <div className = "ui celled list">
                    {this.renderList()}
                </div>
                {this.renderCreate()}
            </div>
    );
   }
};
 const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams), // the ojbects values in array
        currentUserId : state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}
export default connect (mapStateToProps,{fetchStreams})(StreamList);