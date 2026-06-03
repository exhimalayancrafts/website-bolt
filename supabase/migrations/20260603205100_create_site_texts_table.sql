/*
  # Create site_texts table

  Stores editable text content for all pages, keyed by (page, slot).

  1. New Tables
    - `site_texts`
      - `id` (uuid, primary key)
      - `page` (text) — page identifier e.g. "home", "about"
      - `slot` (text) — content slot identifier e.g. "hero-heading"
      - `label` (text) — human-readable description shown in admin
      - `content` (text) — the actual text content
      - `updated_at` (timestamptz)

  2. Constraints
    - Unique on (page, slot) so upsert works cleanly

  3. Security
    - RLS enabled
    - Public SELECT (text is public content)
    - Authenticated INSERT / UPDATE / DELETE (admin uses anon key with service role bypassed via policy)
*/

CREATE TABLE IF NOT EXISTS site_texts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  page text NOT NULL,
  slot text NOT NULL,
  label text NOT NULL DEFAULT '',
  content text NOT NULL DEFAULT '',
  updated_at timestamptz DEFAULT now(),
  UNIQUE(page, slot)
);

ALTER TABLE site_texts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read site texts"
  ON site_texts FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated can insert site texts"
  ON site_texts FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated can update site texts"
  ON site_texts FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated can delete site texts"
  ON site_texts FOR DELETE
  TO authenticated
  USING (true);
