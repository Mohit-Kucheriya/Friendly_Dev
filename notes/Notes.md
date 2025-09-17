**Creating Routes using React Router i.e. file based routing**

1. In routes folder we'll create folder called home and inside that we'll create index.tsx file.

2. Now, to use this route we'll import it in root.tsx file and add it to the routes array i.e.

```tsx
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home/index.tsx"),
  route("about", "./routes/about/index.tsx"),
] satisfies RouteConfig;
```

**Fetching Data**

1.  `Route` is a generated TypeScript type that ties the loader’s inputs and outputs to the component, so data flows from loader → loaderData with strong typing and SSR-friendly behavior.

2.  ✅ Summary of Flow

          a. User requests '/projects' page.

          b. React Router calls the 'loader' function with a request. request is like the ticket/order slip that comes with every HTTP request.

          It contains info like:

          URL

          Headers

          Cookies

          Method (GET, POST, etc.)

          c. Loader fetches data from your API '(localhost:8000/projects)'.

          d. Loader returns '{ projects: [...] }'. React Router automatically passes what you return in loader into this loaderData.

          e. React Router passes that data into 'ProjectPage' as 'loaderData'.

          f. You display it in your UI.
