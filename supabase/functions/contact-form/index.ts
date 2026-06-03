import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  try {
    const body = await req.json();
    const { name, email, company, role, interest, message } = body;

    // Basic server-side validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return json({ error: "Name is required" }, 400);
    }
    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json({ error: "Valid email is required" }, 400);
    }
    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return json({ error: "Message is required" }, 400);
    }

    // Use service role to bypass RLS for insert (anon key also works via the INSERT policy)
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { error } = await supabase.from("contact_submissions").insert({
      name:     String(name).slice(0, 100).trim(),
      email:    String(email).slice(0, 200).trim().toLowerCase(),
      company:  String(company ?? "").slice(0, 200).trim(),
      role:     String(role ?? "").slice(0, 100).trim(),
      interest: String(interest ?? "").slice(0, 50).trim(),
      message:  String(message).slice(0, 2000).trim(),
    });

    if (error) {
      return json({ error: "Failed to save submission" }, 500);
    }

    return json({ ok: true });
  } catch {
    return json({ error: "Invalid request" }, 400);
  }
});
