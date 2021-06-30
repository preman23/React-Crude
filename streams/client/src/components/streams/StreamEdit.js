import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
//mport { formValues } from 'redux-form';
import {fetchStream, editStream} from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component{
    componentDidMount(){
     this.props.fetchStream(this.props.match.params.id);
     console.log(this.props.stream)
    }
    onSubmit = (formValues)=>  {
        this.props.editStream(this.props.match.params.id,formValues);
    }
        render(){        
            if(!this.props.stream){
                return<div>Loading...</div>
            }
                return (
                <div>
                    <h3>Edit a Stream

                    </h3>
                        <StreamForm 
                        initialValues={_.pick(this.props.stream,'title','description')} // refer to screen shot edit lodash
                        onSubmit={this.onSubmit} 

                        />
                </div>
                );

            }
}
const mapStateToProps = (state, ownProps) => { //shows ownProps the prop values when we use mapStateToProps
    return {stream: state.streams[ownProps.match.params.id]};
}
export default connect (mapStateToProps,{fetchStream,editStream})(StreamEdit);