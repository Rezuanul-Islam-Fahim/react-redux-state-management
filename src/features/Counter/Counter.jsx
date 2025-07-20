import { Link } from 'react-router'

const Counter = () => {
    return (
        <div className="items-center justify-center py-12">
            <div className="flex flex-row items-center justify-center mb-10">
                <button className="btn btn-accent btn-circle text-xl font-bold text-center">
                    -
                </button>
                <h1 className="text-6xl px-5">0</h1>
                <button className="btn btn-accent btn-circle text-xl font-bold text-center">
                    +
                </button>
            </div>
            <div className="flex flex-row items-center justify-center mb-5">
                <input
                    type="number"
                    className="input input-bordered w-20 text-center font-bold text-lg" />
                <button className="btn btn-neutral w-60 ml-5">Add Amount</button>
            </div>
            <div className="flex flex-row items-center justify-center">
                <button className="btn btn-neutral w-60 mr-1">Add Async</button>
                <button className="btn btn-neutral w-60 ml-1">Add If Odd</button>
            </div>
            <div className="flex justify-center mt-40">
                <Link to='/' className="btn btn-outline">Back to Dashboard</Link>
            </div>
        </div>
    )
}

export default Counter