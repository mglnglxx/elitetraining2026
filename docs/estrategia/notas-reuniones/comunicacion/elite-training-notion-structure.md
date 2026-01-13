# Elite Training Command Center
## Notion Workspace Structure

---

# 🏠 HOME

A single dashboard that shows what matters now. Links to everything, owns nothing.

**Sections:**
- **This Week**: Upcoming content, events, meetings (embedded from databases)
- **Key Metrics**: Manual updates for now (courses sold, community size, pipeline)
- **Quick Links**: Jump to any section
- **Recent Activity**: Last edited pages across workspace

---

# 📐 STRATEGY

*The "why" behind everything. Read-only for most team members.*

## Pages:

### Positioning & Message
- Core positioning statement (internal)
- Authority Engine framework (broadcast → community → relationship)
- Message architecture by layer
- Voice & tone guidelines
- What we say vs. what we never say

### 2026 Plan
- Annual objectives
- Quarterly milestones
- The pivot explained (from dates/prices → authority)
- Success criteria

### Sector Strategy
- The matrix (Oil & Gas, Gas GLP, Seg Proc, Integridad, Mantenimiento, Hab Dir)
- Star courses per sector
- Why these, why now
- Competitive positioning per sector

### Meeting Notes & Decisions
> **Database: Meeting Notes**
> 
> | Property | Type |
> |----------|------|
> | Title | Title |
> | Date | Date |
> | Attendees | Multi-select |
> | Type | Select (Strategy, Operations, Client, Partner) |
> | Sector | Multi-select |
> | Key Decisions | Text |
> | Action Items | Text |
> | Related To | Relation → Companies, Partners, Events |
> | Notes | Page content |

---

# 🔍 INTELLIGENCE

*Research, market knowledge, regulatory updates. The brain.*

## Pages:

### Regulatory Landscape
- NFPA 652 (2023) summary & implications
- Colombian regulations affecting clients
- Upcoming changes to track
- Links to source documents

### Partner Research

> **Database: Partners & Potential Partners**
> 
> | Property | Type |
> |----------|------|
> | Name | Title |
> | Type | Select (ARL, Certification Body, Industry Org, Corporate) |
> | Status | Select (Active Partner, In Conversation, To Research, Target) |
> | Sector Relevance | Multi-select |
> | Contact | Text |
> | Relationship Owner | Person |
> | Value to Us | Text |
> | Value to Them | Text |
> | Notes | Page content |
> | Related Meetings | Relation → Meeting Notes |

**Initial entries to populate:**
- Dupont (corporate partner, NFPA events)
- ARL Colpatria (existing)
- ARL Sura (existing)
- AXA Colpatria (existing, generated consulting)
- Colgas (Gas GLP sector)
- OCENSA (Integridad, knows us as referent)
- API (representation)
- ASME (representation)
- *Add: Research on other ARLs in Colombia*

### Competitor Landscape
- Who else operates in our sectors
- Their positioning vs. ours
- Gaps we can exploit

### Industry News & Trends
- Running log of relevant updates
- Tagged by sector

---

# 📣 CONTENT & COMMUNITIES

*Editorial calendar, channel management, content production.*

## Pages:

### Content Strategy
- Content types by channel (LinkedIn, WhatsApp, Webinars)
- The three content pillars:
  1. **Criterio**: Expert takes on norms, practices, decisions
  2. **Signal**: Social proof, client wins, partnerships
  3. **Evento**: Webinars, summits, flagships
- Content-to-community pipeline

### Editorial Calendar

> **Database: Content Calendar**
> 
> | Property | Type |
> |----------|------|
> | Title | Title |
> | Channel | Select (LinkedIn, WhatsApp-SegProc, WhatsApp-Integridad, WhatsApp-O&G, WhatsApp-Gas, WhatsApp-Manto, Email, Blog) |
> | Content Type | Select (Criterio, Signal, Evento, Announcement, Value Drop) |
> | Sector | Multi-select |
> | Status | Select (Idea, Drafting, Ready, Scheduled, Published) |
> | Publish Date | Date |
> | Author/Owner | Person |
> | Copy | Page content |
> | Assets | Files |
> | Performance | Text (manual: views, engagement, etc.) |
> | Related Event | Relation → Events |

**Views:**
- Calendar view (by publish date)
- Board view (by status)
- Table filtered by channel
- This week's content

