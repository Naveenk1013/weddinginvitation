export type ShareResult = "shared" | "copied" | "dismissed" | "failed";

export async function shareInvite(
  url: string,
  title: string,
  text: string
): Promise<ShareResult> {
  try {
    if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
      try {
        await navigator.share({ url, title, text });
        return "shared";
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") {
          return "dismissed";
        }
        // Fall back to clipboard if share threw
      }
    }

    if (typeof navigator !== "undefined" && navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
      await navigator.clipboard.writeText(url);
      return "copied";
    }

    return "failed";
  } catch {
    return "failed";
  }
}
