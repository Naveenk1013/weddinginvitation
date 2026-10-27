import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "रचना × उदित | शुभ विवाह सप्रेम आमंत्रण";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FFF8ED",
          backgroundImage: "radial-gradient(circle at center, #FFFDF8 0%, #FFF8ED 100%)",
          padding: "60px",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        {/* Decorative inner frame */}
        <div
          style={{
            position: "absolute",
            inset: "24px",
            border: "2px solid rgba(176, 122, 34, 0.5)",
            borderRadius: "16px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        />

        {/* Sacred Invocation */}
        <div
          style={{
            fontSize: 28,
            color: "#6E1E2A",
            marginBottom: 20,
            letterSpacing: "0.08em",
            fontWeight: 600,
          }}
        >
          ॥ श्री गणेशाय नमः ॥
        </div>

        {/* Heading */}
        <div
          style={{
            fontSize: 22,
            color: "#B07A22",
            marginBottom: 24,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          सप्रेम आमंत्रण
        </div>

        {/* Couple Names */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#6E1E2A",
            marginBottom: 24,
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <span>रचना</span>
          <span style={{ fontSize: 44, color: "#C85A16" }}>×</span>
          <span>उदित</span>
        </div>

        {/* Dates Pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
            marginTop: 12,
            padding: "16px 36px",
            backgroundColor: "#FFFDF8",
            border: "1px solid rgba(176, 122, 34, 0.4)",
            borderRadius: "9999px",
            boxShadow: "0 4px 12px rgba(110, 30, 42, 0.08)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span style={{ fontSize: 20, color: "#6B5149" }}>शुभ तिलक</span>
            <span style={{ fontSize: 24, fontWeight: 700, color: "#2A1713" }}>
              25 नवंबर 2026
            </span>
          </div>

          <div style={{ width: 1, height: 40, backgroundColor: "#B07A22", opacity: 0.4 }} />

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span style={{ fontSize: 20, color: "#6B5149" }}>शुभ विवाह</span>
            <span style={{ fontSize: 24, fontWeight: 700, color: "#6E1E2A" }}>
              2 दिसंबर 2026
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
