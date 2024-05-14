import prisma from "@/utils/connect";

export async function loginAsync(password: string, email: string) {
  try {
    const emplooye = await prisma.emplooye.findOne({
      where: {
        email,
        password,
      },
    });

    return emplooye;
  } catch (error) {
    return error;
  }
}
