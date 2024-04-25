import withRouter from "components/with-router";

const NonAuthLayout = ({ children }: any) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default withRouter(NonAuthLayout)