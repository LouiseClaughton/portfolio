export async function onRequest(context) {
    const response = await context.next();
    const newHeaders = new Headers(response.headers);

    const DEFAULT_SECURITY_HEADERS = {
        "X-XSS-Protection": "0",
        "X-Frame-Options": "DENY",
        "X-Content-Type-Options": "nosniff",
        "Referrer-Policy": "strict-origin-when-cross-origin",
        "Cross-Origin-Embedder-Policy": 'require-corp; report-to="default";',
        "Cross-Origin-Opener-Policy": 'same-site; report-to="default";',
        "Cross-Origin-Resource-Policy": "same-site",
    };

    const BLOCKED_HEADERS = [
        "Public-Key-Pins",
        "X-Powered-By",
        "X-AspNet-Version",
    ];

    // Only apply to HTML
    if (
        newHeaders.has("Content-Type") &&
        !newHeaders.get("Content-Type").includes("text/html")
    ) {
        return response;
    }

    Object.entries(DEFAULT_SECURITY_HEADERS).forEach(([key, value]) => {
        newHeaders.set(key, value);
    });

    BLOCKED_HEADERS.forEach((name) => {
        newHeaders.delete(name);
    });

    const tlsVersion = context.request.cf?.tlsVersion;

    if (tlsVersion !== "TLSv1.2" && tlsVersion !== "TLSv1.3") {
        return new Response("You need TLS 1.2 or higher.", { status: 400 });
    }

    return new Response(response.body, {
        status: response.status,
        headers: newHeaders,
    });
}