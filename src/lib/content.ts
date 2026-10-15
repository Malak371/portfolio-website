import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from 'yaml';
import type { ImageMetadata } from 'astro';
import raw from '../data/site.yaml?raw';

export interface ProjectLinks {
  live?: string;
  code?: string;
  video?: string;
}

export interface Project {
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  impact: string;
  stack: string[];
  image?: string;
  imageAlt?: string;
  links: ProjectLinks;
  note?: string;
  private?: boolean;
  organization?: string;
  role?: string;
  architecture?: string;
}

export interface Site {
  profile: {
    name: string;
    headline: string;
    location: string;
    summary: string;
    photo: string;
    photoAlt: string;
    email: string;
    github: string;
    linkedin: string;
    resume: string;
  };
  projects: Project[];
  about: {
    bio: string[];
    skills: { group: string; items: string[] }[];
  };
  experience: {
    role: string;
    organization: string;
    location?: string;
    start: string;
    end: string;
    points: string[];
  }[];
  education: {
    school: string;
    location?: string;
    degree: string;
    date?: string;
  }[];
}

export const site = parse(raw) as Site;

export const isTodo = (value: unknown): boolean =>
  typeof value === 'string' && value.trim().startsWith('TODO');

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** URL of a file in public/, respecting the GitHub Pages base path. */
export const publicUrl = (file: string) => `${base}/${file}`;

/** Only link the resume once the PDF has actually been added to public/. */
export const resumeAvailable =
  !!site.profile.resume && existsSync(join(process.cwd(), 'public', site.profile.resume));

const images = import.meta.glob<{ default: ImageMetadata }>('../assets/**/*.{png,jpg,jpeg,webp}', {
  eager: true,
});

/** Look up an image in src/assets by its path relative to that folder. */
export function asset(path: string | undefined): ImageMetadata | undefined {
  if (!path) return undefined;
  const match = images[`../assets/${path}`];
  if (!match) throw new Error(`Image not found in src/assets: ${path}`);
  return match.default;
}
