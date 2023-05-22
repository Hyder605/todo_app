import { Todo } from "@/lib/drizzle";


export async function getData() {
    const res = await fetch('https://purple-psychiatrist-vzwgu.ineuron.app:3000/api/todo');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}



export const TodoList = async () => {
    const data: { DATA: Todo[] } = await getData()
    // console.log(data.DATA)

    return (
        <>{
            data.DATA.map((item) => {
                return (
                    <div key={item.Id} className="bg-gray-100 py-4 px-3 flex shadow-md rounded-lg items-center my-1 gap-x-3">
                        {/* circle */}
                        <div className="h-3 w-3 bg-red-400 rounded-full"></div>
                        <p className="">{item.Task}</p>
                    </div>
                )

            })
        }
        </>


    )
}


