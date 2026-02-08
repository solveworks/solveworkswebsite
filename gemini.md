# Gemini - Project Constitution

## 1. Project Identity
**Name:** Solveworks Automations Landing Page
**North Star:** Create a gorgeous, interactive, and appealing landing page for "Solveworks Automations" that effectively converts visitors interested in AI Dispatcher services.
**Stack:** HTML5, Vanilla CSS (High-end, animations), JavaScript (Interactivity), Supabase (Data), n8n (Automation), Cloudflare Pages (Hosting).

## 2. Data Schemas
> The "Data-First" Rule: Coding only begins once the "Payload" shape is confirmed.

### Data Types

#### `ContactSubmission`
This is the core payload for the landing page.
```json
{
  "full_name": "string",
  "email": "string (email format)",
  "company_name": "string (optional)",
  "phone_number": "string (optional)",
  "message": "string",
  "service_interest": "string (enum: 'AI Dispatcher', 'Automation Consulting', 'Other') [Optional]",
  "created_at": "timestamp (ISO 8601)",
  "source": "string (default: 'website_contact_form')"
}
```

### Storage Schema (Supabase: `submissions`)
| Column | Type | Nullable | Notes |
| :--- | :--- | :--- | :--- |
| `id` | `uuid` | No | Primary Key, default `gen_random_uuid()` |
| `created_at` | `timestamptz` | No | Default `now()` |
| `full_name` | `text` | No | |
| `email` | `text` | No | |
| `company_name` | `text` | Yes | |
| `phone_number` | `text` | Yes | |
| `message` | `text` | Yes | |
| `status` | `text` | No | Default 'new' |

## 3. Behavioral Rules
- **Aesthetics:** "Gorgeous, interactive, appealing." Use modern design trends (gradients, glassmorphism, smooth scroll, micro-interactions).
- **Tone:** Professional yet innovative. "Consultancy" feel.
- **Interactivity:** The site must feel "alive".
- **Code:**
  - Semantic HTML5.
  - CSS Variables for color/spacing systems.
  - No heavy frameworks unless strictly necessary (Vanilla/Vite preferred for performance).
  - Mobile-first response.

## 4. Architectural Invariants
- **Layer 1: Architecture (`architecture/`)**: Technical SOPs.
- **Layer 2: Tools (`tools/`)**:
    - `submit_form.py` (Mock/Test script for Supabase connection).
    - `setup_supabase.py` (Schema migration).
- **Integrations**:
    - Supabase Client (JS) for frontend.
    - n8n Webhook (triggered by Supabase DB changes or direct API call).

## 5. Maintenance Log
- [ ] (Pending Deployment)
