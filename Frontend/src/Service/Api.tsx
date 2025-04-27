
export async function FetchProducts() {
    const res = await fetch(`https://fakestoreapi.com/products`)
    return await res.json()
}

export async function FetchProduct(params: { id: number }) {
    const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
    return await res.json()
}