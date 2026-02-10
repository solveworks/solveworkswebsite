# Task Plan - B.L.A.S.T. Protocol

## 🟢 Protocol 0: Initialization (Mandatory)
- [x] Initialize Project Memory
- [x] Discovery Questions Answered (See `findings.md`)
- [x] Data Schema Defined in `gemini.md`
- [ ] Approved Blueprint (Current Step)

## 🏗️ Phase 1: B - Blueprint (Vision & Logic)
- [ ] 1. Design Concept Generation (Text-to-Design ideas)
- [ ] 2. Define Site Structure (Sections: Hero, Problem/Agitate, Solution/AI Dispatcher, Features, Social Proof, Contact)
- [ ] 3. Asset Gathering (Images/Copy - *Need to generate or source*)

## ⚡ Phase 2: L - Link (Connectivity)
- [ ] 1. Create `setup_supabase.py` tool to verify connection (or manual check if user provides keys).
- [ ] 2. Create `test_n8n_trigger.py` (if webhook URL provided).
- [ ] 3. Initialize Git Repo.

## ⚙️ Phase 3: A - Architect (The 3-Layer Build)
- [ ] 1. **Layer 1 (SOPs):**
    - Create `architecture/frontend_structure.md` (HTML/CSS organization).
    - Create `architecture/supabase_integration.md`.
- [ ] 2. **Layer 3 (Tools):**
    - Build `tools/generate_assets.py` (or use internal tools).
- [ ] 3. **Construction:**
    - Scaffold Project `src/`.
    - Implement Design System (CSS Variables).
    - Build Components (Header, Hero, Features, Form).

## ✨ Phase 4: Stylize - Design Overhaul
    - [x] 1. Analyze Design Assets (Colors/Logo)
    - [x] 2. Setup Design System (Dark Glass + Olive Green)
    - [x] 3. Refactor Layout (Hero with Live Demo, Minimal Header)
    - [x] 4. Apply Glassmorphism & Animations (Parallax, Tilt)
    - [x] 5. Verify Accessibility & Performance
- [ ] Phase 5: Trigger
    - [x] Initialize Git Repo
    - [x] Documentation (Deployment Guide)
    - [ ] Deploy to Cloudflare (User Action)
    - [ ] Configure n8n Webhook
    - [ ] Final End-to-End Test (Form -> Supabase -> n8n)
