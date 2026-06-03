/*
  # Create site_videos and site_links tables

  ## site_videos
  Stores video embeds (YouTube, Vimeo) or direct mp4 URLs for designated slots on each page.
  - id, page, slot, label, url (the embed/video URL), updated_at
  - Unique on (page, slot)

  ## site_links
  Stores editable hyperlinks for designated slots on each page.
  - id, page, slot, label, href (destination URL), link_text (display text), opens_new_tab
  - Unique on (page, slot)

  ## Security
  - RLS enabled on both tables
  - Public SELECT (content is public)
  - Anon INSERT / UPDATE / DELETE (admin uses anon key)
*/

CREATE TABLE IF NOT EXISTS site_videos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  page text NOT NULL,
  slot text NOT NULL,
  label text NOT NULL DEFAULT '',
  url text NOT NULL DEFAULT '',
  updated_at timestamptz DEFAULT now(),
  UNIQUE(page, slot)
);

ALTER TABLE site_videos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read site videos"
  ON site_videos FOR SELECT TO anon, authenticated USING (true);

CREATE POLICY "Anon can insert site videos"
  ON site_videos FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Anon can update site videos"
  ON site_videos FOR UPDATE TO anon USING (true) WITH CHECK (true);

CREATE POLICY "Anon can delete site videos"
  ON site_videos FOR DELETE TO anon USING (true);


CREATE TABLE IF NOT EXISTS site_links (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  page text NOT NULL,
  slot text NOT NULL,
  label text NOT NULL DEFAULT '',
  href text NOT NULL DEFAULT '',
  link_text text NOT NULL DEFAULT '',
  opens_new_tab boolean NOT NULL DEFAULT true,
  updated_at timestamptz DEFAULT now(),
  UNIQUE(page, slot)
);

ALTER TABLE site_links ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read site links"
  ON site_links FOR SELECT TO anon, authenticated USING (true);

CREATE POLICY "Anon can insert site links"
  ON site_links FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Anon can update site links"
  ON site_links FOR UPDATE TO anon USING (true) WITH CHECK (true);

CREATE POLICY "Anon can delete site links"
  ON site_links FOR DELETE TO anon USING (true);
