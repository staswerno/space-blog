import * as contentful from "contentful";

export const client = contentful.createClient({
  space: "REACT_APP_SPACE_ID",
  accessToken: "",
});
