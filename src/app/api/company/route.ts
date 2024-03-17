const COMPANY_SERVER = `${process.env.REACT_APP_SERVER}/company`;

export async function GET(request: Request) {
  try {
    const response = await fetch(COMPANY_SERVER);
    const company = await response.json();

    if (!company) {
      return new Response("company not found", { status: 404 });
    }

    return Response.json({ company });
  } catch (error) {
    throw new Error("Internal Server Error");
  }
}
