import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", background: "#183324", color: "#f7f8f4", padding: "90px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ position: "absolute", width: 650, height: 650, border: "2px solid #5b8063", borderRadius: "50%", right: -150, top: -30 }} />
      <div style={{ position: "absolute", width: 430, height: 430, border: "2px solid #5b8063", borderRadius: "50%", right: -40, top: 80 }} />
      <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
        <div style={{ display: "flex", fontSize: 42, fontWeight: 700, letterSpacing: -3 }}>orbit<span style={{ color: "#b8d0b4" }}>.</span></div>
        <div style={{ fontSize: 69, lineHeight: 1.08, fontWeight: 600, letterSpacing: -3, maxWidth: 800 }}>A personal workspace for everything that matters.</div>
        <div style={{ fontSize: 22, color: "#b8d0b4" }}>Free and open source · Tasks · Habits · Notes · Expenses</div>
      </div>
    </div>,
    size,
  );
}
