import React from "react";

const VoucherTableRow = ({ row }) => (


     row.map((element) => (
                <tr className="text-center" key={element.productDetails.id}>
                  <td className="border border-primary">
                    {element.productDetails.name}
                  </td>
                  <td className="border border-primary">
                    {element.productDetails.edition}
                  </td>
                  <td className="border border-primary">
                    {element.productDetails.price}
                  </td>
                  <td className="border border-primary">{element.quantity}</td>
                  <td className="border border-primary">
                    {element.quantity * element.productDetails.price}
                  </td>
                </tr>
              ))

);

export default VoucherTableRow;
