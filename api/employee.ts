import { NextResponse, NextRequest } from "next/server";

import prisma from "@/utils/connect";

const bcrypt = require("bcrypt");
export const loginApi = async (req: NextRequest, res: NextResponse) => {
  try {
    if (req.method !== "POST") {
      return NextResponse.json({ status: "fail", message: "Invalid request" });
    }

    const { email, password } = await req.json();

    const emplooye = prisma.emplooye.findUnique({
      where: {
        email,
      },
    });

    if (!emplooye)
      return NextResponse.json({
        status: "fail",
        message: "invalid credentials",
      });

    const matchPassword = await bcrypt.compare(password, emplooye.password);

    if (!matchPassword)
      return NextResponse.json({
        status: "fail",
        message: "invalid credentials",
      });

    return NextResponse.json({ status: "success", emplooye });
  } catch (error) {
    return NextResponse.json({ status: "error", message: error });
  }
};
