**Creating Routes using React Router i.e. file based routing**

1. In routes folder we'll create folder called home and inside that we'll create index.tsx file.

2. Now, to use this route we'll import it in root.tsx file and add it to the routes array i.e.

```tsx
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home/index.tsx"),
  route("about", "routes/about/index.tsx"),
] satisfies RouteConfig;
```
