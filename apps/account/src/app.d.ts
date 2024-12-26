// See https://svelte.dev/docs/kit/types#app

import type { Task } from "@acme/db"
import type { TagSlots } from "lucide-svelte/icons/tag"

// for information about these interfaces
declare global {
    namespace App {
        // interface Error {}
        interface Locals {
            db: import("@acme/db").DrizzleD1Database<typeof import("@acme/db").schema>
            session: import("@acme/auth").Session | null
            api: import("@acme/rpc").EdenTreaty
        }
        // interface PageData {}
        // interface PageState {}
        interface Platform {
            env: Env
            cf: CfProperties
            ctx: ExecutionContext
        }
    }
}

export { };
