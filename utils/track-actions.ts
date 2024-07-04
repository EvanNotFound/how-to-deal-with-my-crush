export default function trackActions(trackName: string, payload?: any) {
  try {
    if (typeof window !== "undefined") {
      // @ts-ignore
      umami.track(trackName, payload);
    }
  } catch (e) {
    console.error(e);
  }
}
