# Migration — Faza 2 Form Refactor

## Coloane noi în tabela `leads`

Rulează SQL-ul de mai jos în **Supabase Dashboard → SQL Editor**.

```sql
ALTER TABLE leads
  ADD COLUMN IF NOT EXISTS has_active_loans boolean,
  ADD COLUMN IF NOT EXISTS total_monthly_payments integer,
  ADD COLUMN IF NOT EXISTS preferred_call_slot text,
  ADD COLUMN IF NOT EXISTS is_qualified boolean,
  ADD COLUMN IF NOT EXISTS disqualification_reason text;
```

## Verificare după rulare

```sql
SELECT column_name, data_type
FROM information_schema.columns
WHERE table_name = 'leads'
ORDER BY ordinal_position;
```

Trebuie să apară:
- `has_active_loans` — boolean
- `total_monthly_payments` — integer
- `preferred_call_slot` — text
- `is_qualified` — boolean
- `disqualification_reason` — text

## Verificare RLS policies

```sql
SELECT policyname, cmd, qual
FROM pg_policies
WHERE tablename = 'leads';
```

RLS-ul existent permite `INSERT` anonim (folosit de formular). Coloanele noi
sunt nullable — INSERT-urile existente continuă să funcționeze fără modificări.

## Rollback (dacă e necesar)

```sql
ALTER TABLE leads
  DROP COLUMN IF EXISTS has_active_loans,
  DROP COLUMN IF EXISTS total_monthly_payments,
  DROP COLUMN IF EXISTS preferred_call_slot,
  DROP COLUMN IF EXISTS is_qualified,
  DROP COLUMN IF EXISTS disqualification_reason;
```
