/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query CategoriesGetQuantityBySlug($slug: String!) {\n  categoriesConnection(where: {slug: $slug}) {\n    aggregate {\n      count\n    }\n  }\n}": types.CategoriesGetQuantityBySlugDocument,
    "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    id\n    name\n    price\n    description\n    categories {\n      id\n      name\n      slug\n    }\n    images(first: 5) {\n      url\n      id\n    }\n    reviews(first: 10, orderBy: id_ASC) {\n      id\n      content\n      name\n      rating\n      createdBy {\n        name\n      }\n      createdAt\n    }\n  }\n}": types.ProductGetByIdDocument,
    "fragment ProductListItem on Product {\n  id\n  name\n  description\n  categories(first: 1) {\n    id\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n}": types.ProductListItemFragmentDoc,
    "query ProductsGetList($first: Int, $skip: Int) {\n  products(first: $first, skip: $skip) {\n    ...ProductListItem\n  }\n}": types.ProductsGetListDocument,
    "query ProductsGetListByCategorySlug($first: Int!, $skip: Int!, $slug: String!) {\n  categories(where: {slug: $slug}) {\n    products(first: $first, skip: $skip) {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetListByCategorySlugDocument,
    "query ProductsGetListWithBestRatings($first: Int) {\n  reviews(orderBy: rating_DESC, first: $first) {\n    rating\n    product {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetListWithBestRatingsDocument,
    "query ProductsGetQuantity {\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductsGetQuantityDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesGetQuantityBySlug($slug: String!) {\n  categoriesConnection(where: {slug: $slug}) {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').CategoriesGetQuantityBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    id\n    name\n    price\n    description\n    categories {\n      id\n      name\n      slug\n    }\n    images(first: 5) {\n      url\n      id\n    }\n    reviews(first: 10, orderBy: id_ASC) {\n      id\n      content\n      name\n      rating\n      createdBy {\n        name\n      }\n      createdAt\n    }\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  name\n  description\n  categories(first: 1) {\n    id\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($first: Int, $skip: Int) {\n  products(first: $first, skip: $skip) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetListByCategorySlug($first: Int!, $skip: Int!, $slug: String!) {\n  categories(where: {slug: $slug}) {\n    products(first: $first, skip: $skip) {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetListWithBestRatings($first: Int) {\n  reviews(orderBy: rating_DESC, first: $first) {\n    rating\n    product {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListWithBestRatingsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetQuantity {\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductsGetQuantityDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
