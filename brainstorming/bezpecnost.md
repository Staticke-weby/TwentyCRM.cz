# Bezpečnost a GDPR — source-of-truth pro stránku /bezpecnost/

> **Účel:** Kanonický zdroj ověřených faktů pro web sekci o bezpečnosti.
> Každý claim na stránce `/bezpecnost/` musí mít zde citaci s URL a datem ověření
> (CLAUDE.md pravidlo o pravdivosti + content shelf-life — bezpečnostní claimy
> stárnou rychle, je třeba je každých ~3 měsíce přeověřit).
>
> **Poslední revize zdrojů:** 2026-06-10

---

## 1. Twenty CRM (aplikační vrstva)

| Fakt | Zdroj | Ověřeno |
|---|---|---|
| Open-source pod licencí AGPL-3.0 | github.com/twentyhq/twenty/LICENSE | 2026-06-10 |
| Role-based oprávnění: object / field / settings | docs.twenty.com/user-guide/permissions-access/overview | 2026-06-10 |
| SSO Google + Microsoft přes OAuth (standardně) | docs.twenty.com/user-guide/permissions-access | 2026-06-10 |
| SAML/OIDC SSO — pouze Cloud Organization | confirmed v cloud-vs-selfhost.latte tabulce | — |
| Row-level oprávnění — pouze Cloud Organization | confirmed v cloud-vs-selfhost.latte tabulce | — |
| Audit log — pouze Cloud Organization | confirmed v cloud-vs-selfhost.latte tabulce | — |
| MFA na úrovni účtu | docs.twenty.com permissions overview (multi-factor authentication capabilities) | 2026-06-10 |

> **Customer-facing link (v Czech):** https://docs.twenty.com/l/cs/user-guide/permissions-access/overview

---

## 2. Elestio (orchestrace serverů)

| Fakt | Zdroj | Ověřeno |
|---|---|---|
| SOC 2, ISO 27001, HIPAA, GDPR compliance | elest.io landing (Security stance) | 2026-06-10 |
| Hosting partneři: Hetzner + Netcup + 7 dalších | elest.io main page | 2026-06-10 |
| Account data stored in EU | elest.io security stance | 2026-06-10 |
| Application data v user-selected region; backups on same continent | elest.io security stance | 2026-06-10 |
| Pre-configured firewall s IP-based access | elest.io security stance | 2026-06-10 |
| TLS encryption for all connections | elest.io fully managed | 2026-06-10 |
| Kernel-level security patches automated | elest.io fully managed | 2026-06-10 |
| Automated OS patches | elest.io fully managed | 2026-06-10 |
| Dedicated hardware, not shared VMs | elest.io fully managed | 2026-06-10 |
| 24/7 monitoring (proactive) | elest.io fully managed | 2026-06-10 |
| Daily automated backups | elest.io security stance | 2026-06-10 |
| **Borg backup** jako konkrétní nástroj (incremental + šifrované) | provozní zkušenost (zatím bez veřejné docs citace) | 2026-06-10 |
| **Zálohy do jiné lokace** než produkční server (off-site) | elest.io security stance „backups on the same continent" + náš návrh | 2026-06-10 |
| **Možnost zacílit S3 backup** do klientského úložiště (Hetzner / AWS / MinIO) | provozní možnost Borg + S3 endpointu | 2026-06-10 |
| SSH key management | docs.elest.io/books/security | 2026-06-10 |
| Rate limiting capabilities | docs.elest.io/books/security | 2026-06-10 |
| Email-based MFA na úrovni Elestio účtu | docs.elest.io/books/security | 2026-06-10 |
| Cloudflare integration (DNS + Tunnel volitelně) | docs.elest.io/books/security | 2026-06-10 |

---

## 3. Hetzner (servery + Object Storage)

| Fakt | Zdroj | Ověřeno |
|---|---|---|
| ISO/IEC 27001:2022 (SOCOTEC certified) | hetzner.com/unternehmen/zertifizierung | 2026-06-10 |
| Pokrývá Hetzner Online GmbH + Hetzner Finland Oy | tamtéž | 2026-06-10 |
| Datacentra: Norimberk, Falkenstein (DE), Helsinki (FI); my používáme Norimberk a Falkenstein (servery i S3), Helsinki jen volitelně pro zálohování na míru | tamtéž + vlastní provoz | 2026-08-17 |
| Data zůstávají v EU (default) | hetzner.com/legal/privacy-policy | 2026-06-10 |
| DPA dostupné na vyžádání | privacy-policy + obecná praxe Hetzner | 2026-06-10 |
| Object Storage S3-compatible | docs.hetzner.com/storage/object-storage/overview | 2026-06-10 |
| Object Storage 3 EU endpointy: fsn1, nbg1, hel1 | tamtéž | 2026-06-10 |
| Object Storage = Ceph cluster (redundance) | tamtéž | 2026-06-10 |
| WORM podpora | tamtéž | 2026-06-10 |

> **Pozn. k šifrování at-rest na Object Storage:** Hetzner dokumentace neuvádí
> server-side encryption v default scope. Pro klienty s vyšší citlivostí
> přidáváme klient-side šifrování souborů před uploadem (aplikační vrstva).
> Šifrování v přenosu je TLS (S3 endpoint je HTTPS-only).

