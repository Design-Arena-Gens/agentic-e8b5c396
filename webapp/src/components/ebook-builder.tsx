"use client";

import { ChangeEvent, useState } from "react";
import {
  generateEbook,
  type Ebook,
  type EbookInput,
} from "@/lib/generators";
import { gradeLevels, languages, themes } from "@/lib/options";

const focusSkills: EbookInput["focusSkill"][] = [
  "Reading",
  "Vocabulary",
  "Life Skills",
  "STEAM",
];

export function EbookBuilder() {
  const [form, setForm] = useState<EbookInput>({
    readingLevel: "Class 4",
    theme: "Heritage & Culture",
    focusSkill: "Life Skills",
    language: "Bilingual",
  });
  const [ebook, setEbook] = useState<Ebook | null>(null);

  const handleChange =
    <Key extends keyof EbookInput>(key: Key) =>
    (event: ChangeEvent<HTMLSelectElement>) => {
      setForm((previous) => ({
        ...previous,
        [key]: event.target.value as EbookInput[Key],
      }));
    };

  const handleGenerate = () => {
    setEbook(generateEbook(form));
  };

  return (
    <section className="rounded-3xl border border-orange-200 bg-white p-8 shadow-lg shadow-orange-100/40">
      <header className="mb-6 space-y-2">
        <p className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-600">
          Kids Ebook Canvas
        </p>
        <h2 className="text-2xl font-semibold text-zinc-900">
          Design printable storybooks with classroom prompts
        </h2>
        <p className="max-w-2xl text-sm text-zinc-600">
          Generate chapter summaries, reading strategies, and take-home
          activities. Ideal for low-cost booklet printing or WhatsApp sharing.
        </p>
      </header>
      <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium text-zinc-700">
              Reading level
              <select
                value={form.readingLevel}
                onChange={handleChange("readingLevel")}
                className="rounded-xl border border-orange-200 bg-white px-3 py-2 text-base text-zinc-900 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
              >
                {gradeLevels.map((grade) => (
                  <option key={grade} value={grade}>
                    {grade}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-zinc-700">
              Theme
              <select
                value={form.theme}
                onChange={handleChange("theme")}
                className="rounded-xl border border-orange-200 bg-white px-3 py-2 text-base text-zinc-900 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
              >
                {themes.map((theme) => (
                  <option key={theme} value={theme}>
                    {theme}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-zinc-700">
              Focus skill
              <select
                value={form.focusSkill}
                onChange={handleChange("focusSkill")}
                className="rounded-xl border border-orange-200 bg-white px-3 py-2 text-base text-zinc-900 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
              >
                {focusSkills.map((skill) => (
                  <option key={skill} value={skill}>
                    {skill}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-zinc-700">
              Language support
              <select
                value={form.language}
                onChange={handleChange("language")}
                className="rounded-xl border border-orange-200 bg-white px-3 py-2 text-base text-zinc-900 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
              >
                {languages.map((language) => (
                  <option key={language} value={language}>
                    {language}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <button
            onClick={handleGenerate}
            className="w-full rounded-2xl bg-orange-500 px-4 py-3 text-base font-semibold text-white shadow-lg shadow-orange-200 transition hover:bg-orange-600"
          >
            Create kids ebook pack
          </button>
        </div>
        <div className="rounded-2xl border border-orange-100 bg-orange-50/60 p-6 shadow-inner">
          {ebook ? (
            <div className="space-y-4 text-sm text-zinc-800">
              <div>
                <h3 className="text-lg font-semibold text-orange-600">
                  {ebook.title}
                </h3>
                <p className="mt-1 text-sm text-zinc-600">{ebook.description}</p>
              </div>
              <div className="space-y-3">
                {ebook.chapters.map((chapter) => (
                  <article
                    key={chapter.heading}
                    className="rounded-xl bg-white px-4 py-3 shadow-sm shadow-orange-100/60"
                  >
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-orange-500">
                      {chapter.heading}
                    </h4>
                    <p className="mt-1 text-sm text-zinc-700">
                      {chapter.summary}
                    </p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-orange-500">
                      Classroom extension
                    </p>
                    <p className="text-sm text-zinc-600">
                      {chapter.classroomExtension}
                    </p>
                  </article>
                ))}
              </div>
              <div className="rounded-xl border border-dashed border-orange-200 bg-white/80 px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-orange-500">
                  Printable add-on
                </p>
                <p className="mt-1 text-sm text-zinc-600">
                  {ebook.printableActivity}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center text-zinc-500">
              <span className="text-2xl">📚</span>
              <p>Choose a theme and skill focus to receive a ready-to-share kids ebook outline.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
