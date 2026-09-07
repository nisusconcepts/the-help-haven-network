"use client";

import { useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

// Records one visit per browser session (sessionStorage guard, so
// navigating between pages doesn't inflate the count) into the anonymous
// site_visits log (see schema.sql). Renders nothing — the public-facing
// "N visits since launch" counter was removed from the header per Josh's
// request (2026-09-07); the count is still visible to admins on the
// /admin dashboard, which reads site_visits directly. This component's
// only job now is making sure that log keeps getting written to.
export default function VisitStats() {
  useEffect(() => {
    try {
      if (!sessionStorage.getItem("reslo_visit_recorded")) {
        sessionStorage.setItem("reslo_visit_recorded", "1");
        supabase.from("site_visits").insert({ path: window.location.pathname }).then(() => {});
      }
    } catch {
      // sessionStorage can throw in some privacy modes — visit tracking is
      // a nice-to-have, never worth breaking the page over.
    }
  }, []);

  return null;
}
