alter table public.registrations
add column team_mode text not null,
add column team_name text,
add column team_join_code text,
add column fields_of_study text[] not null,
add column interests text[] not null,
add column other_interest text;
