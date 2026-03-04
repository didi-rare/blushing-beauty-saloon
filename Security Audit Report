# 🔒 Security Audit Report — Blushing Beauty Studio

**Audit Date:** March 4, 2026  
**Targets:** [blushingbeauty.studio](https://blushingbeauty.studio/) | [GitHub Repository](https://github.com/didi-rare/blushing-beauty-saloon)  
**Auditor:** Antigravity Security Analysis  
**Overall Risk Rating:** **Medium** (Static SPA with no backend reduces attack surface significantly, but infrastructure hardening gaps exist)

---

## Executive Summary

Blushing Beauty Studio is a **static React SPA** (Vite + React 18) deployed on **Vercel** with a custom domain. The site has **no backend**, **no user authentication**, **no forms or user input**, **no cookies**, and **no database**. Its only interactive behavior is linking out to WhatsApp, Instagram, TikTok, and Google Maps.

This significantly limits the attack surface. However, several **infrastructure-level and best-practice** security gaps were found, primarily around missing HTTP security headers and dependency hygiene. No critical application-level vulnerabilities were discovered.

---

## Findings Summary

| # | Finding | Severity | Category |
|---|---------|----------|----------|
| 1 | Missing Content-Security-Policy header | 🟠 **Medium** | HTTP Headers |
| 2 | Missing X-Frame-Options header (Clickjacking) | 🟠 **Medium** | HTTP Headers |
| 3 | Missing X-Content-Type-Options header | 🟡 **Low** | HTTP Headers |
| 4 | Overly permissive CORS (`Access-Control-Allow-Origin: *`) | 🟡 **Low** | HTTP Headers |
| 5 | Missing Referrer-Policy header | 🟡 **Low** | HTTP Headers |
| 6 | Missing Permissions-Policy header | 🟡 **Low** | HTTP Headers |
| 7 | Outdated npm dependencies | 🟡 **Low** | Dependencies |
| 8 | Public GitHub repository exposes source code | ℹ️ **Info** | Information Disclosure |
| 9 | Personal contact details in source code | ℹ️ **Info** | Privacy |
| 10 | Missing `robots.txt` and `security.txt` | ℹ️ **Info** | Best Practice |

---

## Detailed Findings

### 🟠 Finding 1 — Missing Content-Security-Policy (CSP) Header

**Severity:** Medium · **Category:** HTTP Headers

The site does not set a `Content-Security-Policy` header. CSP is the most effective browser-level defense against Cross-Site Scripting (XSS) and data injection attacks. Without it, if any future vulnerability allows script injection, the browser has no policy to block malicious execution.

**Current state:** No CSP header present.

**Recommendation:** Add a `Content-Security-Policy` header via Vercel's `vercel.json`:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; frame-ancestors 'none'"
        }
      ]
    }
  ]
}
```

---

### 🟠 Finding 2 — Missing X-Frame-Options Header (Clickjacking)

**Severity:** Medium · **Category:** HTTP Headers

The site can be embedded in an `<iframe>` on any third-party domain, making it vulnerable to **clickjacking attacks**. An attacker could overlay the site with invisible elements on a malicious page to trick users into clicking the WhatsApp booking link or other interactive elements.

**Current state:** No `X-Frame-Options` header present.

**Recommendation:** Add `X-Frame-Options: DENY` (or use `frame-ancestors 'none'` in CSP as shown above).

---

### 🟡 Finding 3 — Missing X-Content-Type-Options Header

**Severity:** Low · **Category:** HTTP Headers

Without `X-Content-Type-Options: nosniff`, browsers may MIME-sniff responses and interpret files differently than intended, potentially leading to script execution in edge cases.

**Recommendation:** Add `X-Content-Type-Options: nosniff`.

---

### 🟡 Finding 4 — Overly Permissive CORS

**Severity:** Low · **Category:** HTTP Headers

The main HTML document is served with `Access-Control-Allow-Origin: *`. While the impact is minimal for a static site (no sensitive data is returned), this is unnecessarily permissive and not in keeping with the principle of least privilege.

**Recommendation:** Remove the `Access-Control-Allow-Origin` header for the HTML document, or restrict it to your domain only.

---

### 🟡 Finding 5 — Missing Referrer-Policy Header

**Severity:** Low · **Category:** HTTP Headers

Without a `Referrer-Policy`, the full URL (including any future query parameters or hash fragments) may leak to third-party sites (WhatsApp, Instagram, TikTok, Google Maps) when users click outbound links.

**Recommendation:** Add `Referrer-Policy: strict-origin-when-cross-origin`.

---

### 🟡 Finding 6 — Missing Permissions-Policy Header

**Severity:** Low · **Category:** HTTP Headers

No `Permissions-Policy` header is set, meaning the browser will allow the page to use features like camera, microphone, and geolocation by default if any future code requests them.

**Recommendation:** Add a restrictive Permissions-Policy:

```
Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()
```

---

### 🟡 Finding 7 — Outdated npm Dependencies

**Severity:** Low · **Category:** Dependencies

Several dependencies in `package.json` are pinned to older versions which may contain known vulnerabilities:

| Package | Current Version | Latest Major |
|---------|----------------|--------------|
| `react` | ^18.2.0 | 19.x |
| `vite` | ^5.2.0 | 6.x |
| `vitest` | ^1.3.1 | 3.x |
| `eslint` | ^8.57.0 | 9.x |

**Recommendation:** Run `npm audit` regularly and update dependencies. Consider using Dependabot or Renovate for automated dependency updates on the GitHub repo.

---

### ℹ️ Finding 8 — Public GitHub Repository

**Severity:** Informational · **Category:** Information Disclosure

The repository at [github.com/didi-rare/blushing-beauty-saloon](https://github.com/didi-rare/blushing-beauty-saloon) is **public**, exposing the full source code, build configuration, and deployment setup. While this is common for frontend projects and there are no secrets in the code, it does provide attackers with a complete view of the technology stack.

> [!NOTE]
> No API keys, secrets, or environment variables were found in the source code. The `.gitignore` properly excludes `.vercel`, `node_modules`, and build artifacts.

**Recommendation:** Consider whether a public repo is intentional. If not needed, make it private.

---

### ℹ️ Finding 9 — Personal Contact Details in Source Code

**Severity:** Informational · **Category:** Privacy

The source code and live site expose the business phone number `+234 805 745 1244` and physical address `48 Agboyi Rd, Orioke, Lagos 100242`. This is intentional for a business website, but be aware that scrapers routinely harvest such information.

**Recommendation:** This is expected for a business website. No action needed unless spam becomes an issue.

---

### ℹ️ Finding 10 — Missing `robots.txt` and `security.txt`

**Severity:** Informational · **Category:** Best Practice

- **`robots.txt`**: Not present (returns 404). While not a security vulnerability, it is standard practice for SEO and crawler management.
- **`security.txt`**: Not present. This file (at `/.well-known/security.txt`) provides a contact point for security researchers.

**Recommendation:** Add both files to the `public/` directory.

---

## ✅ Positive Security Findings

| Finding | Status |
|---------|--------|
| **HTTPS enforced** | ✅ Site is HTTPS-only |
| **HSTS enabled** | ✅ `Strict-Transport-Security: max-age=63072000` (2 years) |
| **Source maps not exposed** | ✅ `.map` files return 404 |
| **No mixed content** | ✅ All assets loaded over HTTPS |
| **No secrets in source code** | ✅ No API keys or credentials found |
| **No eval() or unsafe inline JS** | ✅ Clean console, no warnings |
| **No user input / forms** | ✅ Eliminates XSS and injection vectors |
| **React StrictMode enabled** | ✅ Additional development-time checks |
| **No backend / API / database** | ✅ Minimal attack surface |

---

## Recommended Actions (Prioritized)

### Priority 1 — Quick Wins (< 1 hour)

Create a `vercel.json` in the project root with security headers:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=(), payment=()" },
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; frame-ancestors 'none'"
        }
      ]
    }
  ]
}
```

### Priority 2 — Maintenance (Ongoing)

- Run `npm audit` and update dependencies
- Enable GitHub Dependabot or Renovate for automated security alerts
- Add a `robots.txt` and `security.txt` to the `public/` directory

### Priority 3 — Repository Hygiene

- Consider making the repo private if public access is not needed
- Enable branch protection rules on `main`
- Require PR reviews before merging

---

## Audit Evidence

![Live website screenshot](blushing_beauty_home_verified_1772618210981.png)

![Browser security headers check recording](security_headers_check_1772618165907.webp)

---

> [!IMPORTANT]
> This audit covers the website and repository at a point in time (March 4, 2026). Security is an ongoing process — re-audit periodically, especially after significant changes or dependency updates.
