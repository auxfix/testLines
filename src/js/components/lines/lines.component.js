import React, {Component} from 'react';
import lineStyles from './lines.scss';
import OneLine from './oneLine/oneLine.component';
import {connect} from 'react-redux';
import { addLine, deleteLine } from '../../reducers/lines/lines';

const mapStateToProps = ({lines}) => ({ lines: lines.toJS() });
const mapDispatchToProps = (dispatch) => ({
     addLineAction: (line) => dispatch(addLine({line})),
     deleteLineAction: (id) => dispatch(deleteLine({id}))
});

@connect(mapStateToProps, mapDispatchToProps)
class Lines extends Component{
    constructor(props){
        super(props);

        this.state = {
            newLine:''
        };
        
    }

    addLineHandler = () => {
        let { newLine } = this.state;

        if(!newLine) return;

        let { addLineAction } = this.props;

        addLineAction({name: newLine});
        this.setState({ newLine: ''})
    }

    deleteLineHandler = (id) => {
        const { deleteLineAction } = this.props;
        deleteLineAction(id);
    }

    render(){
       const { newLine } = this.state;
       const { lines } = this.props;
       
       return(<div className={lineStyles['main-container']}>
            <div className={lineStyles['line-component']}>
                <div className={lineStyles['lines-version-container']}>
                    <span className={lineStyles['lines-version']}>v {__VERSION__}</span>
                </div>
                <h2 className={lineStyles['line-header']}> Lines application (Massive Attack inspired)</h2>
                <div className={lineStyles['input-controls']}>
                    <input value={newLine} onChange={event => {
                        this.setState({newLine: event.target.value})
                    }}/>

                    <button className='btn third' onClick={this.addLineHandler}>
                    {"Add Line"}
                    </button>
                </div>

                <div>
                    {
                        
                        lines.map(line => {
                            return (<OneLine key={line.id} 
                                             line={line}
                                             onDeleteLine={this.deleteLineHandler}
                                             />)
                        })
                    }
                </div>
            </div>
        </div>)
    }


}

export default Lines;