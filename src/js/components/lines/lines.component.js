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

    getBrandNewLineId(oldLine){
        if(!!oldLine){
            return oldLine.id + 1;
        }

        return 0;
    }

    addLine(){
        let {lines: oldLines, newLine} = this.state;

        if(!newLine) return;

        oldLines.push({
            id: this.getBrandNewLineId(oldLines[oldLines.length-1]),
            name: newLine,
            color: 'blue'
        });

        this.setState({lines: oldLines, newLine: ''})
    }

    deleteLine(id){
        let { lines } = this.state;
        lines.splice(id, 1);

        this.setState({lines})
    }

    render(){
       const { newLine, lines } = this.state;
       
       return(<div className={lineStyles['main-container']}>
            <div className={lineStyles['line-component']}>
                <div className={lineStyles['lines-version-container']}>
                    <span className={lineStyles['lines-version']}>v 0.0.1</span>
                </div>
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
                            return (<OneLine key={line.id} 
                                             id={line.id} 
                                             name={line.name}
                                             deleteLine={(id) => this.deleteLine(id)}
                                             />)
                        })
                    }
                </div>
            </div>
        </div>)
    }


}

export default Lines;