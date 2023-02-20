import Child2 from "./Child2";
import { useContext } from "react";
import { UserContext } from "./Parent";
// import { ProductContext } from "./Parent"; 

// export default function Child1({ user }) {
//     return (
//         <>
//             <h1>Child1</h1>
//             <Child2 user={ user }></Child2>
            
//         </>
//     );
// }

export default function Child1() {
    const { user, product } = useContext(UserContext)
    return (
        <>
            <h1>Child1</h1>
            <h1>{ user }</h1>
            {
                product.map((item, index) => {
                    return (
                        <>
                            <h1 key={index}>{ item.id }, {item.name}, {item.price}</h1>
                        </>
                    )
                })
            }
            <Child2></Child2>
            
        </>
    );
}