### WhatsApp Communities

> **Database: Communities**
> 
> | Property | Type |
> |----------|------|
> | Name | Title |
> | Sector | Select |
> | Member Count | Number |
> | Status | Select (Active, Building, Planned) |
> | Content Cadence | Text |
> | Last Message Sent | Date |
> | Growth Target | Number |
> | Notes | Page content |

**Communities to set up:**
1. Seguridad de Procesos
2. Integridad & Comisionamiento
3. Oil & Gas Upstream
4. Gas GLP & LNG
5. Mantenimiento Industrial
6. (Optional) Habilidades Directivas

### LinkedIn Strategy
- Profile optimization checklist
- Content themes rotation
- Posting schedule
- Engagement tactics
- Key accounts to engage with

### Content Bank
- Evergreen post templates
- NFPA 652 content series (from ChatGPT research)
- Case study frameworks
- Testimonial collection

---

# 🎤 EVENTS

*From weekly webinars to annual flagships.*

> **Database: Events**
> 
> | Property | Type |
> |----------|------|
> | Name | Title |
> | Type | Select (Webinar, Summit Series, Flagship) |
> | Sector | Multi-select |
> | Date(s) | Date |
> | Status | Select (Idea, Planning, Confirmed, Promoting, Completed, Cancelled) |
> | Format | Select (Online, In-Person, Hybrid) |
> | Paid/Free | Select |
> | Price | Number |
> | Target Attendance | Number |
> | Actual Attendance | Number |
> | Speakers | Relation → Instructors |
> | Partner Involvement | Relation → Partners |
> | Promotion Plan | Page content |
> | Debrief/Learnings | Page content |
> | Related Content | Relation → Content Calendar |
> | Revenue | Number |
> | Costs | Number |

## Pages:

### Webinar Playbook
- Standard format (45 min + Q&A)
- Tech setup checklist
- Promotion timeline (4 weeks out → day of)
- Follow-up sequence
- Recording distribution (→ WhatsApp communities)

### Summit Series Framework
- "Semana de [Sector]" format
- 4-day structure template
- Pricing strategy
- Speaker recruitment
- Promotion campaign template

### Flagship Event Planning
- 2x/year cadence
- Venue requirements
- Invitation strategy (who must be there)
- Recognition/award opportunities
- Sponsorship possibilities
- Budget template

### 2026 Event Calendar
- Embedded calendar view from Events database
- Tentative dates for:
  - Monthly webinars
  - Q1 Summit: Seguridad de Procesos
  - Q2 Summit: Integridad
  - Q3 Summit: Oil & Gas / Mantenimiento
  - Q4 Summit: Year-end / Multi-sector
  - Flagship 1: [Date TBD, H1]
  - Flagship 2: [Date TBD, H2]

---

# 🤝 RELATIONSHIPS

*Companies, instructors, the people that matter.*

## Databases:

### Target Companies (The 40)

> **Database: Companies**
> 
> | Property | Type |
> |----------|------|
> | Company Name | Title |
> | Sector | Multi-select |
> | Size | Select (Enterprise, Mid-Market, SMB) |
> | Status | Select (Target, Contacted, In Conversation, Client, Dormant) |
> | Client Type | Select (Cerrado potential, Abierto participant, Both) |
> | Key Contact | Text |
> | Contact Role | Text |
> | Relationship Owner | Person |
> | Last Contact | Date |
> | Next Action | Text |
> | Next Action Date | Date |
> | Courses Taken | Relation → Courses |
> | Events Attended | Relation → Events |
> | Notes | Page content |
> | Meetings | Relation → Meeting Notes |

**Views:**
- Pipeline board (by status)
- By sector
- Needs follow-up (next action date = past)
- All clients

### Instructors

> **Database: Instructors**
> 
> | Property | Type |
> |----------|------|
> | Name | Title |
> | Courses | Multi-select |
> | Sectors | Multi-select |
> | Exclusivity | Select (Exclusive, Preferred, Shared, Unknown) |
> | Location | Text |
> | Cost Structure | Text |
> | Client Pull | Text (which companies request them) |
> | Repeat Rate | Text |
> | Strengths | Text |
> | Notes | Page content |
> | Events | Relation → Events |

### Key Contacts (within companies)

