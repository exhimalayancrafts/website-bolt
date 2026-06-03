/*
  # Grant anon write access to site_texts

  The admin panel uses the anon key (no Supabase auth login).
  We need anon to be able to insert/update/delete text records.
*/

CREATE POLICY "Anon can insert site texts"
  ON site_texts FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anon can update site texts"
  ON site_texts FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Anon can delete site texts"
  ON site_texts FOR DELETE
  TO anon
  USING (true);
