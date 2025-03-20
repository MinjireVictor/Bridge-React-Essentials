
// Importing the UserDisplay component, which will be used inside this component
import UserDisplay from "../UserDisplay";

// Importing UserContext from UsersContext.js so we can access the context
import { UserContext } from "../UsersContext";

// Importing useContext from React, which allows us to access values from a context
import { useContext } from 'react';

const UsersContextTest = () => {

    // Using the useContext hook to access the values stored inside UserContext
    // This retrieves both 'users' (the current user list) and 'setUsers' (the function to update the user list)
    const { users, setUsers } = useContext(UserContext);

    // Logging the current list of users to the console
    // This helps us debug and check what data is currently stored in the context
    console.log("USERS IN THE CONTEXT ", users);

    return (
        // A container div with a specific width and height, defining the UI layout
        <div className="w-[300px] h-[400px]">
            {/* A heading displaying "Users" */}
            <h1>Users</h1>

            {/* Rendering the UserDisplay component */}
            {/* Passing the setUsers function as a prop named "saveUsers" */}
            {/* This allows UserDisplay to update the list of users using setUsers */}
            <UserDisplay saveUsers={setUsers} />
        </div>
    );
};

// Exporting the UserTest component so it can be used in other parts of the application
export default UsersContextTest;