import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** A character from the Star Wars universe */
export type Character = {
  /** The movies this character appears in */
  appearsIn: Array<Maybe<Episode>>;
  /** The friends of the character, or an empty list if they have none */
  friends?: Maybe<Array<Maybe<Character>>>;
  /** The friends of the character exposed as a connection with edges */
  friendsConnection: FriendsConnection;
  /** The ID of the character */
  id: Scalars['ID'];
  /** The name of the character */
  name: Scalars['String'];
};


/** A character from the Star Wars universe */
export type CharacterFriendsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
};

/** The input object sent when passing in a color */
export type ColorInput = {
  blue: Scalars['Int'];
  green: Scalars['Int'];
  red: Scalars['Int'];
};

/** An autonomous mechanical character in the Star Wars universe */
export type Droid = Character & {
  __typename?: 'Droid';
  /** The movies this droid appears in */
  appearsIn: Array<Maybe<Episode>>;
  /** This droid's friends, or an empty list if they have none */
  friends?: Maybe<Array<Maybe<Character>>>;
  /** The friends of the droid exposed as a connection with edges */
  friendsConnection: FriendsConnection;
  /** The ID of the droid */
  id: Scalars['ID'];
  /** What others call this droid */
  name: Scalars['String'];
  /** This droid's primary function */
  primaryFunction?: Maybe<Scalars['String']>;
};


/** An autonomous mechanical character in the Star Wars universe */
export type DroidFriendsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
};

/** The episodes in the Star Wars trilogy */
export enum Episode {
  /** Star Wars Episode V: The Empire Strikes Back, released in 1980. */
  Empire = 'EMPIRE',
  /** Star Wars Episode VI: Return of the Jedi, released in 1983. */
  Jedi = 'JEDI',
  /** Star Wars Episode IV: A New Hope, released in 1977. */
  Newhope = 'NEWHOPE'
}

/** A connection object for a character's friends */
export type FriendsConnection = {
  __typename?: 'FriendsConnection';
  /** The edges for each of the character's friends. */
  edges?: Maybe<Array<Maybe<FriendsEdge>>>;
  /** A list of the friends, as a convenience when edges are not needed. */
  friends?: Maybe<Array<Maybe<Character>>>;
  /** Information for paginating this connection */
  pageInfo: PageInfo;
  /** The total number of friends */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge object for a character's friends */
export type FriendsEdge = {
  __typename?: 'FriendsEdge';
  /** A cursor used for pagination */
  cursor: Scalars['ID'];
  /** The character represented by this friendship edge */
  node?: Maybe<Character>;
};

/** A humanoid creature from the Star Wars universe */
export type Human = Character & {
  __typename?: 'Human';
  /** The movies this human appears in */
  appearsIn: Array<Maybe<Episode>>;
  /** This human's friends, or an empty list if they have none */
  friends?: Maybe<Array<Maybe<Character>>>;
  /** The friends of the human exposed as a connection with edges */
  friendsConnection: FriendsConnection;
  /** Height in the preferred unit, default is meters */
  height?: Maybe<Scalars['Float']>;
  /** The home planet of the human, or null if unknown */
  homePlanet?: Maybe<Scalars['String']>;
  /** The ID of the human */
  id: Scalars['ID'];
  /** Mass in kilograms, or null if unknown */
  mass?: Maybe<Scalars['Float']>;
  /** What this human calls themselves */
  name: Scalars['String'];
  /** A list of starships this person has piloted, or an empty list if none */
  starships?: Maybe<Array<Maybe<Starship>>>;
};


/** A humanoid creature from the Star Wars universe */
export type HumanFriendsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
};


/** A humanoid creature from the Star Wars universe */
export type HumanHeightArgs = {
  unit?: Maybe<LengthUnit>;
};

/** Units of height */
export enum LengthUnit {
  /** Primarily used in the United States */
  Foot = 'FOOT',
  /** The standard unit around the world */
  Meter = 'METER'
}

/** The mutation type, represents all updates we can make to our data */
export type Mutation = {
  __typename?: 'Mutation';
  createReview?: Maybe<Review>;
};


/** The mutation type, represents all updates we can make to our data */
export type MutationCreateReviewArgs = {
  episode?: Maybe<Episode>;
  review: ReviewInput;
};

/** Information for paginating this connection */
export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['ID']>;
  hasNextPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['ID']>;
};

