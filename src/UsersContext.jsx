// Importing the createContext function from React, which allows us to create a context object
import { createContext } from "react";

// Importing useState from React, which is a Hook that allows us to add state management to our functional component
import { useState } from "react";

// Creating a new context called UserContext
// Context allows us to share data (like state) between components without having to pass props manually at every level
export const UserContext = createContext({
    users: [],  // This defines the default value for the context, an empty array for storing users
    setUsers: () => {}  // A placeholder function, which will be replaced by the real setUsers function later
});

// Creating a Provider component that will wrap parts of our app that need access to this context
export const UserProvider = ({ children }) => {
    // Using the useState Hook to manage the 'users' state
    // 'users' will store the list of users, and 'setUsers' is the function to update it
    const [users, setUsers] = useState([]);

    // Creating an object that contains our state and the function to update it
    // This object will be provided to any component that consumes the UserContext
    const value = { users: users, setUsers: setUsers };

    // Returning the context provider component
    // The value prop provides our state and setUsers function to all child components
    return (
        <UserContext.Provider value={value}>
            {children} {/* This allows any nested components to have access to the context */}
        </UserContext.Provider>
    );
};
