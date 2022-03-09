import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "b1p89kdm",
  dataset: "production",
  apiVersion: "2021-08-31",
  useCdn: true,
});
