import Child3 from "./Child3";
import { useContext } from "react";
import { UserContext } from "./Parent"; 

export default function Child2({ user }) {
    const { user2 } = useContext(UserContext); //we can name the variable as we want not just user
    return (
        <>
            <h1>Child2</h1>
            <h1>{ user2 }</h1>
            <Child3></Child3>
        </>
    );
}