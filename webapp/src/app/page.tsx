import Link from "next/link";
import { EbookBuilder } from "@/components/ebook-builder";
import { LessonPlanner } from "@/components/lesson-planner";
import { VisualStoryMaker } from "@/components/visual-story-maker";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-[-10rem] z-[-1] h-[32rem] bg-[radial-gradient(circle_600px_at_50%_20%,rgba(129,140,248,0.25),transparent)]" />
      <div className="pointer-events-none absolute inset-y-0 right-[-15rem] z-[-1] h-[42rem] w-[32rem] rounded-full bg-[radial-gradient(circle_280px_at_center,rgba(16,185,129,0.18),transparent)] blur-3xl" />
      <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-16 px-6 pb-24 pt-12 sm:px-10 lg:px-16">
        <header className="space-y-10">
          <nav className="flex items-center justify-between rounded-full border border-white/70 bg-white/70 px-6 py-3 text-sm shadow-lg shadow-indigo-100/40">
            <div className="font-semibold text-indigo-600">Shiksha Sparks</div>
            <div className="hidden items-center gap-6 text-zinc-600 sm:flex">
              <Link href="#lesson" className="transition hover:text-indigo-600">
                Lesson sparks
              </Link>
              <Link href="#stories" className="transition hover:text-indigo-600">
                Visual stories
              </Link>
              <Link href="#ebooks" className="transition hover:text-indigo-600">
                Kids ebooks
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-indigo-600 px-4 py-1.5 text-xs font-semibold text-white">
                Made for Indian teachers 🇮🇳
              </span>
            </div>
          </nav>
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-indigo-100 bg-indigo-50/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
                AI Teaching Companion
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Curriculum Aligned
              </div>
              <h1 className="text-4xl font-semibold leading-tight text-zinc-900 sm:text-5xl">
                Unique creative content, story-based lessons, and printable
                ebooks for India&apos;s primary classrooms.
              </h1>
              <p className="max-w-2xl text-lg text-zinc-600">
                Plan joyful learning experiences in minutes. Shiksha Sparks blends
                NEP-aligned pedagogy, multilingual scaffolds, and arts-integration
                to powerfully support every primary teacher.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#lesson"
                  className="rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
                >
                  Craft a lesson spark
                </Link>
                <Link
                  href="#stories"
                  className="rounded-2xl border border-indigo-200 bg-white px-6 py-3 text-sm font-semibold text-indigo-700 transition hover:border-indigo-300 hover:text-indigo-800"
                >
                  Browse story prompts
                </Link>
              </div>
            </div>
            <div className="glass-card relative overflow-hidden rounded-3xl p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.2),transparent_60%)]" />
              <div className="relative space-y-6 text-sm text-zinc-600">
                <p className="text-lg font-semibold text-indigo-700">
                  Everyday co-teacher for Primary India
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-indigo-700">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-zinc-800">
                        Create NEP-ready lesson sparks
                      </p>
                      <p>
                        Experience-based activities, socio-emotional cues, and quick assessment ideas tailored to your grade.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-zinc-800">
                        Tell visual stories with imagination
                      </p>
                      <p>
                        Sensory-rich storyboards, tableau ideas, and bilingual prompts keep learners hooked.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-orange-700">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-zinc-800">
                        Share printable kids ebooks
                      </p>
                      <p>
                        Chapter outlines, extension tasks, and WhatsApp-ready summaries for families.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid gap-4 rounded-3xl border border-zinc-100 bg-white/80 p-6 shadow-lg shadow-indigo-100/30 sm:grid-cols-3">
            <Stat
              number="120+"
              label="Creative classroom themes mapped to EVS, English, Math & Art"
            />
            <Stat
              number="45 sec"
              label="Average time to generate a ready-to-use lesson spark"
            />
            <Stat
              number="100%"
              label="Works offline — printable outputs & WhatsApp ready prompts"
            />
          </div>
        </header>
        <div id="lesson">
          <LessonPlanner />
        </div>
        <div id="stories">
          <VisualStoryMaker />
        </div>
        <div id="ebooks">
          <EbookBuilder />
        </div>
        <section className="grid gap-6 rounded-3xl border border-zinc-100 bg-white/80 p-8 shadow-lg shadow-indigo-100/30 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-900">
              Designed for low-tech schools, anganwadis & resource rooms
            </h2>
            <p className="text-sm text-zinc-600">
              Shiksha Sparks respects the realities of Indian classrooms: crowded
              spaces, limited devices, rich multilingual textures. Print, project,
              or simply narrate — each output stays learner-centred.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Bilingual scaffolds",
                  desc: "Toggle between English, Hindi, or blended prompts for inclusive facilitation.",
                },
                {
                  title: "Arts integration",
                  desc: "Every plan weaves music, movement, craft, or theatre for joyful learning.",
                },
                {
                  title: "Assessment ready",
                  desc: "Exit tickets and peer feedback moves keep Continuous Assessments simple.",
                },
                {
                  title: "Family connect",
                  desc: "Home extension ideas foster community partnership with minimal prep.",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-zinc-100 bg-zinc-50/60 p-4 text-sm text-zinc-700 shadow-sm"
                >
                  <p className="text-sm font-semibold text-indigo-600">
                    {feature.title}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-600">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4 rounded-3xl border border-dashed border-indigo-200 bg-indigo-50/50 p-6 text-sm text-zinc-700">
            <p className="text-lg font-semibold text-indigo-700">
              Quick facilitation tips
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-indigo-500" />
                Print or project the generated plan and allocate student leaders for
                each micro-task.
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-indigo-500" />
                Record story prompts as voice notes and share with caregivers via
                WhatsApp.
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-indigo-500" />
                Encourage learners to co-create props from classroom recyclables or
                local craft traditions.
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-indigo-500" />
                Use the kids ebook outline to launch a student-led reading club.
              </li>
            </ul>
            <Link
              href="#lesson"
              className="inline-flex items-center justify-center rounded-full border border-indigo-200 bg-white px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-600 transition hover:border-indigo-300"
            >
              Start creating
            </Link>
          </div>
        </section>
        <footer className="rounded-3xl border border-zinc-100 bg-white/80 px-6 py-8 text-sm text-zinc-600 shadow-inner shadow-indigo-100/40">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-semibold text-indigo-700">Shiksha Sparks</p>
            <p className="text-xs text-zinc-500">
              Crafted with love for primary teachers across India · Share feedback on
              WhatsApp to evolve this co-teacher.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="space-y-2">
      <p className="text-3xl font-semibold text-indigo-600">{number}</p>
      <p className="text-sm text-zinc-600">{label}</p>
    </div>
  );
}
