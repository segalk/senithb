(function () {
  var projects = [
    {
      id: 1,
      title: 'Navigation Redesign for IFS Cloud',
      gallery: [],
      category: 'UX & Product',
      summary: 'Navigation was distributed across several panels with different interaction models, creating unnecessary friction for repeat use. I led the end-to-end redesign, consolidating bookmarks, page browsing and recent-screen history into one consistent interaction model.',
      client: 'IFS',
      product: 'IFS Cloud',
      role: 'Experience Design Lead',
      tools: 'Figma',
      sourcingNote: 'This case study focuses on my design contribution to a shipped navigation experience. Public IFS documentation is referenced where appropriate to provide context for the resulting product experience. The reasoning is my own account. The design artefacts — Figma files, iteration boards, research material, prototypes — belong to IFS and stay with them.',
      overview: 'Navigation redesign for IFS Cloud. As Experience Design Lead I owned the work across research synthesis, interaction design, visual design and delivery support through implementation, and I moderated the usability validation sessions. The existing navigation model introduced unnecessary friction through scattered panels and inconsistent interaction patterns. I designed a unified panel model with one consistent interaction, balancing simplicity against scalability.',
      challenge: 'Navigation was distributed across several surfaces, each with its own trigger, interaction pattern and visual treatment, so users had to learn different behaviours depending on which navigation mechanism they needed. Bookmarking exposed one of the clearest inconsistencies: actions for creating, managing and accessing bookmarks were separated across different interactions, increasing the effort required to return to saved destinations. The result was a navigation model that was inconsistent and difficult to understand, making it harder for users to find and return to the pages they needed — friction for both users learning the system and experienced users relying on established habits.',
      solution: 'Three consolidated panels — bookmarks, page navigation and recent screens — are all triggered from one shared icon rail instead of a mix of top-bar and inline triggers. Bookmarks were brought into the shared navigation model, combining access and management within a consistent panel pattern, and the interaction remains available while users move between destinations. The navigator moved into the same shared panel model, retaining its established browsing and search behaviour while aligning its trigger and interaction pattern with the rest of navigation. Recent screens moved from a full-screen treatment into the shared panel, letting users revisit previous destinations while keeping the underlying workspace visible. What deliberately did not change: I kept the existing taxonomy, labelling, drill-down behaviour and established layout conventions stable, so the release focused on making navigation easier to reach and more predictable without forcing users to relearn the information architecture. The desktop model adapts to smaller screens through a drawer-based pattern that preserves the same core navigation behaviour and interaction model.',
      highlights: ['Three consolidated panels — bookmarks, page navigation and recent screens — triggered from one shared icon rail', 'Existing taxonomy, labelling, drill-down behaviour and layout conventions deliberately kept stable', 'Supports four core behaviours: browsing to a destination, saving frequent destinations, returning to recent work, and establishing a preferred starting point'],
      results: 'The redesign established a more consistent interaction model across core navigation workflows while preserving the underlying information architecture and familiar navigation behaviours.',
      sections: [
        {
          heading: 'My approach',
          body: 'I synthesised research findings into a clear set of navigation pain points and usage patterns, which grounded the problem definition and design direction. Three themes shaped that direction: reducing fragmentation, preserving user context between navigation actions, and making repeat access more efficient. I considered different navigation behaviours and familiarity levels, designing for both discovery and repeat use, and validated through moderated usability sessions focused on key wayfinding and repeat-use scenarios.'
        },
        {
          heading: 'Matching validation to scope',
          body: 'This project moved where navigation lived rather than restructuring what was in it. Testing the hierarchy would have tested something I deliberately was not changing. What mattered was whether the new placement remained discoverable without forcing established users to relearn the navigation model. Because the redesign changed the location of navigation controls, I treated keyboard, focus and tab-order behaviour as part of the design problem rather than a final compliance check, and I used observed behaviour alongside task outcomes to inform design decisions.'
        },
        {
          heading: 'Competitive analysis',
          body: 'I looked at how comparable large-scale enterprise platforms structure primary navigation, examining SAP and Salesforce most closely. The question was not which menu looked best — it was how users of a system with hundreds of business capabilities find something, remember where it was, and get back without losing their place. What reframed the problem was seeing that mature enterprise platforms do not rely on a single navigation mechanism. Every mature platform at this scale runs several in parallel: a structural hierarchy for browsing, personalised shortcuts, a history of recent activity, and search as a direct route. Different users navigate with different strategies. Someone new asks where they find purchase orders; someone with years on the product asks how to get to the one page they open thirty times a day. A single menu answers one of those well and the other badly.'
        },
        {
          heading: 'What I took, and what I left',
          body: 'The issue was not the existence of multiple navigation mechanisms — mature enterprise products commonly support different routes for browsing, saved destinations, recent activity and direct access. The challenge was making those mechanisms feel like one coherent navigation system. So: keep the mechanisms, unify their behaviour. Separate discovery from execution — the navigator answers what exists, while bookmarks and recent screens answer what I use, and conflating them is what made the original panels compete rather than complement. Serve novice and expert paths at once rather than optimising for one. What I deliberately did not take was broader information-architecture change: it would have expanded the project from interaction consistency into a larger restructuring exercise, introducing unnecessary relearning for existing users.'
        },
        {
          heading: 'What I learned from validation',
          body: 'Validation helped me assess whether the new navigation structure was understandable and where discoverability could be strengthened. One important distinction I considered was recognition versus comprehension: patterns that work well for experienced users may not be equally meaningful to people with less product familiarity. The work also reinforced the value of preserving workspace context during navigation, making reduced interruption to the current task a design consideration alongside visual clarity. I also used validation to balance information density against the effort required to scan and revisit previous destinations.'
        },
        {
          heading: 'Design strategy',
          items: [
            'One shared shell. The navigation experiences had different content needs, but they could share a common interaction model, so I designed one reusable panel structure with different content per trigger.',
            'Accessibility. The challenge was preserving established keyboard and focus behaviour while changing the navigation structure, so I treated the structural change itself as an accessibility consideration.',
            'Consistency across platforms. I aligned the navigation pattern with the existing design language so the same interaction model could adapt to smaller screens without introducing a second interaction language.',
            'Localisation. Variable label lengths and different reading directions meant the redesign needed to work without relying on fixed text assumptions, so this was considered from the beginning.',
            'Uplifting a legacy solution while keeping familiarity — mostly by restraint. Because the navigation model was already familiar, the redesign changed how navigation was reached and behaved while deliberately leaving its underlying content intact. Keeping those boundaries fixed narrowed the work to a single coherent idea rather than a broad rewrite, and that restraint is what made the change feel like an improvement instead of a migration.'
          ]
        },
        {
          heading: 'Exploration & trade-offs',
          items: [
            'Bookmarks. I explored several approaches to simplify bookmark management, including label-less commands and additional shortcut groupings. These were not carried forward where they introduced complexity without enough user value.',
            'Page navigation. I explored several enhancements, but kept the release focused on interaction consistency rather than expanding into a broader navigation redesign.',
            'Challenging a simplification. I challenged a proposed simplification when it risked removing an established user capability without sufficient evidence that users no longer needed it.',
            'Recent activity. I explored richer management controls, but kept the interaction focused on the core repeat-navigation need rather than adding complexity that was not essential to the experience.'
          ],
        },
        {
          heading: 'What I learned',
          items: [
            'Cross-functional collaboration. Navigation touches many parts of an enterprise product, so the work required continuous collaboration across design, engineering, QA and product. A change to a shared product shell needs to be delivered incrementally with constant communication.',
            'Stakeholder management. The project reinforced the importance of challenging simplification when it risks removing established user value. Sometimes the strongest design decision is to do less rather than more.',
            'Decision making. Some decisions needed early alignment to protect scope, while others were deliberately left open until feasibility and evidence were clearer. Knowing which decisions required commitment — and which benefited from staying flexible — helped keep the release coherent.',
            'Design validation. I considered task completion alongside observed behaviour when evaluating discoverability and comprehension, which reinforced the importance of watching behaviour rather than relying only on success rates.',
            'Understanding how each person works — the one I did not expect. A cross-functional team is not a single audience: engineering, QA, product and program management each need a different level of detail, at a different moment, in a different form. Learning to read that, and to adjust how I presented the same decision to each, did more for the project than getting any individual design detail right.'
          ]
        },
        {
          heading: 'Sources and disclosure',
          body: 'Public product documentation is included as contextual reference for the shipped experience. No internal design files, research materials, prototypes or proprietary artefacts are included.',
          links: [
            { label: 'IFS Cloud 24R1 documentation', url: 'https://docs.ifs.com/ifsclouddocs/24r1/' },
            { label: 'Generic IFS Cloud layout, 24R2', url: 'https://docs.ifs.com/ifsclouddocs/24r2/UserGuide/ActivityGenericIFSCloudLayout.htm' },
            { label: 'Bookmarks bar, 24R1', url: 'https://docs.ifs.com/ifsclouddocs/24r1/UserGuide/ActivityBookmarksBar.htm' },
            { label: 'Bookmarks bar, 24R2', url: 'https://docs.ifs.com/ifsclouddocs/24r2/UserGuide/ActivityBookmarksBar.htm' },
            { label: 'Recent screens, 24R2', url: 'https://docs.ifs.com/ifsclouddocs/24r2/UserGuide/ActivityRecentScreens.htm' }
          ]
        }
      ]
    },
    {
      id: 2,
      title: 'Spatial UI for Hands-Free Field Service',
      gallery: [],
      category: 'UX & Product',
      summary: 'Adapting an established 2D enterprise interface into a spatial, hands-free context for field service engineers — where the display can\'t render black, the cursor is your head, and the screen is smaller than a postcard held at arm\'s length.',
      client: 'IFS',
      product: 'IFS Applications × Microsoft HoloLens',
      role: 'UX Designer — Spatial UI, IFS Labs',
      tools: 'Adobe Photoshop, Adobe Illustrator, Unity (handoff)',
      sourcingNote: 'This case study focuses on my design contribution to a publicly announced IFS Labs research programme. Public IFS documentation is referenced where appropriate to provide context for that programme and the prototype it produced. The reasoning and design principles are my own account. The design artefacts — concept renders, on-device screenshots and working files — belong to IFS and stay with them.',
      overview: 'Spatial UI design for a mixed-reality field service concept — enterprise ERP data on Microsoft HoloLens. I was the UX designer responsible for the spatial user interface: how enterprise asset data, work orders and service instructions should look and behave when they are floating in a technician\'s field of view instead of sitting in a browser window. The programme paired a standardized enterprise interface with spatial content representing the physical asset; the standardized interface — how business data reads, behaves and is arranged in a technician\'s field of view — is the work described here. IFS Labs, the company\'s applied research group, announced the proof of concept in July 2017, integrating IFS Applications with Microsoft HoloLens for field service management. It ran in two phases: a HoloLens 1 proof of concept built and publicly demonstrated by IFS Labs in 2017, and a HoloLens 2 customer-prospect phase in 2019, tested with Allinq, a telecom infrastructure services firm. Status: a proof of concept and a working prototype — not a shipped commercial product.',
      challenge: 'The premise: a service engineer arrives at an asset — a machine, a cabinet, a piece of infrastructure — and instead of looking away at a tablet or a laptop, sees the asset\'s service history, performance data, temperature readings and work instructions rendered in space, anchored to the thing they are working on. The engineer keeps both hands free, which on a real job is not a convenience but a precondition. Enterprise software has decades of accumulated convention: dense tables, sidebars, modals, hover states, a mouse pointer with pixel accuracy, a screen you can rely on being there. Almost none of it survives contact with a head-mounted additive display. The design problem was not to make an AR version of the app — it was to work out what survives the translation, what has to be rebuilt, and what has to be given up. Four hardware realities set the terms. First, the display is additive: it adds light and never subtracts it, projecting onto a transparent visor rather than painting pixels onto an opaque screen, so whatever sits behind the interface still shows through. Black is not a colour the device can render — it is the absence of projected light, which is to say it is transparent. Contrast has to be built from what you add, not from what you block, which inverts a habit every screen designer has: you cannot clear a space and then place content in it. Second, the cursor is your head. Selection was gaze-driven — a small pointer at the centre of the user\'s view, moved by turning the head and committed with a gesture. Head movement is coarser than wrist movement and harder to hold still, especially for someone standing on uneven ground, wearing gloves, or physically working, so every control sized for a mouse was too small. Third, the field of view is narrow: the holographic window is roughly the size of a postcard held at arm\'s length, and content outside it is not dimmed or peripheral — it does not exist until you turn your head to find it, so a panel placed off to the side is a panel the user has to go looking for. Fourth, the environment is not controllable — server room, roadside cabinet, machine bay, outdoors in daylight — and the backdrop changes per job and per minute as the technician moves, while the interface has to stay legible against all of it.',
      solution: 'Each of the four design decisions traces back to one of those constraints. Darker backgrounds, deliberately: because the display is additive, a dark panel fill does not create darkness, it creates a dense, opaque-reading surface that separates the enterprise data from whatever the technician is standing in front of. Dark teal and near-black fills gave the content a reliable ground across environments the design could not control, with light type carrying the information — the opposite of the light-surface convention the desktop product used, and the first thing to change in the translation. Bigger targets, sized to the input: every interactive surface was scaled to the accuracy the gaze cursor actually delivers rather than the accuracy a pointer implies, so buttons, list rows and panel controls are all substantially larger than their desktop equivalents, with generous spacing so a small head drift does not land on the wrong target. The cost is information density — you fit less on screen — and that trade was accepted deliberately, because a mis-tap while both hands are inside a machine is worse than a second panel. Placement inside the peripheral view: panels sit within peripheral vision rather than at the edges of the spatial canvas, so information is noticed rather than hunted for; in a hands-free workflow, any moment spent searching for a panel is a moment not spent on the task, and worse, a moment the technician has to look away from the asset. And layout handed to the user: where a panel should sit depends on where the physical asset is, how big it is, which side the technician is standing on and what else is in the room, and that changes with every job — so placement became the user\'s call, with a move affordance in each panel header and an arrangement that persists. What a technician ended up with was their own arrangement, not a designed layout. I think that is the most defensible decision in the project, and it came from recognising that the variable lived in the physical world rather than in the software: there was no correct answer to design toward.',
      highlights: [
        'Dark panel fills in place of the desktop product’s light surfaces — on an additive display, contrast has to be added rather than blocked',
        'Every target scaled to the accuracy gaze actually delivers, trading information density for reliable selection with both hands occupied',
        'Panel placement handed to the user, because the right position depends on the physical asset and changes with every job'
      ],
      results: 'The work reached a proof of concept and a working prototype, which was later tested with a prospective customer — Allinq, a telecom infrastructure services firm — as documented in IFS\'s published account of the programme. It did not become a shipped commercial product. IFS publicly described the concept as having potential to improve productivity and first-time-fix rates; these were IFS\'s published claims about the concept\'s potential, not measurements I conducted, and no outcome in this case study is presented as my own result. As of October 2019, IFS\'s own account noted that there were “plenty of challenges still to be overcome before these use cases are ready for productization.” That is the accurate status: applied research that produced a working prototype and a customer field test.',
      sections: [
        {
          heading: 'What was built',
          body: 'The working prototype presented enterprise asset context as independently placeable panels rather than a single fixed layout. The interface\'s job was to make business information readable inside a spatial context: legible against an environment the design could not control, reachable with a coarse input method, and arranged so a technician could keep working while consulting it. Each panel was a self-contained unit of context rather than a region of a larger screen — which is what made user-controlled placement possible in the first place, and what kept the layout from assuming a viewport that does not exist on a head-mounted display.'
        },
        {
          heading: 'Concept versus built',
          body: 'The concept direction used a chamfered panel silhouette — corner-cut edges, a deliberate industrial detail intended to make the panels feel like equipment rather than software windows. It read well as a rendering. It could not be built. A chamfer is a negative shape: the corner reads as cut because something is missing from a rectangle. On an opaque screen, missing means the background shows through, and the background is a known quantity. On an additive display there is no background — the missing corner is just unprojected light against an unpredictable real-world scene, so the chamfer stopped reading as a design detail and started reading as a rendering fault, differently in every environment. The built version uses square corners, because the panel boundary is then carried by the fill and its edge, both of which are things the display can actually produce. Alongside that change, the built panels are darker than the concept and carry header chrome the concept did not have — the controls that make the layout user-owned. The difference between the two is the actual design work: the concept is what the idea looked like, and the built version is what the idea looked like after the hardware had its say.'
        },
        {
          heading: 'What I learned',
          items: [
            'Read the hardware before you draw anything. Three of the four decisions here — dark fills, oversized targets, peripheral placement — come directly from properties of the display and the input method. None came from a screen-design instinct. The instinct would have produced a light interface with mouse-scaled controls, and it would have failed on device.',
            'A detail that only works in a render is not a design decision, it is a picture. The chamfered corner taught me to test a visual treatment against the actual output medium before committing to it, rather than after.',
            'Sometimes the right move is to not decide. Panel placement had no correct answer, because the answer lived in a physical environment that changed every job. Handing it to the user was not a cop-out — it was the only honest response to a variable the software could not see.',
            'Constraints produce more durable principles than layouts do. The decisions that held up were anchored to how the medium behaves — additive light, gaze as input, a narrow window, an environment nobody controls — rather than to a particular arrangement of panels. A principle derived from the physics of the display keeps its reasoning when the layout changes; a layout derived from taste does not.'
          ]
        },
        {
          heading: 'Sources and disclosure',
          body: 'Public product documentation is included as contextual reference for the publicly announced research programme and prototype. No internal design files, research materials, prototypes or proprietary artefacts are included. Everything named here — IFS, IFS Labs, IFS Applications, Microsoft HoloLens, Allinq — is on the public record via IFS\'s own publications.',
          links: [
            { label: 'IFS empowers service engineers with mixed reality using Microsoft HoloLens — IFS press release, 6 July 2017', url: 'https://news.cision.com/ifs/r/ifs-empowers-service-engineers-with-mixed-reality-using-microsoft-hololens,c2302825' },
            { label: 'IFS Labs and Allinq — IFS blog, 24 October 2019', url: 'https://blog.ifs.com/ifs-labs-allinq/' },
            { label: 'See it, hear it, feel it: augmented reality hits A&D maintenance — IFS blog', url: 'https://blog.ifs.com/see-it-hear-it-feel-it-augmented-reality-hits-ad-maintenance/' },
            { label: 'IFS entwickelt Mixed-Reality-Anwendungen für Servicetechniker mit Microsoft HoloLens — trade coverage', url: 'https://www.openpr.de/news/959672/IFS-entwickelt-Mixed-Reality-Anwendungen-fuer-Servicetechniker-mit-Microsoft-HoloLens.html' },
            { label: 'IFS Labs explains how the Microsoft HoloLens can help transform your business — demo video, 2017', url: 'https://www.youtube.com/watch?v=nrq3iM6GmWs' },
            { label: 'IFS Labs & Allinq — demo video, 2019 customer phase', url: 'https://www.youtube.com/watch?v=qEzmCdMUQJg' }
          ]
        }
      ]
    },
    {
      id: 3,
      title: 'Athirilli Brand Identity',
      category: 'Logo Design',
      summary: 'A logo for a Sri Lankan bed linen brand, built from mosaic tiles that echo folded sheets and a Sinhala calligraphic wordmark rooted in local identity.',
      client: 'Athirilli',
      clientUrl: 'https://www.facebook.com/Athirilli/',
      role: 'Logo & Brand Identity Designer',
      timeline: '2014 · 2 weeks',
      tools: 'Adobe Illustrator',
      cover: 'images/work/athirilli/00-cover-packaging-mockup.jpg',
      overview: 'Athirilli is a Maharagama, Sri Lanka–based bed linen and home textiles retailer — 100% cotton sheets, pillow cases, and custom-order bedding at accessible prices. The brief was to give the brand a mark it could use as its face across Facebook and future packaging/product tags — something distinctive in a crowded local retail space.',
      challenge: 'Needed a mark that communicated "bed linen" without being a literal illustration of a bedsheet or pillow — something more abstract and brand-able. Needed to feel locally rooted (Sri Lankan) rather than generic/global, to build trust and familiarity with the target customer base. As a small business, the mark had to work simply — as a profile icon, on packaging tags, and standing alone without a lot of supporting brand system.',
      solution: 'Built the icon from a small grid of colored mosaic tiles — a visual stand-in for folded/stacked bed sheets, with each tile in a different color to nod to the multicultural, multi-ethnic customer base the brand serves. Paired the icon with the brand name hand-rendered in Sinhala calligraphy — chosen specifically to give the mark uniqueness and an emotional closeness to Sri Lankan culture, rather than a generic Latin wordmark. Built out a small variant system: full lockup, icon-only mark, and a reversed white-on-black version for dark backgrounds.',
      highlights: ['Mosaic-tile icon in four colors, standing in for folded bed linen', 'Sinhala calligraphic wordmark alongside the Latin brand name', 'Reversed white-on-black variant for dark backgrounds'],
      results: 'Adopted as the brand\'s primary mark — used as the Facebook page profile icon since 2014 and still in use over a decade later. Rolled out onto real product packaging: a fold-out product tag featuring the logo alongside wash-care instructions, a size/quantity checklist, contact details, and pricing.',
      gallery: [
        {
          src: 'images/work/athirilli/01-primary-logo-lockup.jpg',
          alt: 'The Athirilli logo on white: the brand name in flowing black Sinhala calligraphy, with the Latin “Athirilli” set small above and to the left, framed by two diagonal clusters of four overlapping squares in pink, purple, orange and green.',
          caption: 'Primary logo'
        },
        {
          src: 'images/work/athirilli/02-swing-tag-mockup.jpg',
          alt: 'Two white swing tags hanging by string against a cork board. The front carries the logo and its mosaic squares; the back is a size chart headed “size / International” with tick boxes from XS to 4XL. Both are edged top and bottom by a dashed rule in the four brand colours.',
          caption: 'Swing tag — front and back'
        },
        {
          src: 'images/work/athirilli/03-swing-tag-reversed.jpg',
          alt: 'The same mark reversed for dark backgrounds: the Sinhala wordmark drawn in fine white line on solid black, the mosaic squares keeping their pink, purple, orange and green. The Latin name is dropped in this variant.',
          caption: 'Logo — reverse white on black, for dark backgrounds'
        },
        {
          src: 'images/work/athirilli/05-product-tag-mockup.jpg',
          alt: 'Two clear-wrapped bedding packages standing on a pale surface. The left insert reads “Made from 100% cotton” above five icon-led wash-care instructions and a tick-box list of sheet and pillow-cover quantities, with the brand\'s contact details beneath. The right shows the logo and an empty “Price :” field over a sweeping curve of scattered brand-colour squares, the patterned fabric visible through the wrap.',
          caption: 'Product tag — front and back, on packaging'
        }
      ]
    },
    {
      id: 4,
      title: 'Conditional Formatting for IFS Cloud',
      gallery: [],
      category: 'UX & Product',
      summary: 'Dense enterprise lists needed a simpler way for users to visually distinguish important information without relying on developer intervention. I led the design of a self-serve rule-building experience, taking a phased approach that validated the core interaction before expanding its complexity.',
      client: 'IFS',
      product: 'IFS Cloud',
      role: 'Experience Design Lead',
      tools: 'Figma',
      sourcingNote: 'This case study focuses on my design contribution to a shipped enterprise formatting capability. Public IFS documentation is referenced where appropriate to provide context for the resulting product experience. The reasoning is my own account. The design artefacts — design files, research material, prototypes — belong to IFS and stay with them.',
      overview: 'Conditional formatting for IFS Cloud — self-serve, rule-based formatting on list views. As Experience Design Lead I owned this end-to-end: research synthesis, interaction design, visual design, design-system alignment, delivery, and post-launch iteration.',
      challenge: 'Existing products provided a reference point for conditional formatting, but the goal was not to reproduce a legacy interaction — it was to create a simpler model appropriate for the current platform. Lists can hold hundreds of dense rows, and every row looked the same regardless of what it meant: an overdue order sat visually identical to one on schedule, and a high-value line looked like any other. Spotting what mattered meant reading every column, every row, every time, and users depended on developer intervention to introduce visual distinctions. The goal: let end users define their own visual rules — background colour and style — based on field values, applied to a single field or an entire row, drawn from the existing design language, and reusable rather than one-off.',
      solution: 'Discovery came without new UI chrome: the create and manage entries were added inside the existing column-configuration menu, a pattern users already knew, rather than introducing new navigation. Building a rule takes three steps — pick the attribute, set the condition using familiar condition operators, then choose a style from the existing design-system palette and decide whether it applies to the field or the whole row. Rules are saved and presented in a readable form, so users can review, edit and remove them from a single management experience, and the model is built so additional rule complexity can extend the same underlying mental model rather than replace it. The difference it makes: before, dense rows offered limited visual differentiation; after, formatting rules create visual distinctions automatically based on field values, reducing the need for manual interpretation. Responsive behaviour was not a dedicated design effort: I aligned the rule builder with the existing design language, so its behaviour on smaller screens followed from patterns already in use rather than requiring a bespoke treatment.',
      highlights: ['Create and manage entries added inside the existing column-configuration menu — no new navigation to learn', 'Three steps to build a rule: attribute, condition, then style applied to a field or the whole row', 'Rules saved in readable form, so they can be reviewed, edited and removed from a single management experience'],
      results: 'The initial release established the core rule-building model: end users define and reuse their own visual rules, drawn entirely from the existing design language, without depending on developer intervention to introduce a distinction. Additional condition complexity was designed to extend that same foundation rather than replace it.',
      sections: [
        {
          heading: 'Research & benchmarking',
          body: 'Two tracks, not a single named synthesis method. For category benchmarking, rather than reverse-engineering one competitor, I benchmarked the standard way conditional formatting is handled across enterprise-grade tools broadly — spreadsheet and grid-based productivity tools among the reference points — looking at the category-level pattern rather than any single implementation. The goal was to find the common, approachable shape of the interaction that users would already half-know, then decide how much of it this product actually needed. For flow mapping, before any screens were built I mapped the interaction using a show-then-do technique: what the screen presents on one side, what the user does in response on the other, with an arrow to the next state. I mapped both the basic and complex condition paths upfront, using the flow to determine what belonged in the initial release and what could follow later.'
        },
        {
          heading: 'The shared pattern',
          body: 'Across the category the pattern is consistent: an attribute or field, an operator, and a resulting style — usually a background colour. That expression, operator, value, style shape became the mental model the rule builder was built around. What I deliberately did not carry over was the depth. Consumer-grade spreadsheet tools allow unlimited combined conditions, formatting applied to text as well as backgrounds, and an open colour palette. This product needed the simplest version of the same idea before introducing additional complexity.',
        },
        {
          heading: 'Design hypothesis',
          body: 'A simple, self-serve rule builder will let users flag what matters themselves — without introducing legacy-level complexity, while following familiar conditional-formatting patterns.'
        },
        {
          heading: 'Scope strategy',
          body: 'How might we create a useful first version without introducing unnecessary rule-building complexity? I mapped both simple and complex condition paths before designing the interface, which helped separate the core interaction from capabilities that would add complexity without being essential to the initial experience. The governing principle was simple: establish a clear core rule-building model first, then determine which additional capabilities genuinely add value.',
          items: [
            'Multiple conditions — explored as a natural extension of the rule model, but kept outside the initial interaction.',
            'Logical combinations — considered as an extension of the core model rather than part of the initial interaction.',
            'Condition hierarchy and reordering — treated as an extension of the rule model rather than a requirement for the initial version.',
            'Dynamic values — considered where they could increase flexibility, but excluded from the core interaction to keep the initial experience focused.'
          ],
        },
        {
          heading: 'Constraints',
          body: 'The initial solution had to work within the existing formatting and design-system constraints. Rather than block the experience on broader visual-system changes, I designed within the available capabilities while keeping the interaction flexible enough to evolve. I explored broader colour-selection flexibility, but kept the initial interaction aligned with the existing design language to avoid introducing unnecessary complexity.'
        },
        {
          heading: 'Design exploration',
          body: 'Colour applied to text, not just backgrounds, was ruled out on principle rather than deferred. Colour on text creates readability problems at any palette size, so it was cut rather than parked.'
        },
        {
          heading: 'Validation',
          body: 'Validation focused on distinguishing discoverability from usability friction. I looked beyond completion alone and considered why someone might pause, explore, or leave an interaction unfinished. This helped separate natural exploration of a new capability from genuine difficulty in understanding the rule-building model.'
        },
        {
          heading: 'Post-launch learning',
          body: 'Post-launch use highlighted additional interaction and accessibility considerations that were not apparent during initial validation. I addressed these at the component and interaction level rather than applying isolated visual fixes, helping the behaviour remain consistent across themes and states.'
        },
        {
          heading: 'Key learnings',
          items: [
            'Scope discipline is a design skill, not a project-management one. Every deferred item here was mapped in full before being cut. Mapping first is what made the cuts defensible rather than arbitrary — and what made future evolution more straightforward rather than requiring the interaction model to be reconsidered from scratch.',
            'A constraint documented is more useful than a constraint hidden. Making limitations explicit helped distinguish what needed to be solved immediately from what could be explored later.',
            'Ruling out is different from deferring, and the distinction matters. Colour on text was never going to become viable — it fails on readability at any palette size. Saying so plainly, rather than parking it as "later", made the design boundary clear and prevented it from being treated as an unresolved requirement.',
            'Usage signals need interpretation before they become design actions. Different behaviours can produce the same signal, so understanding the underlying user intent matters before deciding what to change.'
          ]
        },
        {
          heading: 'Design principles I took forward',
          items: [
            'Colour on text stays out of scope. It creates readability problems regardless of palette, and that holds on any product, not just this one.',
            'Map what you are cutting before you cut it. A deferred item that was never mapped is not a decision, it is an omission.',
            'Design within the system you have, and record what it cost. Working inside existing constraints beats blocking a release, provided the limitation is written down rather than absorbed silently.'
          ]
        },
        {
          heading: 'Sources and disclosure',
          body: 'Public product documentation is included as contextual reference for the shipped experience. No internal design files, research materials, prototypes or proprietary artefacts are included.',
          links: [
            { label: 'Configuring list elements — IFS technical documentation', url: 'https://docs.ifs.com/techdocs/24r1/040_tailoring/250_lobby_configurations/040_element_designer/070_list_element/' },
            { label: 'Conditional Formatting — IFS Community', url: 'https://community.ifs.com/framework-experience-infrastructure-cloud-integration-dev-tools-50/conditional-formatting-53809' },
            { label: 'Formatting capabilities in IFS Cloud — IFS Community', url: 'https://community.ifs.com/framework-experience-infrastructure-cloud-integration-dev-tools-50/regarding-formatting-capabilities-in-ifs-cloud-24r2-67489' }
          ]
        }
      ]
    },
    {
      id: 5,
      title: 'White-Labelling IFS Remote Assistance',
      gallery: [],
      category: 'UX & Product',
      summary: 'Taking a third-party AR video-collaboration product and making it belong inside an enterprise field service suite — without breaking the one thing in its interface that wasn\'t decoration.',
      client: 'IFS',
      product: 'IFS Remote Assistance × IFS Field Service Management',
      role: 'UX/UI Designer — White-labelling, icon design, storyboarding',
      tools: 'Adobe Photoshop, Adobe Illustrator, Storyboarding',
      sourcingNote: 'This case study focuses on my design contribution to a shipped enterprise product. Public IFS documentation is referenced where appropriate to provide context for the resulting product experience. The reasoning is my own account. The design artefacts — storyboards, mockups, working files — belong to IFS and stay with them. If the process work matters for your decision, I\'m glad to walk through it live.',
      overview: 'Interface white-labelling, icon design and scenario storyboarding for a field service remote assistance product. IFS licensed Help Lightning\'s AR video collaboration technology and shipped it as IFS Remote Assistance, integrated with IFS Field Service Management. Two pieces of that were mine: re-skinning the partner interface so it read as an IFS product rather than a third-party app with a logo dropped on it — including drawing the icon set — and storyboarding the user scenarios, each from both sides of the call, then mapping the wider service journey they sat inside. I used the scenarios to structure storyboards, then translated the key interaction needs into interface designs. Remote Assistance connects a field worker with a remote expert through live video and shared visual annotation: the expert can draw on what the field worker\'s camera sees — circle the component, arrow the cable, mark the terminal — and those marks appear over the real thing in front of them. The design challenge was to integrate that partner capability into a broader field-service experience without making it feel like a separate application. This isn\'t really a story about making a third-party app look like IFS. It\'s a story about knowing what you are allowed to change, what you aren\'t, and how to tell the difference between decoration and function.',
      challenge: 'Re-skinning someone else\'s shipped product is a specific kind of design work, and it isn\'t styling. Three rules set the terms. The partner\'s interface already exists and has an established interaction model. Everything you change is a risk you introduced. Everything you don\'t change is a seam a user will feel. So the job is to find the smallest set of changes that makes the product belong, while protecting the functional behaviours that users rely on — and to be able to defend every one of them.',
      solution: 'What changed: the visual language was adapted across the application chrome, controls and annotation tools so the partner experience felt coherent within the surrounding enterprise product. The aim was absorption rather than badging — a user moving between this and the rest of the suite shouldn\'t feel a change of authorship. I designed the icon set rather than simply selecting existing icons, because in a white-labelled product iconography carries a surprising amount of visual identity: consistent stroke, proportion and metaphor help a partner experience feel integrated rather than simply branded, and icons are where a borrowed interface is most obviously borrowed, since they carry another company\'s drawing conventions whether or not anyone consciously notices. What couldn\'t change, and why: one apparently decorative control turned out to carry functional state. Restyling it purely for visual consistency would have removed information the user needed before making the next action — the interface would have looked more coherent and told the user less. So I kept the functional behaviour intact and prioritised state visibility over brand consistency, and the visual treatment therefore remained intentionally different from the surrounding brand language where necessary to preserve state visibility. That decision reinforced a broader principle: in a partner integration, visual consistency should never override information that helps users predict the next action. It\'s a small decision, and it\'s the one I\'d want a reviewer to ask me about — knowing which element of a borrowed interface is load-bearing is the actual skill in this kind of work.',
      highlights: [
        'Absorption rather than badging — chrome, controls and annotation tools adapted so a user moving through the suite does not feel a change of authorship',
        'A drawn icon set rather than a selected one, because icons are where a borrowed interface is most obviously borrowed',
        'One control left deliberately off-brand, because restyling it would have removed the state information users needed before their next action'
      ],
      results: 'My design contribution helped adapt a partner capability into a coherent enterprise product experience. IFS Remote Assistance subsequently shipped as part of the IFS field service portfolio. No customer, adoption or performance outcome is claimed here as a result of my work. The design work described here is from 2018; the product has been deployed from 2020.',
      sections: [
        {
          heading: 'Scenarios and storyboarding',
          body: 'Before any screen work, I storyboarded the scenarios by hand. I mapped multiple service scenarios across technicians, remote experts, customers, manufacturers and supervisory roles. Drawing both sides of the interaction exposed how the needs of each participant changed depending on their role in the session — what they could see, what they could control, and whether they were asking for help, giving it, or approving something. I also mapped a broader service blueprint to understand where remote assistance sat within the wider field-service journey, which helped frame the capability as part of the service model rather than as an isolated feature.',
          items: [
            'Why both sides, every time. It is a collaboration product, and a one-sided storyboard hides the thing that actually needs designing: two people looking at the same situation with different controls, different context and different responsibilities. The same session could create very different design needs depending on who was calling, who was assisting, and what each person could see or control.',
            'Two levels of familiarity, not one. The exercise highlighted an important distinction between regular users and participants who may encounter the experience only occasionally. An interface that rewards daily use and an interface that has to explain itself on first contact are not automatically the same interface.',
            'Rough artefacts make scope arguable. A hand-drawn frame is cheap to disagree with. Nobody argues with a polished mockup until it is expensive.'
          ]
        },
        {
          heading: 'What I learned',
          items: [
            'Find out what is load-bearing before you restyle anything. A control that looked like decoration was carrying state. In a borrowed interface, the difference between decoration and function is not always visible from the outside, and assuming is how you ship a regression into someone else’s working product.',
            'Constraint from a partner is still design. I could not change the underlying interaction model. Working out where IFS’s visual language could assert itself and where it had to defer was the whole exercise. Restraint was the deliverable.',
            'Draw both sides of a two-sided interaction. A collaboration experience has at least two people in it with different controls and different responsibilities. Designing from one side produces something that works for one of them.',
            'Understand the whole chain, not just your feature. Mapping the wider service journey — including the parts that were not mine — helped me understand how the capability fitted into the broader service model rather than sitting on top of it.',
            'Rough artefacts get better feedback. Hand-drawn storyboards invited disagreement in a way mockups do not. People will redraw a pen sketch with you; they tend to accept a rendered screen and raise the objection three weeks later.'
          ]
        },
        {
          heading: 'Sources and disclosure',
          body: 'Public product documentation is included as contextual reference for the shipped experience. No internal design files, research materials, prototypes or proprietary artefacts are included.',
          links: [
            { label: 'IFS Remote Assistance — product page', url: 'https://www.ifs.com/en/products/fsm/remote-assistance' },
            { label: 'IFS Remote Assistance Powered by Help Lightning — IFS partner marketplace', url: 'https://www.ifs.com/en/partners/marketplace/ifs-remote-assistance-powered-by-help-lightning' },
            { label: 'Munters rolls out IFS Remote Assistance — IFS blog, 31 March 2020', url: 'https://blog.ifs.com/munters-rolls-out-ifs-remote-assistance/' },
            { label: 'COVID-19: managing service delivery and supply chain disruptions with Remote Assistance — IFS blog', url: 'https://blog.ifs.com/covid-19-managing-service-delivery-and-supply-chain-disruptions-with-remote-assistance/' },
            { label: 'Remote Assistance — product demo video', url: 'https://www.youtube.com/watch?v=HlvT1gzQK60' },
            { label: 'Tutustu IFS Cloud -etätukitoiminnallisuuteen — IFS Cloud walkthrough', url: 'https://www.youtube.com/watch?v=IWyKmJq3Mts' },
            { label: 'Help Lightning named finalist for IFS Technology Alliances Partner of the Year', url: 'https://helplightning.com/blog/help-lightning-named-finalist-for-ifs-technology-alliances-partner-of-the-year/' }
          ]
        }
      ]
    },
    {
      id: 6,
      title: 'Nike Web App Re-Touch',
      cover: 'images/work/nike/cover.png',
      gallery: [],
      category: 'UX & Product',
      summary: 'A concept re-skin of a familiar retail interface, built to practise two things I don\'t get to practise in enterprise work: consumer-grade visual craft, and prototyping a transition until it feels right.',
      client: 'Self-initiated',
      timeline: '2022',
      role: 'Visual design, interface design, prototyping',
      tools: 'Figma',
      sourcingNote: 'This is an unofficial concept, made for practice. It is not affiliated with, commissioned by or endorsed by Nike. Brand marks, product names and product photography belong to Nike and are referenced here only to make the concept legible. The interface icons are from a free third-party icon library, not drawn by me. The layout, composition, colour system, type treatment and the prototype transition are my own.',
      overview: 'A self-initiated concept re-skin of a familiar retail interface, designed and prototyped in Figma in 2022. I spend my working life in enterprise software, where the constraints are dense data, long sessions and a design system I don\'t own. This was the opposite exercise, chosen deliberately: a consumer surface with almost no data on screen, where the whole job is composition, typography and motion. This is a craft exercise, and I\'d rather present it as one than dress it up as something it wasn\'t.',
      challenge: 'I picked a familiar retail app so the brief would be about execution rather than invention. There was no problem to solve and no user to research — the products, the categories and the flow already exist and work. What I wanted to know was whether I could take a surface people already know and make it feel calmer, and whether I could build a transition that actually felt good rather than one that merely functioned. Those were the two questions, and they are the only things this project set out to answer.',
      solution: 'Two themes, built as one system: light and dark were designed together rather than one derived from the other, the light theme running on white with a stepped neutral scale and the dark theme on black and near-black. The dark theme is the one I\'d show first, because product photography on a black ground behaves completely differently from the same photography on white — the shoe stops being an object placed on a page and becomes the only lit thing in the frame. That isn\'t a colour swap, and it\'s the argument for designing both themes at once rather than inverting one at the end. A grid that gets out of the way: a full-width promotional card, a horizontal category row, then a two-column product grid, with each product card carrying only what a decision needs at that moment — name, price, image, and a single forward affordance. Everything else waits for the detail page. Type doing the hierarchy: one family, two weights, with bold carrying product names and the promotional line and regular carrying everything else. With a palette this restrained, weight and size have to do the structural work that colour usually does, which is a useful constraint to design under because it exposes any hierarchy you were faking with a tint. And documented as a system: colour values, type styles, the icon set and an app icon are all specified on the board rather than left implicit in the screens. That habit comes from enterprise work, and it\'s the part of this project I\'d defend most readily.',
      solutionImage: [
        {
          src: 'images/work/nike/screens.png',
          alt: 'The home and product screens shown in light and dark side by side, above the two-column product grid and the wireframe it sits on',
          caption: 'Light and dark side by side rather than one derived from the other — the same photography is an object on a page in one and the only lit thing in the frame in the other.'
        },
        {
          src: 'images/work/nike/design-system.png',
          alt: 'A project assets board specifying the app icon, a six-icon set, two Helvetica Neue weights, and the light and dark colour ramps with their hex values',
          caption: 'The system, written down rather than left implicit in the screens — and where the light ramp’s mid-greys, #BFBFBF and #999999, are visible as decisions rather than accidents.'
        }
      ],
      highlights: [
        'Light and dark designed together as one system rather than one inverted from the other — product photography behaves differently enough on black that it is not a colour swap',
        'Product cards carry only what a decision needs at that moment: name, price, image, one forward affordance',
        'One family, two weights — with a palette this restrained, weight and size have to do the structural work colour usually does'
      ],
      results: 'The output is a two-theme interface system, documented on the board rather than left implicit in the screens, and a single working prototype transition. I want to be precise about that, because prototyping can imply a whole clickable product and this isn\'t one — it is one transition, built and rebuilt until it read the way I wanted. The project is published on Behance as a concept piece. No outcome beyond the craft itself is claimed.',
      sections: [
        {
          heading: 'The transition I built',
          body: 'The prototype does exactly one thing: it transitions a product card in the grid into that product\'s detail page. What I was after was a float and a landing, not a cut. Tapping a card shouldn\'t replace one screen with another — the product image should travel out of the grid and come to rest in the hero position on the detail page, so the eye never has to re-find the thing it was just looking at. The card and the detail page share the same three elements: image, name, price. If those vanish and reappear somewhere else, the user has to re-establish that this is still the shoe they tapped. Carrying them across means the detail page reads as the same object opening rather than a new page arriving. The animation isn\'t decoration — it\'s what holds attention through a context change, and it\'s the difference between a destination you were moved toward and one you were dropped into.'
        },
        {
          heading: 'The one I didn\'t build',
          body: 'I wanted the same principle to govern how you look at a shoe from different angles. Tapping through angles or colourways would animate the product as though it were turning in your hands — a continuous manipulation of one object, rather than a swap between separate photographs. Same idea as the card-to-detail transition, applied one level deeper. I never prototyped it. I\'m including it because the reasoning is the part worth showing, not because I want credit for the execution. It is also harder than it looks, which is likely why it stayed an intention: a convincing rotation needs source photography shot on a consistent axis at consistent intervals. With a handful of marketing images taken from arbitrary angles, a cross-fade between two fixed shots reads as a dissolve rather than a turn — and a dissolve tells the user the object was replaced, which is the exact opposite of what the interaction is for. The idea holds; the assets it depends on are a different project.'
        },
        {
          heading: 'What I\'d change now',
          body: 'Four years on, three things stand out.',
          items: [
            'The secondary greys don’t pass. In the light theme I used mid-greys for supporting text — #999999 sits at 2.85:1 on white, #BFBFBF at 1.84:1. Both fail the 4.5:1 minimum. They looked calm, which is exactly the trap: quiet greys read as restraint and are actually a legibility failure. The dark theme fares better almost by accident — #A8A8A8 on near-black clears 6.8:1. If I rebuilt this, the light palette would be derived against a contrast floor rather than by eye.',
            'One transition isn’t a prototype. I’d start with the angle interaction above, then build the theme switch, the category filter and the add-to-bag confirmation — those are the states where a retail interface actually gets judged, and a single happy-path animation can’t demonstrate much about interaction design on its own.',
            'I’d draw the icons. I used a free third-party set, which was the right call for the time it saved and the wrong call for what the project was meant to demonstrate.'
          ]
        },
        {
          heading: 'Credits and disclosure',
          body: 'This is an unofficial concept, made for practice, and is not affiliated with, commissioned by or endorsed by Nike. Brand marks, product names and product photography belong to Nike and are referenced only to make the concept legible. The interface icons are from a free third-party icon library, not drawn by me. The layout, composition, colour system, type treatment and the prototype transition are my own.',
          links: [
            { label: 'Nike web app re-touch — full project on Behance', url: 'https://www.behance.net/gallery/148806925/Nike-web-app-Re-Touch' }
          ]
        }
      ]
    },
    {
      id: 7,
      title: 'Heritage as a technology brand \u2014 illustration system and exhibition design for Decryptogen',
      category: 'Branding',
      summary: 'A client brief asked for Sri Lankan heritage motifs fused with technology. The answer was a single visual device \u2014 one object, half hand-painted tradition and half engineered line work \u2014 that states the company\'s positioning without a word of copy, and survives being scaled from a browser hero to a trade-show wall.',
      client: 'Decryptogen',
      clientUrl: 'https://decryptogen.com',
      product: 'Website hero illustrations, later applied to a three-wall exhibition stall',
      role: 'Illustration and art direction \u2014 three hero illustrations; exhibition stall design',
      timeline: '2024',
      tools: 'Adobe Illustrator, Adobe Photoshop',

      // TODO(Senith): imagery. Drop files in images/work/decryptogen/, then set
      // `cover` to one of them and add the rest to `gallery` as
      // { src: '...', alt: '...' }. The card thumbnail is a separate slot --
      // see the TODO in index.html. Everything else on this page is final copy.
      cover: null,
      gallery: [],

      overview: 'Decryptogen is an independent digital transformation firm \u2014 data, AI, DevOps and software engineering for enterprise clients. They describe themselves on their own site as \u201cyour trusted independent digital transformation specialists.\u201d The brief came from them, not from me: build the brand\'s visual identity on Sri Lankan heritage motifs fused with technology. My job was to work out what that actually looks like when it has to sit behind a headline, hold a homepage, and later fill a wall.',
      challenge: 'That\'s the real problem in a brief like this. \u201cHeritage meets technology\u201d is easy to say and easy to do badly \u2014 usually as a traditional image with some circuitry pasted on top, which reads as decoration rather than meaning. The direction had to earn its place.',
      solution: 'I settled on one structural idea and let it carry everything: a single object, split down its vertical axis. One half rendered as traditional craft \u2014 hand-painted colour, ornamental pattern, the forms as they actually appear in Sri Lankan visual culture. The other half rebuilt as engineered line work: white strokes on black, panel joints, circuit traces, the vocabulary of a technical drawing. Not two things beside each other. One thing, seen two ways at once. That matters, because it is the company\'s positioning stated as a picture. A firm whose work is transformation isn\'t replacing what a client has; it\'s the same organisation with an engineered structure underneath. The split form argues that in a single glance, before anyone reads the headline sitting next to it. The colour system does the rest of the work: a magenta-to-orange gradient against black, with the technical half in white and violet line. Black was the right ground for two reasons \u2014 the gradient reaches its highest chroma against it, and the white line work reads as drawn light rather than as ink.',
      highlights: [
        'The Raksha mask \u2014 a bird-form devil-dance mask, split so the flame-like headdress continues across the divide: hand-painted plumes on the left, faceted blades and circuitry on the right. The loudest of the three, and the primary hero',
        'The sea turtle \u2014 the same split applied to a form with radial symmetry. Shell mandala panels become segmented armour plating; flippers become jointed mechanical limbs. Ornamental suns orbit the left half and the right half answers with technical rosettes',
        'The dancer \u2014 deliberately breaks the device rather than repeating it. A traditional drummer is paired with a constellation counterpart, the same body redrawn as a node-and-line network reaching across a gap, both inside a concentric dial'
      ],
      results: 'The illustrations run as the rotating hero on the Decryptogen homepage, holding the right-hand half of the frame beside the headline. The client later asked for an exhibition stall, and I designed it using the same system \u2014 three walls and a counter, with the composition and hierarchy mine.',
      sections: [
        {
          heading: 'Three subjects, three variations',
          body: 'Varying the third piece was the point. Three identical split-form illustrations would have read as a template being applied. Restating the same idea through a different structure is what turns three drawings into a system.'
        },
        {
          heading: 'From screen to stall',
          body: 'One illustration per wall. A visitor walking past a trade-show stand doesn\'t read; they scan. Three walls carrying three separate arguments, each anchored by one image, gives someone a single idea per glance. The turtle carries the company introduction and its figures, the mask carries the proposition and the service list, the dancer carries the positioning statement and contact details. The middle wall inverts. Walls one and three sit on black with the illustrations in full colour; wall two flips to the gradient as ground with the artwork in white line. That inversion isn\'t styling \u2014 it\'s what makes the centre of the stand read as the entrance from across a hall, with the flanking walls receding as supporting material. High-chroma colour on black holds at distance, and the line work is vector, so it survives being enlarged from a browser hero to something several metres wide. That wasn\'t luck \u2014 building the technical halves as line rather than texture is the decision that made the later application possible.'
        },
        {
          heading: 'What I\'d watch',
          body: 'The hero crop. On the homepage, the service-card panel overlaps the lower portion of the illustrations \u2014 the mask\'s jaw sits behind the card, and one service label lands across its teeth. The artwork was drawn as a complete composition; the page places a component on top of it. If I were revisiting this, I\'d deliver a hero-specific crop with a defined safe area rather than letting a full illustration be cropped by a layout it didn\'t anticipate. Small type on the flanking walls. The body copy on walls one and three is set small against black. At stand-reading distance that\'s a real question, and it\'s the kind of thing worth testing at full scale on a print proof rather than judging on a monitor. The source material deserves care. Raksha masks and Kandyan drumming are living traditions, not ornament. The treatment keeps the traditional halves rendered faithfully \u2014 the forms, the patterns and the colour logic are not abstracted away to make them fit a tech aesthetic. The technical half is what adapts.'
        },
        {
          heading: 'Credits and scope',
          items: [
            'Mine: the three illustrations, the split-form device, the colour system, and the exhibition stall design \u2014 composition, hierarchy, and how the artwork carries across three walls and a counter.',
            'The client\'s: the brief and its heritage-meets-technology direction, the company copy, the service descriptions and the figures shown on the stand.',
            'Not mine: the website design and build. I supplied the artwork that the site uses.'
          ],
          links: [
            { label: 'Live site \u2014 decryptogen.com', url: 'https://decryptogen.com/' }
          ]
        }
      ]
    }
  ].map(function (p) {
    p.summary = p.summary || 'Simplifying wayfinding across a dense enterprise platform.';
    p.overview = p.overview || 'Overview copy for this project goes here.';
    p.challenge = p.challenge || 'Challenge copy for this project goes here.';
    p.solution = p.solution || 'Solution copy for this project goes here.';
    p.highlights = p.highlights || ['Placeholder highlight one', 'Placeholder highlight two', 'Placeholder highlight three'];
    p.results = p.results || 'Results copy for this project goes here.';
    p.gallery = p.gallery || [1, 1];
    p.cover = p.cover || null;
    p.clientUrl = p.clientUrl || null;
    p.challengeImage = p.challengeImage || null;
    p.solutionLeadImage = p.solutionLeadImage || null;
    p.solutionImage = p.solutionImage || null;
    p.highlightsImage = p.highlightsImage || null;
    p.resultsImage = p.resultsImage || null;
    p.product = p.product || null;
    p.sourcingNote = p.sourcingNote || null;
    p.sections = p.sections || null;
    return p;
  });

  function getParam(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  var id = parseInt(getParam('id'), 10) || 1;
  var index = projects.findIndex(function (p) { return p.id === id; });
  if (index === -1) index = 0;
  var project = projects[index];

  // Prev/Next follow the same alphabetical-by-title order the homepage
  // grids display, not the declaration order above (which is unrelated —
  // it's just the order projects were added to this file).
  var alphabetical = projects.slice().sort(function (a, b) {
    return a.title.localeCompare(b.title);
  });
  var alphaIndex = alphabetical.findIndex(function (p) { return p.id === id; });
  if (alphaIndex === -1) alphaIndex = 0;
  var prev = alphabetical[(alphaIndex - 1 + alphabetical.length) % alphabetical.length];
  var next = alphabetical[(alphaIndex + 1) % alphabetical.length];

  function setText(elId, value) {
    var el = document.getElementById(elId);
    if (el) el.textContent = value;
  }

  // Inline figure used to drop a supporting diagram/screenshot at a specific
  // point in the narrative (e.g. right after the Challenge copy), rather
  // than only at the bottom gallery.
  function createInlineFigure(image) {
    var figure = document.createElement('figure');
    figure.className = 'project-inline-figure';
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'project-inline-image-btn lightbox-trigger';
    btn.setAttribute('aria-label', 'View larger image' + (image.caption ? ': ' + image.caption : ''));
    btn.dataset.lightboxSrc = image.src;
    if (image.alt) btn.dataset.lightboxAlt = image.alt;
    if (image.caption) btn.dataset.lightboxCaption = image.caption;
    var img = document.createElement('img');
    img.className = 'project-inline-image';
    img.src = image.src;
    img.alt = image.alt || '';
    btn.appendChild(img);
    figure.appendChild(btn);
    if (image.caption) {
      var figcaption = document.createElement('figcaption');
      figcaption.className = 'project-inline-caption';
      figcaption.textContent = image.caption;
      figure.appendChild(figcaption);
    }
    return figure;
  }

  // A section can supply either one image or several (in reading order).
  // Inserting each right after the previous one keeps them in order
  // regardless of how many there are.
  function insertImagesAfter(anchorEl, images) {
    if (!images) return;
    var list = Array.isArray(images) ? images : [images];
    var cursor = anchorEl;
    list.forEach(function (image) {
      var figure = createInlineFigure(image);
      cursor.insertAdjacentElement('afterend', figure);
      cursor = figure;
    });
  }

  document.title = project.title + ' — Senith B.';

  // The back link reflects where the visitor actually came from (Work grid
  // vs Case Studies grid), rather than always pointing back to Work — both
  // grids link to this same detail page, distinguished only by ?from=.
  if (getParam('from') === 'case-studies') {
    var backLink = document.getElementById('projectBackLink');
    if (backLink) backLink.href = 'index.html#case-studies';
    setText('projectBackLabel', 'Back to Case Studies');
  }

  setText('projectCategory', project.category);
  setText('projectTitle', project.title);
  setText('projectSummary', project.summary);
  var metaClientEl = document.getElementById('metaClient');
  if (metaClientEl) {
    if (project.clientUrl) {
      var clientLink = document.createElement('a');
      clientLink.href = project.clientUrl;
      clientLink.target = '_blank';
      clientLink.rel = 'noopener noreferrer';
      clientLink.textContent = project.client;
      metaClientEl.textContent = '';
      metaClientEl.appendChild(clientLink);
    } else {
      metaClientEl.textContent = project.client;
    }
  }
  setText('metaRole', project.role);
  // Some case studies identify the product they shipped on rather than a
  // duration; the same meta slot carries whichever the project provides.
  if (project.product) {
    setText('metaTimelineLabel', 'Product');
    setText('metaTimeline', project.product);
  } else {
    setText('metaTimeline', project.timeline);
  }
  setText('metaTools', project.tools);

  var sourcingEl = document.getElementById('projectSourcing');
  if (sourcingEl && project.sourcingNote) {
    sourcingEl.textContent = project.sourcingNote;
    sourcingEl.hidden = false;
  }

  setText('projectOverview', project.overview);
  setText('projectChallenge', project.challenge);
  setText('projectSolution', project.solution);
  setText('projectResults', project.results);

  if (project.challengeImage) {
    var challengeEl = document.getElementById('projectChallenge');
    if (challengeEl) challengeEl.insertAdjacentElement('afterend', createInlineFigure(project.challengeImage));
  }

  var solutionEl = document.getElementById('projectSolution');
  if (project.solutionLeadImage && solutionEl) {
    solutionEl.insertAdjacentElement('beforebegin', createInlineFigure(project.solutionLeadImage));
  }
  if (project.solutionImage && solutionEl) {
    insertImagesAfter(solutionEl, project.solutionImage);
  }

  if (project.resultsImage) {
    var resultsEl = document.getElementById('projectResults');
    if (resultsEl) insertImagesAfter(resultsEl, project.resultsImage);
  }

  // Optional deeper-dive sections — only rendered for projects that
  // actually provide the data, so shorter case studies don't show empty
  // headings.
  // Each section carries its own heading, so a case study can follow the
  // structure of its own write-up rather than a fixed set of headings. Any
  // of body / items / links / image may be present.
  var extraEl = document.getElementById('projectExtraSections');
  if (extraEl && project.sections) {
    project.sections.forEach(function (section) {
      var heading = document.createElement('h2');
      heading.textContent = section.heading;
      extraEl.appendChild(heading);

      if (section.body) {
        var body = document.createElement('p');
        body.textContent = section.body;
        extraEl.appendChild(body);
      }
      if (section.items) {
        var list = document.createElement('ul');
        section.items.forEach(function (item) {
          var li = document.createElement('li');
          li.textContent = item;
          list.appendChild(li);
        });
        extraEl.appendChild(list);
      }
      if (section.links) {
        var linkList = document.createElement('ul');
        linkList.className = 'project-source-links';
        section.links.forEach(function (link) {
          var li = document.createElement('li');
          var anchor = document.createElement('a');
          anchor.href = link.url;
          anchor.target = '_blank';
          anchor.rel = 'noopener noreferrer';
          anchor.textContent = link.label;
          li.appendChild(anchor);
          linkList.appendChild(li);
        });
        extraEl.appendChild(linkList);
      }
      if (section.image) {
        var images = Array.isArray(section.image) ? section.image : [section.image];
        images.forEach(function (image) { extraEl.appendChild(createInlineFigure(image)); });
      }
    });
  }

  var coverEl = document.getElementById('projectCover');
  if (coverEl) {
    if (project.cover) {
      coverEl.classList.add('has-image');
      coverEl.style.backgroundImage = 'url(\'' + project.cover + '\')';
    } else {
      // No cover means no empty 16:9 block sitting above the meta row.
      coverEl.hidden = true;
    }
  }

  var highlightsList = document.getElementById('projectHighlights');
  if (highlightsList) {
    project.highlights.forEach(function (item) {
      var li = document.createElement('li');
      li.textContent = item;
      highlightsList.appendChild(li);
    });
    if (project.highlightsImage) {
      highlightsList.insertAdjacentElement('afterend', createInlineFigure(project.highlightsImage));
    }
  }

  var gallery = document.getElementById('projectGallery');
  if (gallery) {
    project.gallery.forEach(function (item) {
      var wrapper = document.createElement('div');
      wrapper.className = 'reveal';
      var hasImage = item && typeof item === 'object' && item.src;
      var block = document.createElement(hasImage ? 'button' : 'div');
      block.className = 'thumb-block';
      if (hasImage) {
        block.type = 'button';
        block.classList.add('has-image', 'lightbox-trigger');
        block.style.backgroundImage = 'url(\'' + item.src + '\')';
        block.setAttribute('aria-label', 'View larger image' + (item.caption ? ': ' + item.caption : ''));
        block.dataset.lightboxSrc = item.src;
        // The lightbox shows the picture and nothing else, so the description
        // has to travel with it. createInlineFigure already passed alt through;
        // this path did not, which left every gallery image opening as an
        // unlabelled <img> however carefully its alt had been written.
        if (item.alt) block.dataset.lightboxAlt = item.alt;
        if (item.caption) block.dataset.lightboxCaption = item.caption;
      }
      wrapper.appendChild(block);
      if (item && typeof item === 'object' && item.caption) {
        var caption = document.createElement('p');
        caption.className = 'gallery-caption';
        caption.textContent = item.caption;
        wrapper.appendChild(caption);
      }
      gallery.appendChild(wrapper);
    });
  }

  var prevLink = document.getElementById('prevProject');
  var nextLink = document.getElementById('nextProject');
  if (prevLink) prevLink.href = 'project.html?id=' + prev.id;
  if (nextLink) nextLink.href = 'project.html?id=' + next.id;
  setText('prevTitle', prev.title);
  setText('nextTitle', next.title);
})();
