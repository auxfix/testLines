import React, {Component} from 'react';
import lineStyles from './lines.scss';
import OneLine from './oneLine/oneLine.component'


class Lines extends Component{
    constructor(props){
        super(props);

        this.state = {
            lines: [
                {
                    id: 0, name: 'line zero', color: 'red'
                },
                {
                    id: 1, name: 'line one', count: 'blue'    
                },
                {
                    id: 2, name: 'line two', count: 'green'
                }
            ],
            newLine:''
        };
        
    }

    addLine(){
        let {lines: oldLines, newLine} = this.state;

        oldLines.push({
            id: oldLines[oldLines.length-1].id + 1,
            name: newLine,
            color: 'blue'
        });

        this.setState({lines: oldLines, newLine: ''})
    }

    render(){
       const { newLine, lines } = this.state;
       
       return(<div className={lineStyles['main-container']}>
            <div className={lineStyles['line-component']}>
                <h2 className={lineStyles['line-header']}> Lines application (Massive Attack inspired)</h2>
                <div className={lineStyles['input-controls']}>
                    <input value={newLine} onChange={event => {
                        this.setState({newLine: event.target.value})
                    }}/>

                    <button className='btn third' onClick={this.addLine.bind(this)}>
                    {"Add Line"}
                    </button>
                </div>

                <div>
                    {
                        lines.map(line => {
                            return (<OneLine id={line.id} name={line.name}/>)
                        })
                    }
                </div>
            </div>
        </div>)
    }


}

export default Lines;