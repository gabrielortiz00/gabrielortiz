import { ImageResponse } from "next/og";

// Link-preview image (LinkedIn, iMessage, Slack), in the site's logbook colors
export const alt = "Gabriel Ortiz, computer science student at Northeastern University";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "88px 96px",
          background: "#f8f7f2",
          backgroundImage:
            "linear-gradient(rgba(22,38,61,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(22,38,61,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          color: "#16263d",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -3 }}>Gabriel Ortiz</div>
          <div style={{ marginTop: 24, fontSize: 36, color: "#5b6878" }}>
            Computer Science · Northeastern University
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ height: 4, width: "100%", background: "#c8322b" }} />
          <div
            style={{
              marginTop: 20,
              display: "flex",
              justifyContent: "space-between",
              fontSize: 28,
              color: "#5b6878",
            }}
          >
            <span>Software · Private pilot</span>
            <span>gabrielortiz.io</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
