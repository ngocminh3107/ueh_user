export default function EventDetail({
    params, }: {params: { id: string }}) {
    return (
        <div>
            <h1 className="text-black">Event detail id {params.id}</h1>
        </div>
    )
}