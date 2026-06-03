/*
  # Create contact_submissions table

  ## Purpose
  Stores all contact form submissions from the website.

  ## New Tables
  - `contact_submissions`
    - `id` (uuid, primary key)
    - `name` (text, required) — sender's full name
    - `email` (text, required) — sender's email address
    - `company` (text) — optional company name
    - `role` (text) — optional job title / role
    - `interest` (text) — inquiry category (wholesale, partnership, etc.)
    - `message` (text, required) — message body
    - `created_at` (timestamptz) — submission timestamp
    - `is_read` (boolean) — whether the admin has seen this submission

  ## Security
  - RLS enabled — submissions are write-only for anonymous users
  - Anonymous users may INSERT (to submit the form) but cannot SELECT
  - Only the service role (admin Edge Function) can read submissions
  - Admins read via the admin-auth-gated Edge Function, not directly
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id         uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  name       text        NOT NULL CHECK (char_length(name) > 0 AND char_length(name) <= 100),
  email      text        NOT NULL CHECK (char_length(email) > 0 AND char_length(email) <= 200),
  company    text        NOT NULL DEFAULT '' CHECK (char_length(company) <= 200),
  role       text        NOT NULL DEFAULT '' CHECK (char_length(role) <= 100),
  interest   text        NOT NULL DEFAULT '' CHECK (char_length(interest) <= 50),
  message    text        NOT NULL CHECK (char_length(message) > 0 AND char_length(message) <= 2000),
  is_read    boolean     NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Anonymous users can submit the form (insert only, no reading)
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (
    char_length(name) > 0
    AND char_length(email) > 0
    AND char_length(message) > 0
  );

-- Index for admin listing by newest first
CREATE INDEX IF NOT EXISTS contact_submissions_created_at_idx
  ON contact_submissions (created_at DESC);
