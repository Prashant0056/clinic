import { createBrowserClient } from '@supabase/ssr';
import dotenv from 'dotenv';

dotenv.config();

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_CLIENT_API_KEY!;

const createClient = () => {
  return createBrowserClient(SUPABASE_URL, SUPABASE_KEY);
};

export default createClient;
