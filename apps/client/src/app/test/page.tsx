import { auth } from "@clerk/nextjs/server";

const TestPage = async () => {
    const { getToken } = await auth();
    const token = await getToken();

    console.log(token);

    // Product Service
    const resProduct = await fetch("http://localhost:8000/test", {
        headers: {
            Authorization: token ? `Bearer ${token}` : "",
        },
        cache: "no-store",
    });
    const dataProduct = resProduct.ok ? await resProduct.json() : await resProduct.text();
    console.log("Product:", dataProduct);

    // Order Service
    const resOrder = await fetch("http://localhost:8001/test", {
        headers: {
            Authorization: token ? `Bearer ${token}` : "",
        },
        cache: "no-store",
    });
    const dataOrder = resOrder.ok ? await resOrder.json() : await resOrder.text();
    console.log("Order:", dataOrder);

    // Payment Service
    const resPayment = await fetch("http://localhost:8002/test", {
        headers: {
            Authorization: token ? `Bearer ${token}` : "",
        },
        cache: "no-store",
    });
    const dataPayment = resPayment.ok ? await resPayment.json() : await resPayment.text();
    console.log("Payment:", dataPayment);

    return <div className="">TestPage</div>;
};

export default TestPage;