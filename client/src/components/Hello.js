import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const name = '""';

const HELLO = gql`
  query {
    hello(name: ${name})
  }
`;

export default function Hello() {
  const { loading, error, data } = useQuery(HELLO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  // console.log(data);

  return (
    <div>
      <h2>{data.hello}</h2>
    </div>
  );
}
