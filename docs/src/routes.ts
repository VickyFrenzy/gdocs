import Home from "./routes/Home.svelte";
import Lorem from "./routes/Lorem.svelte";
import NotFound from "./routes/NotFound.svelte";
import RouteController from "./routes/RouteController.svelte";

export type Routes = Record<string, any>;

export default {
  "/": Home,
  "/lorem/:repeat": Lorem,
  "/:tab/:category/:subcategory?": RouteController,
  // The catch-all route must always be last
  "*": NotFound,
} as Routes;

// // Function to generate routes dynamically based on parsed JSON data
// export function generateRoutes(project: any) {
//   const routes: Routes = {
//     "/": Home, // Default route
//     "*": NotFound, // Catch-all route
//   };

//   // Check if parsedData and its structure exist
//   if (project) {
//     // Iterate over project tabs and their categories
//     for (const tabKey in project) {
//       const tab = project[tabKey];
//       for (const categoryKey in tab.categories) {
//         const category = tab.categories[categoryKey];

//         // Check if subcategories exist for the category
//         if (category.subcategories) {
//           for (const subcategoryKey in category.subcategories) {
//             const subcategory = category.subcategories[subcategoryKey];
//             const path = `/${tabKey}/${categoryKey}/${subcategoryKey}`;
//             // Add route for each subcategory
//             routes[path] = subcategory.item.endsWith("table")
//               ? TablePage
//               : CategoryPage;
//           }
//         } else {
//           const path = `/${tabKey}/${categoryKey}`;
//           // Add route for each category
//           routes[path] = category.item.endsWith("table")
//             ? TablePage
//             : CategoryPage;
//         }
//       }
//     }
//   }

//   return routes;
// }

// // Export the generated routes
// export default generateRoutes;