> **Database: Contacts**
> 
> | Property | Type |
> |----------|------|
> | Name | Title |
> | Company | Relation → Companies |
> | Role | Text |
> | Email | Email |
> | Phone/WhatsApp | Phone |
> | LinkedIn | URL |
> | Relationship Strength | Select (Cold, Warm, Strong, Champion) |
> | Communities Joined | Relation → Communities |
> | Events Attended | Relation → Events |
> | Notes | Text |

---

# 📊 COURSES & OPERATIONS

*The actual product. Tracking performance.*

### Course Portfolio

> **Database: Courses**
> 
> | Property | Type |
> |----------|------|
> | Course Name | Title |
> | Sector | Select |
> | Is Star Course | Checkbox |
> | Instructor(s) | Relation → Instructors |
> | Tied to Certification | Checkbox |
> | Certification Body | Relation → Partners |
> | Break-Even Participants | Number |
> | Target Margin | Number |
> | Typical Duration | Text |
> | Format | Select (Cerrado only, Abierto only, Both) |
> | 2025 Performance | Page content |
> | Notes | Page content |

### Course Instances (Optional - for tracking)

> **Database: Course Runs**
> 
> | Property | Type |
> |----------|------|
> | Title | Title (auto: Course + Date) |
> | Course | Relation → Courses |
> | Date | Date |
> | Type | Select (Cerrado, Abierto) |
> | Client | Relation → Companies |
> | Participants | Number |
> | Revenue | Number |
> | Costs | Number |
> | Margin | Formula |
> | Instructor | Relation → Instructors |
> | Notes | Text |

---

# 🗂️ RESOURCES

*Templates, brand assets, reference materials.*

## Pages:

### Message Templates
- LinkedIn post templates
- WhatsApp community messages
- Outreach email/message templates
- Webinar invitation templates
- Follow-up sequences

### Brand Assets
- Logo files
- Color codes
- Fonts
- Presentation templates
- Document templates

### Playbooks
- New client onboarding
- Webinar execution
- Summit series execution
- Flagship event checklist
- Community management weekly routine

### External Resources
- Links to NFPA documents
- Industry association sites
- Competitor sites
- Regulatory body sites

---

# 👥 TEAM VIEW (Simplified)

*A filtered, read-friendly view for non-power-users.*

### What's Happening Now
- This week's content (embedded)
- Upcoming events (embedded)
- Recent wins (manual updates)

### Our Strategy (Summary)
- The positioning in plain language
- What we're focused on in 2026
- How we're different now

### How to Contribute
- Where to submit content ideas
- How to log client feedback
- Meeting notes template

---

# IMPLEMENTATION ORDER

## Week 1: Foundation
1. Create workspace structure (sections, navigation)
2. Build Strategy section with positioning docs
3. Import your existing meeting notes
4. Set up Meeting Notes database

## Week 2: Intelligence & Relationships
5. Create Partners database, populate with known entities
6. Create Companies database (start with the 40)
7. Create Instructors database, do initial analysis
8. Add your ChatGPT research as pages under Intelligence

## Week 3: Content & Communities
9. Set up Content Calendar database
10. Create WhatsApp Communities database
11. Draft first 2 weeks of content
12. Document channel strategies

## Week 4: Events
13. Create Events database
14. Map out 2026 event calendar (tentative)
15. Create Webinar Playbook
16. Plan first webinar

## Ongoing
- Daily: Add meeting notes, log interactions
- Weekly: Review content calendar, update company statuses
- Monthly: Review metrics, adjust strategy
- Quarterly: Full strategy review with stakeholders

---

# SHARING & PERMISSIONS

**Full access (edit everything):**
- You (Miguel)
- [Other key decision makers]

**Can edit specific sections:**
- Content team → Content & Communities
- Sales/BD → Relationships
- Operations → Courses & Operations

**Can view only:**
- General team members
- External stakeholders (via specific shared pages)

**Public pages (optional):**
- None initially
- Could later publish Resources or event pages

---

# QUICK WINS TO SHOW STAKEHOLDERS

Once basic structure is in place, show them:

1. **The Home dashboard** — "This is where we see everything at a glance"
2. **The 40 Companies board** — "This is our pipeline, organized"
3. **The Event Calendar** — "This is our 2026 plan, visible"
4. **The Content Calendar** — "This is what we're saying and when"
5. **A Meeting Notes page** — "This is how we capture and find decisions"

The visual clarity alone will signal professionalization.
