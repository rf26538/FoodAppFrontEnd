
import React from "react";
import userContext from "../utils/userContext";

class UserClass extends React.Component {
     constructor(props) {
        super(props);
        this.state = {
            // count : 2,
            // count2 : 3,
            userInfo : {
                name : "Rehan Fazal"
            }
        }
        console.log(" Constructor called first every time");
    } 

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        console.log(json);
        
        this.setState({
            userInfo : json,
        })

        console.log(" Component did monunt in last after all work");
    }

    componentDidUpdate() {
        console.log("Component did update");
    }

    componentWillUnmount() {
        console.log("Component will Unmount");
    }

    render() {
        console.log(" Render called second every time");

        const { name } = this.state.userInfo;
        return (
        <div className='user-card'>
            {/* <h2>Count : { this.state.count }</h2>
            <h2>Count2 : { this.state.count2 }</h2>
            <button onClick={() => {
                    this.setState({
                        count : this.state.count + 2,
                        count2 : this.state.count2 + 1,
                    })
                }
            }>Increase count</button>
            <h2>Name : {this.props.name}</h2>
             */}
            <h2>Name : { name }</h2>
            <h3>Location : Bihar</h3>
                <userContext.Consumer>
                    {
                        ({loggedInUser}) => <h1>{loggedInUser}</h1>
                    }
                </userContext.Consumer>
            <h4>Contact : @amanfazal002</h4>
        </div>
        ) 
    }
}

export default UserClass