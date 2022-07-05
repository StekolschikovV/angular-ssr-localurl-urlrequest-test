import {gql} from 'apollo-angular'

const GET_SITES = gql`
  query($language: I18NLocaleCode!) {
    sites(locale: $language, pagination: { pageSize: 2000 }) {
      data {
        id
        attributes {
          title
          url
          description
          pageSlug
          categories {
            data {
              attributes {
                title
              }
            }
          }
          img  {
            data{
              attributes{
                formats
              }
            }
          }
        }
      }
    }
  }
`

const GET_CATEGORIES = gql`
  query($language: I18NLocaleCode!) {
    categories(locale: $language) {
      data
      {
        attributes
        {
          title
        }
      }
    }
  }
`




export {GET_CATEGORIES, GET_SITES}
