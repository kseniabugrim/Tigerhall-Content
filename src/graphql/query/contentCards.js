import { gql } from "@apollo/client";

export const FILTER_CONTENT_CARDS = gql`
  query contentCards($filter: ContentCardsFilter!) {
    contentCards(filter: $filter) {
      edges {
        ... on Podcast {
          name
          image {
            ...Image
          }
          categories {
            ...Category
          }
          experts {
            ...Expert
          }
        }
      }
    }
  }

  fragment Image on Image {
    uri
  }

  fragment Category on Category {
    name
  }

  fragment Expert on Expert {
    firstName
    lastName
    title
    company
  }

`;