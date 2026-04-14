import { env } from "@/config/env";

export function getMediaUrl(key?: string | null) {
    
    if (!key) return null;
    
    return `${env.CDN_URL}/${key}`;
}