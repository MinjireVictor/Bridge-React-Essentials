
// Importing UserContext from UsersContext.js so we can access the context
import { UserContext } from "../UsersContext";

// Importing useContext from React, which allows us to access values from a context
import { useContext } from 'react';
const UserContextTestB = () => {
     // Using the useContext hook to access the values stored inside UserContext
    // This retrieves both 'users' (the current user list) and 'setUsers' (the function to update the user list)
    const { users, setUsers } = useContext(UserContext);
    // Logging the current list of users to the console
    // This helps us debug and check what data is currently stored in the context
    console.log("USERS IN THE CONTEXT B", users);
    return (
        <div>    
            USER CONTEXT B
        </div>
    )
}

export default UserContextTestB