import { NextResponse } from "next/server";
import { getDriverCount, DRIVER_GOAL } from "@/lib/drivers";

// Always compute fresh so the counter reflects the live DB count, and never
// cache at the CDN/browser.
export const dynamic = "force-dynamic";

export async function GET() {
  const count = await getDriverCount();
  return NextResponse.json(
    { count, goal: DRIVER_GOAL },
    { headers: { "Cache-Control": "no-store" } },
  );
}
