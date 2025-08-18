import User from "./User";
import UserClass from "./UserClass";

const About  = () => {
    return (
        <div className="about">
            <h1>About page</h1>
            <h1>This is about page..</h1>
            <User name={"Rehan Fazal (function)"}/>
            <UserClass />
        </div>
    )
}

export default About;