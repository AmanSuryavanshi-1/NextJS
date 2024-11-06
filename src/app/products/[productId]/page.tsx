export default function ProductDetails({ params } : { params: { productId: string }}) {
    return (
    <div>
        <h1>DETAILS ABOUT PRODUCT {params.productId}</h1>
    </div>
    )
}