import withRouter from "components/withRouter";

const NonAuthLayout = ({ children }: any) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default withRouter(NonAuthLayout)