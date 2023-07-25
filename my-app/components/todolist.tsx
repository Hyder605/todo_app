import { Todo } from "@/lib/drizzle";
import { getData } from "./tododata";






export const TodoList = async () => {
    const data: { DATA: Todo[] } = await getData()
    console.log(data.DATA)

    return (
        <>{
            data.DATA.map((item) => {
                return (
                    <div key={item.ID} className="bg-gray-100 py-4 px-3 flex shadow-md rounded-lg items-center my-1 gap-x-3">
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


