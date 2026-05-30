/*
  # Storage RLS policies for site-images bucket

  Allows public read and anon upload/delete for the site-images storage bucket.
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE policyname = 'Public read site-images' AND tablename = 'objects' AND schemaname = 'storage'
  ) THEN
    EXECUTE 'CREATE POLICY "Public read site-images" ON storage.objects FOR SELECT TO anon USING (bucket_id = ''site-images'')';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE policyname = 'Anon upload site-images' AND tablename = 'objects' AND schemaname = 'storage'
  ) THEN
    EXECUTE 'CREATE POLICY "Anon upload site-images" ON storage.objects FOR INSERT TO anon WITH CHECK (bucket_id = ''site-images'')';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE policyname = 'Anon delete site-images' AND tablename = 'objects' AND schemaname = 'storage'
  ) THEN
    EXECUTE 'CREATE POLICY "Anon delete site-images" ON storage.objects FOR DELETE TO anon USING (bucket_id = ''site-images'')';
  END IF;
END $$;
