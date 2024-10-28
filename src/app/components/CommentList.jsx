import React from "react";
import { format } from "date-fns";

const CommentList = ({ users, name }) => {
  return (
    <div>
      {users &&
        users?.map((ele, index) => {
          const formattedDate = format(
            new Date(ele.timestamp),
            "yyyy-MMM-dd HH:mm:ss"
          );

          return (
            <div
              key={index}
              className="flex justify-start flex-col align-content-center rounded-xl border-2 !border-slate-600 px-3 py-2 mb-2 shadow-lg hover:bg-blend-darken"
            >
              <div className="justify-between flex">
                <span className={`font-semibold text-xl md:text-2xl `}>
                  {ele.username}
                </span>
                <span className="text-sm align-content-center ">
                  {formattedDate}
                </span>
              </div>
              <div className="text-lg">{ele.comment}</div>
            </div>
          );
        })}
    </div>
  );
};

export default CommentList;
