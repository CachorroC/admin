import prisma from '#@/lib/prisma';
import { NextApiRequest,
         NextApiResponse } from 'next';
import { hash } from 'bcrypt';
import { NextResponse } from 'next/server';

export async function POST(
  req: Request
) {
  const {
    cedula, primerNombre, primerApellido
  }
    = await req.json();

  const exists
    = await prisma.deudor.findUnique(
      {
        where: {
          cedula
        }
      }
    );

  if ( exists ) {
    return NextResponse.json(
      {
        error: 'User already exists'
      },
      {
        status: 400
      }
    );
  }

  const user = await prisma.deudor.create(
    {
      data: {
        cedula,
        primerNombre,
        primerApellido
      }
    }
  );

  /*   const user = await prisma.prismaDeudor.create(
    {
      data: {
        cedula,
        password: await hash(
          password, 10
        )
      }
    }
  ); */

  return NextResponse.json(
    user
  );
}
