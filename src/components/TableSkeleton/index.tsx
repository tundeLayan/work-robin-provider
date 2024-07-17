import React from "react";

const TableSkeleton = () => {
  return (
    <table className="table-auto w-full border-collapse border-block pt-5">
      <tbody className="[&>*:nth-child(odd)]:animate-shimmer bg-1000px [&>*:nth-child(odd)]:bg-shimmer">
        {Array.from({ length: 13 }, (_) => null).map((_, idx) => (
          <tr key={idx}>
            <td className="h-12 w-full animate-shimmer bg-1000px mb-3"></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableSkeleton;
