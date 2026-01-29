-- Role enum for profiles
create type public.user_role as enum ('contributor', 'corporate');

-- Core profiles table (1:1 with auth.users)
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  role public.user_role not null,
  display_name text not null unique,
  country text not null,
  avatar_url text,
  karma_score integer not null default 0,
  created_at timestamp with time zone not null default timezone('utc'::text, now())
);

alter table public.profiles enable row level security;

-- Contributor-only profile extension
create table if not exists public.contributor_profiles (
  user_id uuid primary key references public.profiles (id) on delete cascade,
  first_name text not null,
  last_name text not null,
  birthdate date not null,
  bio text,
  country_of_residence text not null
);

alter table public.contributor_profiles enable row level security;

-- Corporate-only profile extension
create table if not exists public.corporate_profiles (
  user_id uuid primary key references public.profiles (id) on delete cascade,
  company_name text not null,
  country_of_origin text not null,
  company_badge_icon text
);

alter table public.corporate_profiles enable row level security;

-- Basic RLS policies
-- Authenticated users can read all profiles (for display / badges)
create policy "Read all profiles"
  on public.profiles
  for select
  using (true);

-- Users can update only their own profile
create policy "Update own profile"
  on public.profiles
  for update
  using (auth.uid() = id);

-- Contributor profile policies
create policy "Read all contributor profiles"
  on public.contributor_profiles
  for select
  using (true);

create policy "Insert own contributor profile"
  on public.contributor_profiles
  for insert
  with check (auth.uid() = user_id);

create policy "Update own contributor profile"
  on public.contributor_profiles
  for update
  using (auth.uid() = user_id);

-- Corporate profile policies
create policy "Read all corporate profiles"
  on public.corporate_profiles
  for select
  using (true);

create policy "Insert own corporate profile"
  on public.corporate_profiles
  for insert
  with check (auth.uid() = user_id);

create policy "Update own corporate profile"
  on public.corporate_profiles
  for update
  using (auth.uid() = user_id);

