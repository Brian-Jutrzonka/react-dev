import React from "react";

class Example extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};
	}

    render(){
		const addOneToCount = () => {
			this.setState({ 
				count: this.state.count + 1 
			})
		}

       return(
           <div>
               <h1 onClick={addOneToCount}>{this.state.count}</h1>
               <div></div>
           </div>   
        )
    }
}

export default Example;