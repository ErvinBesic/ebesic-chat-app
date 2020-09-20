import React from "react";

const Member = (member) => {
  return (
    <li>
      {/* izmjena */}
      <p style={{ backgroundColor: member.color }}>{member.name}</p>
    </li>
  );
};
export default Member;
