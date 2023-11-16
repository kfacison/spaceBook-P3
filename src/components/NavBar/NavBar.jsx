import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({user, setUser}){
    function handleLogOut(){
        userService.logOut();
        // Update state will also cause a re-render
        setUser(null);
    }
    return (
        <nav>
            <Link to="/orders">Order History</Link>
            &nbsp; | &nbsp;
            <Link to="/orders/new">New Order</Link>
            <p>Welcome, {user.name}</p>
            <Link to="" onClick={ handleLogOut }>Log Out</Link>
        </nav>
    );
}