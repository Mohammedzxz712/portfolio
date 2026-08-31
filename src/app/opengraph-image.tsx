import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";
import { shippedAppCount } from "@/data/projects";

export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
// Required so the card is also emitted by `output: export` (GitHub Pages build).
export const dynamic = "force-static";

/** Social card. Rendered at build time — no external fonts, so it never fails offline. */
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
          background: "#080c14",
          color: "#e8edf5",
          padding: "72px 80px",
          fontFamily: "Inter, Segoe UI, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 24, letterSpacing: 6, color: "#8b98aa" }}>
          <div
            style={{
              width: 54,
              height: 54,
              borderRadius: 12,
              background: "#1552f0",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              letterSpacing: 1,
            }}
          >
            MR
          </div>
          <div style={{ display: "flex" }}>PORTFOLIO · CAIRO, EGYPT</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ fontSize: 104, lineHeight: 1, letterSpacing: -4, fontWeight: 700, display: "flex" }}>Mohammed</div>
          <div style={{ fontSize: 104, lineHeight: 1, letterSpacing: -4, fontWeight: 700, color: "#4c8dff", display: "flex" }}>
            Rageh
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ fontSize: 30, color: "#c4cdda", display: "flex" }}>
            Software Engineer · Flutter × Python · End-to-end
          </div>
          <div style={{ fontSize: 24, color: "#8b98aa", display: "flex" }}>
            {shippedAppCount} apps live on the App Store &amp; Google Play
          </div>
        </div>
      </div>
    ),
    size,
  );
}
