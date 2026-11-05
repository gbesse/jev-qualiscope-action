// Objectif : décrire les types de l’API métier publique.
import type { JevProvider } from "./jev.mjs";
export type SourceRecord = { id: string; text: string; source: { url: string; date: string }; [key: string]: unknown };
export const DECISIONS: Readonly<Record<string, string>>;
export function qualityCase(input: any): SourceRecord;
export function planCareQualityAction(input: any, provider: JevProvider): Promise<any>;
export function runCli(argv: string[], io?: { log(value: string): void }): Promise<void>;

export function compareIndicatorSeries(points:Array<{indicator:string;facility:string;scope:string;year:number;value:number}>):{comparable:boolean;firstYear:number;lastYear:number;delta:number|null;successiveDeltas:Array<{from:number;to:number;delta:number}>;clinicalConclusion:boolean};
