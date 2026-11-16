export type CgvBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "sub"; text: string };

export interface CgvSection {
  id: string;
  number: number;
  title: string;
  blocks: CgvBlock[];
}