export default function ReviewDetailPage({
    params, }: {params: { id: string }}) {

    

    return (
        <div>
            <h1 className="text-black">review detail id {params.id}</h1>
        </div>
    )
}