import { useQuery } from "@apollo/client/react";
import { GET_ROCKETS } from "../queries/RocketQueries.ts";

export default function RocketList() {
    const { data, loading, error, refetch } = useQuery<{ data: any }>(GET_ROCKETS);
    console.log("Data: ", data);
    console.log("Error: ", error);

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error...</div>


    return (
        <section className="space-y-4 ">
            <h2 className="text-3xl font-bold">All Rockets</h2>
            {data?.rockets.map((rocket, index) => (
                <div key={rocket.id}>
                    <p>{rocket.description}</p>
                    <p className="font-semibold">{rocket.active ? "Active" : "Inactive" }</p>
                </div>
            ))}

            <button type="button" className="px-4 py-1 text-white bg-black rounded-sm" onClick={() => refetch({ active: true })}>Get Active List</button>
        </section>
    )
}