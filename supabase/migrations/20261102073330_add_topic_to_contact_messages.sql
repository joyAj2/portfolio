ALTER TABLE contact_messages ADD COLUMN IF NOT EXISTS topic text CHECK (topic IS NULL OR char_length(topic) <= 80);
