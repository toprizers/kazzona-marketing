import { PrismaClient } from "@prisma/client";
import path from "path";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Force absolute path for SQLite to prevent Hostinger production path bugs
const dbPath = path.join(process.cwd(), "prisma", "dev.db");
const databaseUrl = `file:${dbPath}`;

// Ensure env var is set for Next.js build time when Hostinger ignores .env
process.env.DATABASE_URL = databaseUrl;

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    datasources: {
      db: {
        url: databaseUrl,
      },
    },
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
