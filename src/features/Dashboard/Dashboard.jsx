import { Link } from 'react-router'

const Dashboard = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="flex flex-col">
                <Link
                    className="btn btn-primary my-2">
                    Counter App
                </Link>
            </div>
        </div>
    )
}

export default Dashboard