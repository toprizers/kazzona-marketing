"use server";

import { login } from "@/lib/auth";
import { prisma } from "@/lib/db";
import bcrypt from "bcryptjs";

export async function authenticate(email: string, password: string) {
  try {
    const admin = await prisma.adminUser.findUnique({
      where: { email },
    });

    if (!admin) {
      return { error: "Invalid email or password." };
    }

    const isPasswordValid = await bcrypt.compare(password, admin.passwordHash);

    if (!isPasswordValid) {
      return { error: "Invalid email or password." };
    }

    // Password is valid, create session
    await login(email);
    return { success: true };
  } catch (error) {
    console.error("Auth error:", error);
    return { error: `Server Error: ${error instanceof Error ? error.message : String(error)}` };
  }
}
