import React from "react";

const TableHeader = ({ data ,className=""}) => (
  <thead className={className}>
    <tr className="text-center">
      {data.map((element) => (
        <th className="border border-primary">{element}</th>
      ))}
    </tr>
  </thead>
);

export default TableHeader;
