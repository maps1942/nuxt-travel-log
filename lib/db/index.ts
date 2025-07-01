import { drizzle } from "drizzle-orm/libsql";

import env from "~/lib/env";

import * as schema from "./schema";

// You can specify any property from the libsql connection options
const db = drizzle({
  connection: {
    url: env.TURSO_DATABASE_URL,
    authToken: env.NODE_ENV === "development" ? undefined : env.TURSO_AUTH_TOKEN,
  },
  casingg: "snake_case",
  schema,
});
export default db;
