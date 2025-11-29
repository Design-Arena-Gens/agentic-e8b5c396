"use client";

import { ChangeEvent, useState } from "react";
import {
  generateVisualStory,
  type VisualStory,
  type VisualStoryInput,
} from "@/lib/generators";
import { languages, themes } from "@/lib/options";

const settings: VisualStoryInput["setting"][] = [
  "Classroom",
  "Village",
  "City",
  "Nature Trail",
  "Festival",
];

export function VisualStoryMaker() {
  const [form, setForm] = useState<VisualStoryInput>({
    theme: "Local Heroes",
    setting: "Village",
    language: "English",
  });
  const [story, setStory] = useState<VisualStory | null>(null);

  const handleChange =
    <Key extends keyof VisualStoryInput>(key: Key) =>
    (event: ChangeEvent<HTMLSelectElement>) => {
      setForm((previous) => ({
        ...previous,
        [key]: event.target.value as VisualStoryInput[Key],
      }));
    };

  const handleGenerate = () => {
    setStory(generateVisualStory(form));
  };

  return (
    <section className="rounded-3xl border border-emerald-200 bg-white p-8 shadow-lg shadow-emerald-100/40">
      <header className="mb-6 space-y-2">
        <p className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-600">
          Visual Story Weaver
        </p>
        <h2 className="text-2xl font-semibold text-zinc-900">
          Craft storyboards with sensory prompts
        </h2>
        <p className="max-w-2xl text-sm text-zinc-600">
          Transform your classroom into a storytelling studio. Each scene comes
          with imaginative cues, bilingual nudges, and movement ideas.
        </p>
      </header>
      <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium text-zinc-700">
              Theme
              <select
                value={form.theme}
                onChange={handleChange("theme")}
                className="rounded-xl border border-emerald-200 bg-white px-3 py-2 text-base text-zinc-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
              >
                {themes.map((theme) => (
                  <option key={theme} value={theme}>
                    {theme}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-zinc-700">
              Story setting
              <select
                value={form.setting}
                onChange={handleChange("setting")}
                className="rounded-xl border border-emerald-200 bg-white px-3 py-2 text-base text-zinc-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
              >
                {settings.map((setting) => (
                  <option key={setting} value={setting}>
                    {setting}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <label className="flex flex-col gap-2 text-sm font-medium text-zinc-700">
            Language style
            <select
              value={form.language}
              onChange={handleChange("language")}
              className="rounded-xl border border-emerald-200 bg-white px-3 py-2 text-base text-zinc-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
            >
              {languages.map((language) => (
                <option key={language} value={language}>
                  {language}
                </option>
              ))}
            </select>
          </label>
          <button
            onClick={handleGenerate}
            className="w-full rounded-2xl bg-emerald-500 px-4 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-200 transition hover:bg-emerald-600"
          >
            Build visual story trail
          </button>
        </div>
        <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-6 shadow-inner">
          {story ? (
            <div className="space-y-4 text-sm text-zinc-800">
              <div>
                <h3 className="text-lg font-semibold text-emerald-700">
                  {story.title}
                </h3>
                <p className="mt-1 text-sm text-zinc-600">{story.hook}</p>
              </div>
              <div className="space-y-3">
                {story.scenes.map((scene) => (
                  <article
                    key={scene.heading + scene.visualCue}
                    className="rounded-xl bg-white px-4 py-3 shadow-sm shadow-emerald-100/60"
                  >
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
                      {scene.heading}
                    </h4>
                    <p className="mt-1 font-medium text-zinc-800">
                      Visual cue: {scene.visualCue}
                    </p>
                    <p className="mt-2 text-sm text-zinc-600">
                      {scene.narration}
                    </p>
                    <p className="mt-2 text-xs font-semibold text-emerald-600">
                      Facilitation tip
                    </p>
                    <p className="text-sm text-zinc-600">{scene.activityHint}</p>
                  </article>
                ))}
              </div>
              <div className="rounded-xl border border-dashed border-emerald-200 bg-white/80 px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
                  Reflect & calm
                </p>
                <p className="mt-1 text-sm text-zinc-600">{story.reflection}</p>
              </div>
            </div>
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center text-zinc-500">
              <span className="text-2xl">🧠</span>
              <p>Set the scene and unlock a multi-sensory storyboard for your learners.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
