import React from 'react'
import { Contents, Table } from './styles'
export const KeyTechnologyTable = list => {
  return list.map(({ title, contents }) => (
    <tr>
      <th>{title}</th>
      <td>
        {contents.map(contents => (
          <li>{contents}</li>
        ))}
      </td>
    </tr>
  ))
}

export default function KeyTechnologyComponent({ imageUrl, list }) {
  return (
    <>
      <Contents>
        <img src={imageUrl} />
        <Table>{KeyTechnologyTable(list)}</Table>
      </Contents>
    </>
  )
}
