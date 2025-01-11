import { AppBar, Container, Stack } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

type RouteLinkProps = {
  to: string,
  name: string,
}

function RouteLink({to,name}: RouteLinkProps) {
  return <Link to={to}>{name}</Link>
}

const AppLayout = () => {
  return (
    <div>
      <AppBar component="header" position="relative">
        <Container>
          <Stack direction="row" spacing={2}>
            <RouteLink to="/" name="Home"/>
            <RouteLink to="/products" name="Products"/>
            <RouteLink to="/posts" name="Posts"/>
            <RouteLink to="/todos" name="Todos"/>
          </Stack>
        </Container>
      </AppBar>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <footer></footer>
    </div>
  );
};

export default AppLayout;
