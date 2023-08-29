import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { headers } from 'next/headers'

export async function GET(req, res) {

  const headersList = headers();
  const list = headersList.get('Bearer');

  return NextResponse.json({"New Auth":list})






  // const headersList = headers()
  // const auth = headersList.has('Authorization')

  // if(auth === true)
  // {
  //   headersList.has('Authorization')

  //   return NextResponse.next(
  //     {"message":"vaid header"},
  //     {
  //       status:200,
  //       headers:{'Bearer':'Rana-ABC-123'}
  //     })
  // }
  // else
  // {
  //   return NextResponse.json({"message":"Invaid header"},{status:401})
  // }
}
