/**
 * ---------------------
 * 🚗🚦 Generated by vite-plugin-typed-router. Do not modify !
 * ---------------------
 * */

export const routesNames = {
  activate: 'activate' as const,
  index: 'index' as const,
  childOne: {
    childOneChildOneSubOne: 'parent-child-one-child-one-sub-one' as const,
    user: { oneChildOneSubOneUserId: 'parent-child-one-child-one-sub-one-user-id' as const },
    childOneChildOneSubTwo: 'parent-child-one-child-one-sub-two' as const,
    index: 'parent-child-one' as const,
  },
  childTwo: {
    childTwoId: 'parent-child-two-id' as const,
    childTwoChildOneSubOneUser: 'parent-child-two-child-one-sub-one-user' as const,
    childTwoChildOneSubOne: 'parent-child-two-child-one-sub-one' as const,
    index: 'parent-child-two' as const,
    profile: {
      id: {
        profileIdSlug: 'parent-child-two-profile-id-slug' as const,
        index: 'parent-child-two-profile-id' as const,
      },
      index: 'parent-child-two-profile' as const,
    },
  },
  rootPage: 'rootPage' as const,
  test: 'test' as const,
};

export type TypedRouteList =
  | 'activate'
  | 'index'
  | 'parent-child-one-child-one-sub-one'
  | 'parent-child-one-child-one-sub-one-user-id'
  | 'parent-child-one-child-one-sub-two'
  | 'parent-child-one'
  | 'parent-child-two-id'
  | 'parent-child-two-child-one-sub-one-user'
  | 'parent-child-two-child-one-sub-one'
  | 'parent-child-two'
  | 'parent-child-two-profile-id-slug'
  | 'parent-child-two-profile-id'
  | 'parent-child-two-profile'
  | 'rootPage'
  | 'test';
