import React from 'react';

class App extends React.Component{
    constructor(){
        super();
        this.state={
            input:"/* add your JSX here */",
            output:'',
            err:''
        }

        this.update=this.update.bind(this);
    }

    update(e){
        let code=e.target.value;
        try{
            this.setState({
                output:babel.transform(code,{
                    stage:0,
                    loose:'all',
                }).code,
                err:'',
            });
        }
        catch(err){
            this.setState({err:err.message});
        }
    }

    render(){
        return(
            <div>
                <header>Error: {this.state.err}</header>
                <div className="container">
                    <textarea
                       onChange={this.update}
                       defaultValue={this.state.input}
                    ></textarea>
                    <div id="op">
                    <pre >
                       Output: <br/>
                       <br/>
                       {this.state.output}
                    </pre>
                    </div>
                </div>
            </div>
            );
    }
}


export default App;