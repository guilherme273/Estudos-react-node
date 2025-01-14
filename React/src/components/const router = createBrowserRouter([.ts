const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/task-detals",
    element: <TaskDetals />,
  },
  {
    path: "/exercises",
    element: <Exercises />,
  },
  {
    path: "/useEff",
    element: <UseEff />,
  },
  {
    path: "/useReff",
    element: <UseRff />,
  },
  {
    path: "/useReduce",
    element: <UseReduce />,
  },
  {
    path: "/useReduce2",
    element: <UseReduce2 />,
  },
  {
    path: "/instagram",
    element: <Instagram />,
  },
  {
    path: "/useMemo",
    element: <UseMemo />,
  },
  {
    path: "/New",
    element: <New />,
  },
  {
    path: "/layouteffect",
    element: <LayoutEffect />,
  },
  {
    path: "/FirstConection",
    element: <FirstConection />,
  },
  {
    path: "/usuarios",
    element: <SecondConection />,
  },
  {
    path: "/myFlix",
    element: <PrivateRoute />,
    children: [
      {
        path: "",
        element: <MyFlix />,
      },
    ],
  },
  {
    path: "/modal",
    element: <Modal />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/assistir",
    element: <Assistir />,
  },
  {
    path: "/Pesquisar",
    element: <Pesquisar />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
]);

{
  clicou ? (
    <img
      onClick={() => setclicou(false)}
      className="icon"
      src="/public/img/coracao-preenchido.png"
    />
  ) : (
    <Heart onClick={() => setclicou(true)} className="icon" size={38} />
  );
}
