/*
  # Create site_images table

  Tracks images uploaded to Supabase storage for display across the site.

  1. New Tables
    - `site_images`
      - `id` (uuid, primary key)
      - `page` (text) - which page: home, about, fibers, etc.
      - `slot` (text) - identifier for the image slot, e.g. "hero", "founder-portrait"
      - `label` (text) - human-readable description
      - `storage_path` (text, unique) - path in Supabase storage bucket
      - `created_at` (timestamp)

  2. Security
    - RLS enabled
    - Public read (images shown to all visitors)
    - Any user (anon) can insert/update/delete — no auth required for the admin panel
*/

CREATE TABLE IF NOT EXISTS site_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  page text NOT NULL,
  slot text NOT NULL,
  label text NOT NULL DEFAULT '',
  storage_path text NOT NULL UNIQUE,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE site_images ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read site_images"
  ON site_images FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Anon insert site_images"
  ON site_images FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anon update site_images"
  ON site_images FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Anon delete site_images"
  ON site_images FOR DELETE
  TO anon
  USING (true);

CREATE INDEX IF NOT EXISTS idx_site_images_page_slot ON site_images(page, slot);
