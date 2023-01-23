// taken and adjusted from: https://www.apollographql.com/docs/react/data/fragments/#generating-possibletypes-automatically
require('dotenv').config()
const fetch = require('cross-fetch');
const fs = require('fs');
const { env } = require('process');

const graphqlEndpoint = `${env.GRAPHQL_API_HOST}/graphql`
console.log(`trying to query: ${graphqlEndpoint}`)
fetch(graphqlEndpoint, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    variables: {},
    query: `
      {
        __schema {
          types {
            kind
            name
            possibleTypes {
              name
            }
          }
        }
      }
    `,
  }),
}).then(result => result.json())
  .then(result => {
    const possibleTypes = {};

    result.data.__schema.types.forEach(supertype => {
      if (supertype.possibleTypes) {
        possibleTypes[supertype.name] =
          supertype.possibleTypes.map(subtype => subtype.name);
      }
    });

    fs.writeFile('./src/apollo-config/possibleTypes.json', JSON.stringify(possibleTypes), err => {
      if (err) {
        console.error('Error writing possibleTypes.json', err);
      } else {
        console.log('Fragment types successfully extracted!');
      }
    });
  });