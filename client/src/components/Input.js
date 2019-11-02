import React from 'react';
import { useApolloClient } from '@apollo/react-hooks';

export default function Input() {
  const client = useApolloClient();

  return (
    <div>
      <input
        type='text'
        placeholder='...Name'
        onChange={e => client.writeData({ data: { name: e.target.value } })}
      />
    </div>
  );
}
