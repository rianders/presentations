// @theme uoes

/* UOES THEME SPECIMEN — one slide per component in theme.jsx.
   shell.html?p=themes/uoes/specimen   (add &print for the paginated view)
   Not a talk. It is the reference for building a deck on the theme and
   the fixture render-check.js runs to prove the theme still renders.
   Lorem ipsum is deliberate: this file is never shown to a room. */

UOES.configure({ draft: 'Specimen · UOES theme', footer: 'UOES · Theme specimen' });

const slides = [
  {
    label: "TitleSlide",
    content: (
      <TitleSlide
        kicker="Rutgers UOES · TIIP Partnership"
        title={<>Presentation Title<br />Goes Here</>}
        subtitle="Optional subhead"
        presenter="Presenter Name"
        role="Title · Rutgers UOES"
        date="Month XX, 20XX · Zoom"
      />
    ),
  },
  {
    label: "SectionSlide",
    content: <SectionSlide title="Section Header" sub="Optional subhead" />,
  },
  {
    label: "Heading, Lede, Bullet, Link",
    content: (
      <SlideShell>
        <Heading sub="Segment · 5 min">One Line Title with Bullets</Heading>
        <Lede>Lede: the standfirst under the title, one or two sentences at most.</Lede>
        <ul className="space-y-2">
          <Bullet>Bullet item one</Bullet>
          <Bullet>Bullet item two, with a <Link href="https://uoes.rutgers.edu">link</Link></Bullet>
          <Bullet icon="→">Custom icon</Bullet>
        </ul>
        <Note>Note: a quiet aside.</Note>
        <DropIn label="DropIn">The one line the room should remember.</DropIn>
      </SlideShell>
    ),
  },
  {
    label: "PipelineStep, VerifyBeat, CodeBlock",
    content: (
      <SlideShell>
        <Heading sub="Process">Process Title</Heading>
        <div className="space-y-4">
          <PipelineStep num="1" title="First step">Supporting text.</PipelineStep>
          <PipelineStep num="2" title="Second step">Supporting text.</PipelineStep>
        </div>
        <VerifyBeat>Someone who knows the material checks it against the source.</VerifyBeat>
        <CodeBlock>{`A prompt or code, monospace on ink.`}</CodeBlock>
      </SlideShell>
    ),
  },
  {
    label: "Columns",
    content: (
      <SlideShell>
        <Heading sub="Columns">Three Column Text Layout</Heading>
        <Columns n={3}>
          <Column title="Column one">Supporting text.</Column>
          <Column title="Column two">Supporting text.</Column>
          <Column title="Column three">Supporting text.</Column>
        </Columns>
      </SlideShell>
    ),
  },
  {
    label: "Stats",
    content: (
      <SlideShell>
        <Heading sub="Stats">Three Columns with Stats</Heading>
        <Stats items={[
          { value: "Top 50", label: "Label", note: "Source and date." },
          { value: "#2", label: "Label", note: "Source and date." },
          { value: "69,000+", label: "Label", note: "Source and date." },
        ]} />
      </SlideShell>
    ),
  },
  {
    label: "People",
    content: (
      <SlideShell>
        <Heading sub="People">Two Column Speakers</Heading>
        <People
          label="With thanks"
          people={[{ name: "First Last", role: "Title of speaker" }, { name: "Second Person" }]}
          note="Initials stand in until there is a photo."
        />
      </SlideShell>
    ),
  },
  {
    label: "Agenda",
    content: (
      <SlideShell>
        <Heading sub="Agenda">One Column Agenda Title</Heading>
        <Agenda items={[
          { time: "10:00 am", title: "Add your topic", note: "Supporting text or name of speaker" },
          { time: "10:15 am", title: "Add your topic" },
        ]} />
      </SlideShell>
    ),
  },
  {
    label: "Quote, SectionCard, Tag",
    content: (
      <SlideShell>
        <Quote by="Author of the quote">A quotation, set in the heading serif.</Quote>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SectionCard title="SectionCard" icon="📄">Plain card. <Tag>Tag</Tag></SectionCard>
          <SectionCard title="Accent" icon="⭐" accent>The emphasized one.</SectionCard>
        </div>
      </SlideShell>
    ),
  },
  {
    label: "Interact, Placeholder",
    content: (
      <SlideShell>
        <Heading sub="Presenter-facing">Interact and Placeholder</Heading>
        <Interact prompt="In chat: a question for the room.">Optional follow-up line.</Interact>
        <Placeholder title="Draft marker">Amber on purpose: never mistaken for finished content.</Placeholder>
      </SlideShell>
    ),
  },
  {
    label: "ClosingSlide",
    content: (
      <ClosingSlide>
        <p>Email any questions to <Link onDark href="mailto:youremail@rutgers.edu">youremail@rutgers.edu</Link></p>
        <p>For more information, visit <Link onDark href="https://uoes.rutgers.edu">uoes.rutgers.edu</Link></p>
      </ClosingSlide>
    ),
  },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Deck slides={slides} meta="UOES theme specimen" />);
