import prisma from "../../utils/connect";

import bcrypt from "bcryptjs";

export const fetchLoginEmplooye = async (email: string, password: string) => {
  try {
    const employee = await prisma.emplooye.findUnique({
      where: {
        email,
      },
    });

    if (!employee) {
      return {
        status: "fail",
        message: "Invalid email or password",
      };
    }

    const isPasswordCorrect = await bcrypt.compare(password, employee.password);

    if (!isPasswordCorrect) {
      return {
        status: "fail",
        message: "Invalid email or password",
      };
    }

    return {
      status: "success",
      message: "Login successful",
      data: employee,
    };
  } catch (error) {
    throw new Error("Error to fetch login");
  }
};
