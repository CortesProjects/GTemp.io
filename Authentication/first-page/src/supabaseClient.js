import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ykhvazojkjierssojatk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlraHZhem9qa2ppZXJzc29qYXRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzNDc0MDIsImV4cCI6MjA3MzkyMzQwMn0.PZcG2y2AQNDaTR1cXgdXWGcEA5GYnHD5kBPK96bMx0E'; // replace with your actual anon key from Supabase

export const supabase = createClient(supabaseUrl, supabaseKey);
