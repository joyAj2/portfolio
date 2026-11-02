/*
# Create contact messages table

1. New Tables
- `contact_messages`
  - `id` (uuid, primary key, generated automatically)
  - `name` (text, required, up to 120 characters)
  - `email` (text, required, up to 200 characters)
  - `message` (text, required, up to 5000 characters)
  - `created_at` (timestamp, set automatically)

2. Security
- Row level security is enabled on `contact_messages`.
- Visitors (anon role) can only INSERT a new message. They cannot read, edit or delete any messages.
- Length checks are enforced in the database so oversized or empty submissions are rejected.
- The owner reads messages through the Supabase dashboard, which bypasses these rules.

3. Notes
- No sign-in is involved, so the policy targets the anon role used by the public site.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(trim(name)) BETWEEN 1 AND 120),
  email text NOT NULL CHECK (char_length(trim(email)) BETWEEN 3 AND 200 AND email LIKE '%_@_%'),
  message text NOT NULL CHECK (char_length(trim(message)) BETWEEN 1 AND 5000),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON contact_messages TO anon;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages" ON contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);
