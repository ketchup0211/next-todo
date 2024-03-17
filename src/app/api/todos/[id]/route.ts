const TODO_SERVER = `${process.env.REACT_APP_SERVER}/todos`;

export async function DELETE(_: any, { params }: { params: { id: string } }) {
  try {
    await fetch(`${TODO_SERVER}/${params.id}`, { method: "DELETE" });

    return new Response(null, { status: 204 });
  } catch (error) {
    throw new Error("Internal Server Error");
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { isDone } = await request.json();

    await fetch(`${TODO_SERVER}/${params.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isDone }),
    });

    return new Response(null, { status: 204 });
  } catch (error) {
    throw new Error("Internal Server Error");
  }
}
