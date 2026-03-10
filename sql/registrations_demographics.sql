alter table public.registrations
add column if not exists age integer,
add column if not exists level_of_study text,
add column if not exists country_of_residence text;

alter table public.registrations
alter column age_group drop not null;
