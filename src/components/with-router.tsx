import { useLocation, useNavigate, useParams } from "react-router-dom";

function withRouter(Component: any) {
    function ComponentWithRouterProp(props: any) {
        const location = useLocation();
        const param = useParams();
        const navigate = useNavigate();
        return (
            <Component {...props} router={{ location, navigate, param }} />
        );
    }
    return ComponentWithRouterProp;
}

export default withRouter;
