import {
    Route,
    Redirect
} from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => {
            return (sessionStorage.isUserLoggedin === 'true'
                ? <Component {...props} />
                : <Redirect
                    to={{
                        pathname: "/auth/login",
                        state: { from: props.location } // important to put
                    }}
                />)
        }}
    />
);

export default PrivateRoute;
