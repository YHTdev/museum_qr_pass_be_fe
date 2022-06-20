// import { signin } from "../../utils/apiRoutes";

// export default async function handler(req, res) {
//   console.log("inside api signin -->", req.body);
//   try {
//     const signinUser = await signin(req.body);
//     // const set = setItem(signinUser, sessionStorage);
//     // console.log("set -->", set);
//     console.log("signinUser ->", signinUser);
//   } catch (error) {}
// }

/*
 * references:
 * https://github.com/vvo/iron-session
 * https://www.npmjs.com/package/next-session
 * https://morioh.com/p/b190ae0de0f8
 * https://azeezatraheem.medium.com/implementing-authentication-redirects-in-next-js-c15907ec82b7
 * https://dev.to/devlargs/nextjs-hook-for-accessing-local-or-session-storage-variables-3n0
 */

import { withIronSessionApiRoute } from "iron-session/next";

export default withIronSessionApiRoute(
  async function loginRoute(req, res) {
    // get user from database then:
    req.session.user = {
      id: 230,
      admin: true,
    };
    await req.session.save();
    res.send({ ok: true });
  },
  {
    cookieName: "myapp_cookiename",
    password: "complex_password_at_least_32_characters_long",
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  }
);
