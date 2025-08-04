"use server";
import { sign, verify } from "jsonwebtoken";
import { cookies } from "next/headers";

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
    cookieStore.set("token", token, {
      secure: true,
      maxAge: 1000 * 3600 * 24 * 30,
    });
    console.log("signed success");

    return "/admin?message=Welcome Izaan";
  } catch (error) {
    console.log(error);
    return "/admin/login";
  }
}

export async function logOut() {
  const cookieStore = await cookies();
  cookieStore.set("token", "", { secure: true });
}

export async function verifyAdmin() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value as string;
    if (!token) return false;
    const payload = await verify(token, process.env.JWT_SECRET as string);
    if (payload) return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
