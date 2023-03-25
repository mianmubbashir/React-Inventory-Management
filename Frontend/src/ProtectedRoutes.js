import AuthContext from "./AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoutes(props){
    const auth = useContext(AuthContext);
    console.log('====================================');
    console.log(auth);
    console.log('====================================');
    
    if(!auth.user){
        return <Navigate to="/signin" replace />

    }

    return  props.children;


}
export default ProtectedRoutes;