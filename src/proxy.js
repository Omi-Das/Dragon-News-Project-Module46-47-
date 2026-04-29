import dns from "dns";
// Use public DNS servers for MongoDB SRV resolution if local resolver fails.
dns.setServers(["8.8.8.8", "1.1.1.1", "9.9.9.9"]);

import { NextResponse } from "next/server"
import { auth } from "./lib/auth"

// This function can be marked `async` if using `await` inside
export async function proxy(request) {
    const session = await auth.api.getSession({
        headers: request.headers,
    })

    console.log(session, "session")
    const isLoggedIn = Boolean(session?.user)

    if (session) {
        return NextResponse.next()
    }

    return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
    matcher: ['/career'],
}