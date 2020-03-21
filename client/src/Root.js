import React from "react";
import withRoot from "withRoot";
import { useQuery, gql } from "@apollo/client";

function Root () {
  const { loading, error, data } = useQuery(GET_TRACKS_QUERY);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error :(</div>;

  return <div>{JSON.stringify(data)}</div>;
}

const GET_TRACKS_QUERY = gql`
{
  tracks {
    title
    description
    url
    postedBy {
      username
    }
  }
}
`;

export default withRoot(Root);