/** The query type, represents all of the entry points into our object graph */
export type Query = {
  __typename?: 'Query';
  character?: Maybe<Character>;
  droid?: Maybe<Droid>;
  hero?: Maybe<Character>;
  human?: Maybe<Human>;
  reviews?: Maybe<Array<Maybe<Review>>>;
  search?: Maybe<Array<Maybe<SearchResult>>>;
  starship?: Maybe<Starship>;
};


/** The query type, represents all of the entry points into our object graph */
export type QueryCharacterArgs = {
  id: Scalars['ID'];
};


/** The query type, represents all of the entry points into our object graph */
export type QueryDroidArgs = {
  id: Scalars['ID'];
};


/** The query type, represents all of the entry points into our object graph */
export type QueryHeroArgs = {
  episode?: Maybe<Episode>;
};


/** The query type, represents all of the entry points into our object graph */
export type QueryHumanArgs = {
  id: Scalars['ID'];
};


/** The query type, represents all of the entry points into our object graph */
export type QueryReviewsArgs = {
  episode: Episode;
};


/** The query type, represents all of the entry points into our object graph */
export type QuerySearchArgs = {
  text?: Maybe<Scalars['String']>;
};


/** The query type, represents all of the entry points into our object graph */
export type QueryStarshipArgs = {
  id: Scalars['ID'];
};

/** Represents a review for a movie */
export type Review = {
  __typename?: 'Review';
  /** Comment about the movie */
  commentary?: Maybe<Scalars['String']>;
  /** The movie */
  episode?: Maybe<Episode>;
  /** The number of stars this review gave, 1-5 */
  stars: Scalars['Int'];
};

/** The input object sent when someone is creating a new review */
export type ReviewInput = {
  /** Comment about the movie, optional */
  commentary?: Maybe<Scalars['String']>;
  /** Favorite color, optional */
  favorite_color?: Maybe<ColorInput>;
  /** 0-5 stars */
  stars: Scalars['Int'];
};

export type SearchResult = Droid | Human | Starship;

export type Starship = {
  __typename?: 'Starship';
  coordinates?: Maybe<Array<Array<Scalars['Float']>>>;
  /** The ID of the starship */
  id: Scalars['ID'];
  /** Length of the starship, along the longest axis */
  length?: Maybe<Scalars['Float']>;
  /** The name of the starship */
  name: Scalars['String'];
};


export type StarshipLengthArgs = {
  unit?: Maybe<LengthUnit>;
};

/** The subscription type, represents all subscriptions we can make to our data */
export type Subscription = {
  __typename?: 'Subscription';
  reviewAdded?: Maybe<Review>;
};


/** The subscription type, represents all subscriptions we can make to our data */
export type SubscriptionReviewAddedArgs = {
  episode?: Maybe<Episode>;
};

export type GetJediHeroByEpisodeQueryVariables = Exact<{
  episode?: Maybe<Episode>;
}>;


