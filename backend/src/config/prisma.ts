// src/config/prisma.ts
import pkg from '@prisma/client';

// 디버깅을 위해 추가 (실행 시 터미널에 출력됨)
console.log('Prisma Package Loaded:', Object.keys(pkg));

const { PrismaClient } = pkg;
export const prisma = new PrismaClient();