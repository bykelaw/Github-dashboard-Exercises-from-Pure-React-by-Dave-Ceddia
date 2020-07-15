import React from "react";
import Time from './time';
export const Row = ({
    InfoArray
  }) => {
    return ( < div className = "items" >
      <
      div > {
        InfoArray.Icon.toLowerCase() === "file" ? ( < i className = "fa fa-file " / > ) : ( < i className = "fa fa-folder" / > )
      } {
        InfoArray.Name
      } <
      /div> <
      div > {
        InfoArray.Commit.slice(0, 120)
      } < /div> <
      div > < Time time = {
        InfoArray.Date
      }
      /></div >
      <
      /div>);
    };