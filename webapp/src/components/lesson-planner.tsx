"use client";

import { ChangeEvent, ReactNode, useState } from "react";
import {
  generateLessonPlan,
  type LessonPlan,
  type LessonPlanInput,
} from "@/lib/generators";
import { gradeLevels, languages, subjects, themes } from "@/lib/options";

const durations: LessonPlanInput["duration"][] = ["30 min", "45 min", "60 min"];

export function LessonPlanner() {
  const [form, setForm] = useState<LessonPlanInput>({
    grade: "Class 3",
    subject: "EVS",
    theme: "Nature & Seasons",
    language: "Bilingual",
    duration: "45 min",
  });
  const [plan, setPlan] = useState<LessonPlan | null>(null);

  const handleGenerate = () => {
    const nextPlan = generateLessonPlan(form);
    setPlan(nextPlan);
  };

  const handleChange =
    <Key extends keyof LessonPlanInput>(key: Key) =>
    (event: ChangeEvent<HTMLSelectElement>) => {
      setForm((previous) => ({
        ...previous,
        [key]: event.target.value as LessonPlanInput[Key],
      }));
    };

  return (
    <section className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-lg shadow-indigo-100/40">
      <header className="mb-6 space-y-2">
        <p className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-600">
          Lesson Spark Studio
        </p>
        <h2 className="text-2xl font-semibold text-zinc-900">
          Generate experiential lesson sparks
        </h2>
        <p className="max-w-2xl text-sm text-zinc-600">
          Curated for Indian classrooms. Blend national curriculum outcomes
          with joyful, creative provocations that work in low-resource
          contexts.
        </p>
      </header>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium text-zinc-700">
              Grade level
              <select
                value={form.grade}
                onChange={handleChange("grade")}
                className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-base text-zinc-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
              >
                {gradeLevels.map((grade) => (
                  <option key={grade} value={grade}>
                    {grade}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-zinc-700">
              Subject
              <select
                value={form.subject}
                onChange={handleChange("subject")}
                className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-base text-zinc-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
              >
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-zinc-700">
              Theme
              <select
                value={form.theme}
                onChange={handleChange("theme")}
                className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-base text-zinc-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
              >
                {themes.map((theme) => (
                  <option key={theme} value={theme}>
                    {theme}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-zinc-700">
              Language
              <select
                value={form.language}
                onChange={handleChange("language")}
                className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-base text-zinc-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
              >
                {languages.map((language) => (
                  <option key={language} value={language}>
                    {language}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <label className="flex flex-col gap-2 text-sm font-medium text-zinc-700">
            Session duration
            <select
              value={form.duration}
              onChange={handleChange("duration")}
              className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-base text-zinc-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
            >
              {durations.map((duration) => (
                <option key={duration} value={duration}>
                  {duration}
                </option>
              ))}
            </select>
          </label>
          <button
            onClick={handleGenerate}
            className="w-full rounded-2xl bg-indigo-600 px-4 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
          >
            Create lesson spark
          </button>
        </div>
        <div className="rounded-2xl border border-indigo-100 bg-indigo-50/40 p-6 text-sm text-zinc-800 shadow-inner">
          {plan ? (
            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-semibold text-indigo-700">
                  {plan.title}
                </h3>
                <p className="mt-1 text-sm text-zinc-600">{plan.overview}</p>
              </div>
              <div>
                <h4 className="font-semibold text-zinc-800">Learning goals</h4>
                <ul className="mt-2 space-y-2">
                  {plan.learningGoals.map((goal) => (
                    <li
                      key={goal}
                      className="flex items-start gap-2 rounded-xl bg-white/80 px-3 py-2 shadow-sm"
                    >
                      <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid gap-4">
                <Detail heading="Warm up">{plan.warmUp}</Detail>
                <Detail heading="Main experience">{plan.mainActivity}</Detail>
                <Detail heading="Assessment">{plan.assessment}</Detail>
                <Detail heading="Family connect">{plan.takeHome}</Detail>
              </div>
            </div>
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center text-zinc-500">
              <span className="text-2xl">✨</span>
              <p>Select your classroom needs and craft a ready-to-use lesson spark.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Detail({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-xl bg-white px-4 py-3 shadow-sm shadow-indigo-100/40">
      <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
        {heading}
      </p>
      <p className="mt-1 text-sm text-zinc-700">{children}</p>
    </div>
  );
}
