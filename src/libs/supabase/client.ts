import { createClient } from "@supabase/supabase-js";
import { Database } from "./types";
import { env } from "~/constants";

const { supabase } = env;

if (!supabase.url || !supabase.key)
  throw new Error("Missing Supabase URL or Key");

const client = createClient<Database>(supabase.url, supabase.key);

export default client;
