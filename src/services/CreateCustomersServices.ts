import prismaClient from "../prisma";

interface CreateCustomersProps {
  name: string,
  email: string,
}

class CreateCustomersServices {
  async handler({ name, email }: CreateCustomersProps) {

    if(!name || !email){
      throw new Error("Preencha todos os campos");
    }

    const customer = await prismaClient.customer.create({
      data:{
        name,
        email,
        status: true
      }
    })

    return customer;
  }
}

export { CreateCustomersServices };
