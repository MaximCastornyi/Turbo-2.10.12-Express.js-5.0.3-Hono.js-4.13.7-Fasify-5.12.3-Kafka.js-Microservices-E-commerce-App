import { SignIn } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Page() {


    const { userId } = await auth();

    // Если пользователь уже вошел, отправляем его на главную
    if (userId) {
        redirect("/");
    }

    return (
        <div className="flex items-center justify-center mt-16">
            <SignIn />
        </div>
    )
}
