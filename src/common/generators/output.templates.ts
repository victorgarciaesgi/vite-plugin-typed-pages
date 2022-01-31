export const signatureTemplate = `/** 
  * ---------------------
  * 🚗🚦 Generated by vite-plugin-typed-pages. Do not modify !
  * ---------------------
  * */
 
`;

export const staticDeclImports = `
import type {
  NavigationFailure,
  RouteLocation,
  RouteLocationNormalizedLoaded,
  RouteLocationOptions,
  RouteQueryAndHash,
} from 'vue-router';
import type { TypedRouteList } from './__routes'
`;

export const staticDeclarations = `
  type TypedRouteParamsStructure = {
    [K in TypedRouteList]: Record<string, string | number> | never;
  };
  
  type TypedLocationAsRelativeRaw<T extends TypedRouteList> = {
    name?: T;
    params?: TypedRouteParams[T];
  };
  
  type TypedRouteLocationRaw<T extends TypedRouteList> = RouteQueryAndHash &
    TypedLocationAsRelativeRaw<T> &
    RouteLocationOptions;
  
  export interface TypedRouter {
    /**
     * Remove an existing route by its name.
     *
     * @param name - Name of the route to remove
     */
    removeRoute(name: TypedRouteList): void;
    /**
     * Checks if a route with a given name exists
     *
     * @param name - Name of the route to check
     */
    hasRoute(name: TypedRouteList): boolean;
    /**
     * Returns the {@link RouteLocation | normalized version} of a
     * {@link RouteLocationRaw | route location}. Also includes an \`href\` property
     * that includes any existing \`base\`. By default the \`currentLocation\` used is
     * \`route.currentRoute\` and should only be overriden in advanced use cases.
     *
     * @param to - Raw route location to resolve
     * @param currentLocation - Optional current location to resolve against
     */
    resolve<T extends TypedRouteList>(
      to: TypedRouteLocationRaw<T>,
      currentLocation?: RouteLocationNormalizedLoaded
    ): RouteLocation & {
      href: string;
    };
    /**
     * Programmatically navigate to a new URL by pushing an entry in the history
     * stack.
     *
     * @param to - Route location to navigate to
     */
    push<T extends TypedRouteList>(
      to: TypedRouteLocationRaw<T>
    ): Promise<NavigationFailure | void | undefined>;
    /**
     * Programmatically navigate to a new URL by replacing the current entry in
     * the history stack.
     *
     * @param to - Route location to navigate to
     */
    replace<T extends TypedRouteList>(
      to: TypedRouteLocationRaw<T>
    ): Promise<NavigationFailure | void | undefined>;
  }
  
  declare module 'nuxt3/dist/app/nuxt' {
    export interface NuxtApp {
      $typedRouter: TypedRouter;
      $routesList: RouteListDecl;
    }
  }

  declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
      $typedRouter: TypedRouter;
      $routesList: RouteListDecl;
    }
  }
  `;
