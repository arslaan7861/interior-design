"use server";
import { sign, verify } from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signinAdmin(verificationToken: string | undefined) {
  try {
    if (!verificationToken) return null;
    const user = (await verify(
      verificationToken,
      process.env.JWT_SECRET as string
    )) as {
      name: string;
    };

    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function AttachTokenAction() {
  try {
    const token = await sign(
      { name: "admin_name" },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "30d",
      }
    );
    const cookieStore = await cookies();
    cookieStore.set("token", token, { secure: true });
    redirect("/admin?message=Welcome adminame");
  } catch {
    redirect("admin/login");
  }
}

export async function verifyAdmin() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value as string;
    const payload = await verify(token, process.env.JWT_SECRET as string);
    if (payload) return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
