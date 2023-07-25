

export async function getData() {
    const res = await fetch('https://purple-psychiatrist-vzwgu.ineuron.app:3000/api/todo',{
        method: "GET",
        cache:"no-store",
        headers: {
            "Content-Type": "application/json"
        }
    }
        );

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}