export type GetJediHeroByEpisodeQuery = { __typename?: 'Query', hero?: { __typename: 'Droid', id: string, name: string, primaryFunction?: string | null | undefined, friendsConnection: { __typename: 'FriendsConnection', totalCount?: number | null | undefined, edges?: Array<{ __typename: 'FriendsEdge', cursor: string, node?: { __typename: 'Droid', id: string, name: string, friendsConnection: { __typename: 'FriendsConnection', totalCount?: number | null | undefined, edges?: Array<{ __typename: 'FriendsEdge', cursor: string, node?: { __typename: 'Droid', id: string, name: string, friendsConnection: { __typename: 'FriendsConnection', totalCount?: number | null | undefined, edges?: Array<{ __typename: 'FriendsEdge', cursor: string, node?: { __typename: 'Droid', id: string, name: string } | { __typename: 'Human', id: string, name: string, homePlanet?: string | null | undefined, height?: number | null | undefined, starships?: Array<{ __typename?: 'Starship', id: string, name: string, length?: number | null | undefined } | null | undefined> | null | undefined } | null | undefined } | null | undefined> | null | undefined } } | { __typename: 'Human', id: string, name: string, homePlanet?: string | null | undefined, height?: number | null | undefined, friendsConnection: { __typename: 'FriendsConnection', totalCount?: number | null | undefined, edges?: Array<{ __typename: 'FriendsEdge', cursor: string, node?: { __typename: 'Droid', id: string, name: string } | { __typename: 'Human', id: string, name: string, homePlanet?: string | null | undefined, height?: number | null | undefined, starships?: Array<{ __typename?: 'Starship', id: string, name: string, length?: number | null | undefined } | null | undefined> | null | undefined } | null | undefined } | null | undefined> | null | undefined }, starships?: Array<{ __typename?: 'Starship', id: string, name: string, length?: number | null | undefined } | null | undefined> | null | undefined } | null | undefined } | null | undefined> | null | undefined } } | { __typename: 'Human', id: string, name: string, homePlanet?: string | null | undefined, height?: number | null | undefined, friendsConnection: { __typename: 'FriendsConnection', totalCount?: number | null | undefined, edges?: Array<{ __typename: 'FriendsEdge', cursor: string, node?: { __typename: 'Droid', id: string, name: string, friendsConnection: { __typename: 'FriendsConnection', totalCount?: number | null | undefined, edges?: Array<{ __typename: 'FriendsEdge', cursor: string, node?: { __typename: 'Droid', id: string, name: string } | { __typename: 'Human', id: string, name: string, homePlanet?: string | null | undefined, height?: number | null | undefined, starships?: Array<{ __typename?: 'Starship', id: string, name: string, length?: number | null | undefined } | null | undefined> | null | undefined } | null | undefined } | null | undefined> | null | undefined } } | { __typename: 'Human', id: string, name: string, homePlanet?: string | null | undefined, height?: number | null | undefined, friendsConnection: { __typename: 'FriendsConnection', totalCount?: number | null | undefined, edges?: Array<{ __typename: 'FriendsEdge', cursor: string, node?: { __typename: 'Droid', id: string, name: string } | { __typename: 'Human', id: string, name: string, homePlanet?: string | null | undefined, height?: number | null | undefined, starships?: Array<{ __typename?: 'Starship', id: string, name: string, length?: number | null | undefined } | null | undefined> | null | undefined } | null | undefined } | null | undefined> | null | undefined }, starships?: Array<{ __typename?: 'Starship', id: string, name: string, length?: number | null | undefined } | null | undefined> | null | undefined } | null | undefined } | null | undefined> | null | undefined }, starships?: Array<{ __typename?: 'Starship', id: string, name: string, length?: number | null | undefined } | null | undefined> | null | undefined } | null | undefined } | null | undefined> | null | undefined, pageInfo: { __typename: 'PageInfo', startCursor?: string | null | undefined, endCursor?: string | null | undefined } } } | { __typename: 'Human', id: string, name: string, homePlanet?: string | null | undefined, height?: number | null | undefined, friendsConnection: { __typename: 'FriendsConnection', totalCount?: number | null | undefined, edges?: Array<{ __typename: 'FriendsEdge', cursor: string, node?: { __typename: 'Droid', id: string, name: string, friendsConnection: { __typename: 'FriendsConnection', totalCount?: number | null | undefined, edges?: Array<{ __typename: 'FriendsEdge', cursor: string, node?: { __typename: 'Droid', id: string, name: string, friendsConnection: { __typename: 'FriendsConnection', totalCount?: number | null | undefined, edges?: Array<{ __typename: 'FriendsEdge', cursor: string, node?: { __typename: 'Droid', id: string, name: string } | { __typename: 'Human', id: string, name: string, homePlanet?: string | null | undefined, height?: number | null | undefined, starships?: Array<{ __typename?: 'Starship', id: string, name: string, length?: number | null | undefined } | null | undefined> | null | undefined } | null | undefined } | null | undefined> | null | undefined } } | { __typename: 'Human', id: string, name: string, homePlanet?: string | null | undefined, height?: number | null | undefined, friendsConnection: { __typename: 'FriendsConnection', totalCount?: number | null | undefined, edges?: Array<{ __typename: 'FriendsEdge', cursor: string, node?: { __typename: 'Droid', id: string, name: string } | { __typename: 'Human', id: string, name: string, homePlanet?: string | null | undefined, height?: number | null | undefined, starships?: Array<{ __typename?: 'Starship', id: string, name: string, length?: number | null | undefined } | null | undefined> | null | undefined } | null | undefined } | null | undefined> | null | undefined }, starships?: Array<{ __typename?: 'Starship', id: string, name: string, length?: number | null | undefined } | null | undefined> | null | undefined } | null | undefined } | null | undefined> | null | undefined } } | { __typename: 'Human', id: string, name: string, homePlanet?: string | null | undefined, height?: number | null | undefined, friendsConnection: { __typename: 'FriendsConnection', totalCount?: number | null | undefined, edges?: Array<{ __typename: 'FriendsEdge', cursor: string, node?: { __typename: 'Droid', id: string, name: string, friendsConnection: { __typename: 'FriendsConnection', totalCount?: number | null | undefined, edges?: Array<{ __typename: 'FriendsEdge', cursor: string, node?: { __typename: 'Droid', id: string, name: string } | { __typename: 'Human', id: string, name: string, homePlanet?: string | null | undefined, height?: number | null | undefined, starships?: Array<{ __typename?: 'Starship', id: string, name: string, length?: number | null | undefined } | null | undefined> | null | undefined } | null | undefined } | null | undefined> | null | undefined } } | { __typename: 'Human', id: string, name: string, homePlanet?: string | null | undefined, height?: number | null | undefined, friendsConnection: { __typename: 'FriendsConnection', totalCount?: number | null | undefined, edges?: Array<{ __typename: 'FriendsEdge', cursor: string, node?: { __typename: 'Droid', id: string, name: string } | { __typename: 'Human', id: string, name: string, homePlanet?: string | null | undefined, height?: number | null | undefined, starships?: Array<{ __typename?: 'Starship', id: string, name: string, length?: number | null | undefined } | null | undefined> | null | undefined } | null | undefined } | null | undefined> | null | undefined }, starships?: Array<{ __typename?: 'Starship', id: string, name: string, length?: number | null | undefined } | null | undefined> | null | undefined } | null | undefined } | null | undefined> | null | undefined }, starships?: Array<{ __typename?: 'Starship', id: string, name: string, length?: number | null | undefined } | null | undefined> | null | undefined } | null | undefined } | null | undefined> | null | undefined, pageInfo: { __typename: 'PageInfo', startCursor?: string | null | undefined, endCursor?: string | null | undefined } }, starships?: Array<{ __typename?: 'Starship', id: string, name: string, length?: number | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type HumanFieldsFragment = { __typename?: 'Human', homePlanet?: string | null | undefined, height?: number | null | undefined, starships?: Array<{ __typename?: 'Starship', id: string, name: string, length?: number | null | undefined } | null | undefined> | null | undefined };

export type DroidFieldsFragment = { __typename?: 'Droid', primaryFunction?: string | null | undefined };

export const HumanFieldsFragmentDoc = gql`
    fragment humanFields on Human {
  homePlanet
  height
  starships {
    id
    name
    length
    __typename
  }
}
    `;
export const DroidFieldsFragmentDoc = gql`
    fragment droidFields on Droid {
  primaryFunction
}
    `;
export const GetJediHeroByEpisodeDocument = gql`
    query getJediHeroByEpisode($episode: Episode) {
  hero(episode: $episode) {
    id
    __typename
    name
    ...humanFields
    ...droidFields
    friendsConnection {
      __typename
      totalCount
      edges {
        __typename
        cursor
        node {
          id
          __typename
          name
          ...humanFields
          friendsConnection {
            __typename
            totalCount
            edges {
              __typename
              cursor
              node {
                id
                __typename
                name
                ...humanFields
                friendsConnection {
                  __typename
                  totalCount
                  edges {
                    __typename
                    cursor
                    node {
                      id
                      __typename
                      name
                      ...humanFields
                    }
                  }
                }
              }
            }
          }
        }
      }
      pageInfo {
        __typename
        startCursor
        endCursor
      }
    }
  }
}
${HumanFieldsFragmentDoc}
${DroidFieldsFragmentDoc}`;

/**
 * __useGetJediHeroByEpisodeQuery__
 *
 * To run a query within a React component, call `useGetJediHeroByEpisodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJediHeroByEpisodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJediHeroByEpisodeQuery({
 *   variables: {
 *      episode: // value for 'episode'
 *   },
 * });
 */
export function useGetJediHeroByEpisodeQuery(baseOptions?: Apollo.QueryHookOptions<GetJediHeroByEpisodeQuery, GetJediHeroByEpisodeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetJediHeroByEpisodeQuery, GetJediHeroByEpisodeQueryVariables>(GetJediHeroByEpisodeDocument, options);
      }
export function useGetJediHeroByEpisodeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetJediHeroByEpisodeQuery, GetJediHeroByEpisodeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetJediHeroByEpisodeQuery, GetJediHeroByEpisodeQueryVariables>(GetJediHeroByEpisodeDocument, options);
        }
export type GetJediHeroByEpisodeQueryHookResult = ReturnType<typeof useGetJediHeroByEpisodeQuery>;
export type GetJediHeroByEpisodeLazyQueryHookResult = ReturnType<typeof useGetJediHeroByEpisodeLazyQuery>;
export type GetJediHeroByEpisodeQueryResult = Apollo.QueryResult<GetJediHeroByEpisodeQuery, GetJediHeroByEpisodeQueryVariables>;