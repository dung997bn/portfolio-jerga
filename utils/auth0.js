import { initAuth0 } from "@auth0/nextjs-auth0";
const auth0 = initAuth0({
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  scope: process.env.AUTH0_SCOPE,
  redirectUri: process.env.AUTH0_REDIRECT_URI,
  postLogoutRedirectUri: process.env.AUTH0_POSTLOGOUTREDIRECT_URI,
  session: {
    cookieSecret: process.env.AUTH0_COOKIE_SCERET,
  },
});
export default auth0;

export const authorizeUser = async (req, res) => {
  const session = await auth0.getSession(req);
  if (!session || !session.user) {
    res.writeHead(302, {
      Location: "/api/v1/login",
    });
    res.end();
    return null;
  }
  return session.user;
};

export const withAuth = (getData) => (role) => async ({ req, res }) => {
  console.log(role);
  const session = await auth0.getSession(req);
  console.log(session.user["http://portfolio-jerga.com/roles"]);
  if (!session || !session.user || !isAuthorize(session.user, role)) {
    res.writeHead(302, {
      Location: "/api/v1/login",
    });
    res.end();
    return { props: null };
  }
  const data = getData ? await getData() : {};
  return { props: { user: session.user, ...data } };
};

export const isAuthorize = (user, role) => {
  return user && !user[process.env.AUTH0_NAMESPACE + "/roles"].includes(role);
};
