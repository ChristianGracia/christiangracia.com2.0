import React from "react";
import { Button } from "react-bootstrap";

export const ProjectBox = (props: any) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center"
      }}
    >
      <p className="title">
        <a className="linkStyle" href={props.siteLink}>
          <span>{props.title}</span>
        </a>
      </p>
      <p className="description" style={{ maxWidth: 900 }}>
        {props.description}
      </p>
      <div style={{ marginTop: 30, marginBottom: 30 }}>
        <Button
          onClick={() => (window.location.href = props.codeLink)}
          variant="danger"
        >
          Link to Code
        </Button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <div style={{ minWidth: 290, maxWidth: 700 }}>
          {/* {tweet === "" ? null : (
            <TwitterTweetEmbed options={{ width: 300 }} tweetId={tweet} />
          )} */}
          |
        </div>
      </div>
    </div>
  );
};

// export function ProjectBox(
//  this.props.siteLink: string
//   title: string
//   codeLink: string
//   description: string
//   tweet: string
//   )
//  {
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         flexDirection: "column",
//         textAlign: "center"
//       }}
//     >
//       <p className="title">
//         <a className="linkStyle" href={siteLink}>
//           <span>{title}</span>
//         </a>
//       </p>
//       <p className="description" style={{ maxWidth: 900 }}>
//         {description}
//       </p>
//       <div style={{ marginTop: 30, marginBottom: 30 }}>
//         <Button
//           onClick={() => (window.location.href = codeLink)}
//           variant="danger"
//         >
//           Link to Code
//         </Button>
//       </div>

//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center"
//         }}
//       >
//         <div style={{ minWidth: 290, maxWidth: 700 }}>
//           {/* {tweet === "" ? null : (
//             <TwitterTweetEmbed options={{ width: 300 }} tweetId={tweet} />
//           )} */}
//           |
//         </div>
//       </div>
//     </div>
//   );
// }
