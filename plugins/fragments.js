const https = require("https");
const agent = new https.Agent({
  rejectUnauthorized: false
});

const fetch = require("node-fetch");
const fs = require("fs");

fetch(`https://headless-wp.dev/graphql`, {
  method: "POST",
  agent,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
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
    `
  })
})
  .then(result => result.json())
  .then(result => {
    // here we're filtering out any type information unrelated to unions or interfaces
    const filteredData = result.data.__schema.types.filter(
      type => type.possibleTypes !== null
    );
    result.data.__schema.types = filteredData;
    fs.writeFile("./fragmentTypes.json", JSON.stringify(result.data), err => {
      if (err) {
        console.error("Error writing fragmentTypes file", err);
      } else {
        console.log("Fragment types successfully extracted!");
      }
    });
  });