---

## 4. Netcup (alternativa pro servery)

| Fakt | Zdroj | Ověřeno |
|---|---|---|
| ISO/IEC 27001 (TÜV NORD certified, 2024) | netcup.com/en/about-netcup | 2026-06-10 |
| ISO 9001 (Quality Management) | tamtéž | 2026-06-10 |
| ISO 14001 (Environmental Management) | tamtéž | 2026-06-10 |
| **ISO/IEC 27701** (Privacy Information Management) | tamtéž | 2026-06-10 |
| Sídlo: Karlsruhe (DE); naše servery převážně v DC Norimberk (DE) | tamtéž + vlastní provoz | 2026-08-17 |
| 24/7 on-site technici | tamtéž | 2026-06-10 |
| Hardwarová redundance | tamtéž | 2026-06-10 |

> **Pozn.:** ISO 27701 je doplněk k 27001 pro management ochrany soukromí —
> Netcup je tady silnější než Hetzner (Hetzner 27701 v naší ověřené sadě nemá).

---

## 5. Naše provozní zodpovědnost

(naše opatření nad rámec dodavatelů; není to certifikace, ale jasný popis)

- DPA podepisujeme s každým klientem před spuštěním (čl. 28 GDPR).
- Sub-zpracovatelé (Hetzner / Netcup / Elestio) — vlastní DPA, předáváme klientovi seznam.
- SSH přístup k serveru jen přes klíče, ne hesla; auditujeme přihlášení.
- Twenty aktualizujeme po dohodě s klientem (testovací prostředí → produkce), ne automaticky — release Twenty bývá týdně a klient by se v UI ztratil bez avíza.
- Záznamy o činnostech zpracování podle GDPR čl. 30 vedeme.
- Pověřenec pro ochranu osobních údajů (DPO) — ESHOpino nemá povinnost (čl. 37).
  Pokud klient DPO má, komunikujeme přímo s ním.
- Breach notification: do 24 h od detekce klientovi; klient pak má 72 h na ÚOOÚ
  (čl. 33–34).

---

## 6. Cloud (Twenty Inc.) — explicitní caveat

Pokud klient zvolí Twenty Cloud:

- Data fyzicky leží u Twenty Inc. v USA.
- Twenty Inc. má vlastní DPA + bezpečnostní opatření — odkaz: twenty.com/legal
- My nejsme zpracovatel ani sub-zpracovatel — klient je s Twenty Inc. v přímém vztahu.
- Pro klienty v regulovaných oborech nebo s citlivými osobními údaji doporučujeme
  vyhrazený server (data zůstávají v EU pod naším provozem). Viz `cloud-vs-selfhost.md`.

---

## 7. Co bylo zvažováno a vědomě VYNECHÁNO

- **Konkrétní jméno fail2ban** — Elestio v ověřené dokumentaci hovoří o „rate limiting"
  a „firewall configuration", ne explicitně o fail2ban. Na stránce mluvíme o
  „ochraně proti brute-force útokům" / „rate limiting" bez jmenování konkrétního
  nástroje, aby se claim držel toho, co máme ověřené. (Pokud chceme fail2ban
  explicitně, ověřit s Elestio support a doplnit citaci.)

- **„Penetrační test na vyžádání"** — máme zmíněno v FAQ, ale je to nabídka,
  ne hotová služba. Před prvním leadovým požadavkem si nasmlouvat partnera
  (např. CESEC / NÚKIB-registrovaný pen-tester).

- **SLA garance dostupnosti %** — neuvádíme konkrétní % (např. 99.9), protože
  nemáme historická data za vyhrazený server pod 12 měsíců provozu. Vrátit se
  k tomu po roce od prvního klienta.

- **Šifrování at-rest na úrovni disku serveru** — Elestio defaultně nešifruje
  blok-level. Pro klienty s vyššími nároky umíme nasadit LUKS/dm-crypt, ale
  není to default. Na stránce mluvíme o šifrování dat v přenosu (TLS) a o
  šifrovaných zálohách — co umíme dnes.

---

## 8. Plán re-verifikace

| Frekvence | Co kontrolovat |
|---|---|
| Měsíčně | Twenty release notes — zda nepřibyl SSO/audit log do community edition |
| Quarterly (každé 3 měsíce) | Hetzner + Netcup + Elestio compliance pages (nová certifikace? skončila stará?) |
| Quarterly | docs.hetzner.com Object Storage — at-rest encryption status |
| Ad-hoc | Při každém klientském auditu nebo penetračním testu |

---

## 9. Odkazy pro stránku

Hotové URL pro „zdroje" sekci na konci stránky:

- Twenty Permissions: https://docs.twenty.com/l/cs/user-guide/permissions-access/overview
- Twenty GitHub (kód k auditu): https://github.com/twentyhq/twenty
- Hetzner ISO 27001: https://www.hetzner.com/unternehmen/zertifizierung/
- Netcup certifikace: https://www.netcup.com/en/about-netcup
- Elestio: https://elest.io/
- Hetzner Object Storage: https://docs.hetzner.com/storage/object-storage/overview/
