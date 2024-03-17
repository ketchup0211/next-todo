const TODO_SERVER = `${process.env.REACT_APP_SERVER}/todos`;

export async function GET(request: Request) {
  try {
    const response = await fetch(TODO_SERVER);
    const todos = await response.json();

    if (!todos) {
      return new Response("todos not found", { status: 404 });
    }

    return Response.json({ todos });
  } catch (error) {
    throw new Error("Internal Server Error");
  }
}

export async function POST(request: Request) {
  try {
    const newTodo = await request.json();

    const response = await fetch(TODO_SERVER, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...newTodo, isDone: false }),
    });

    return Response.json(await response.json());
  } catch (error) {
    throw new Error("Internal Server Error");
  }
}

export async function PATCH(request: Request) {
  const { title, memo, isDone } = await request.json();

  const response = await fetch(TODO_SERVER, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, memo, isDone }),
  });

  const todo = await response.json();

  return Response.json({ todo });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();

  const response = await fetch(TODO_SERVER, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });

  const todo = await response.json();

  return Response.json({ todo });
}
