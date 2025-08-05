import Link from "components/Link";
import Section from "components/Section";
import React, { useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronUpDownIcon, CheckIcon } from '@heroicons/react/24/outline';
import { NextSeo } from "next-seo";
import { FullName, SiteURL } from "./about";
import { formatDate } from "../lib/formatdate";
import { talks } from "../data/talks";
import Tooltip from "../components/Tooltip";

const seoTitle = `Talks | ${FullName}`;
const seoDesc = `Invited talks and presentations.`;

interface Talk {
  title: string;
  conference: string;
  date: string;
  location: string;
  link?: string;
  invited?: string;
  keynote?: boolean;
  discussant?: boolean;
}

// 分类
const ALL_TALKS = "All Talks";
const INVITED_TALKS = "Invited Talks";
const KEYNOTE_TALKS = "Keynotes";
const pastTalks = talks.filter((talk) => new Date(talk.date) < new Date());
const futureTalks = talks.filter((talk) => new Date(talk.date) > new Date());

// 下拉框选项：按年份倒序排列
const yearList = Array.from(new Set(talks.map(t => new Date(t.date).getFullYear().toString()))).sort((a, b) => Number(b) - Number(a));
const filterOptions = [ALL_TALKS, INVITED_TALKS, KEYNOTE_TALKS, ...yearList];

// 筛选器
function isMatch(talk: Talk, selected: string): boolean {
  if (selected === ALL_TALKS) return true;
  if (selected === INVITED_TALKS) return !!talk.invited;
  if (selected === KEYNOTE_TALKS) return !!talk.keynote;
  if (!isNaN(Number(selected))) return new Date(talk.date).getFullYear().toString() === selected;
  return talk.conference === selected;
}

// Talk 渲染列表
function TalkList(talks: Talk[]) {
  return talks
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map((talk) => (
      <li key={talk.title + talk.conference + talk.date}>
        <Section heading={formatDate(talk.date)}>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <h3>
                {talk.discussant && <span className="text-secondary">Discussant for </span>}
                {talk.keynote && <span className="font-semibold text-highlight">Keynote: </span>}
                {talk.title}
              </h3>

              <p className="text-secondary">
                {talk.conference}
                {(talk.invited || talk.discussant || talk.keynote) && (
                  <Tooltip text="Invited / Discussant / Keynote">
                    <span><sup>*</sup></span>
                  </Tooltip>
                )}
              </p>

              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                {talk.invited && <span>Invited by {talk.invited}</span>}
                {talk.location && <span>{talk.location}</span>}
                {talk.link && (
                  <Link href={talk.link} underline>
                    Read More
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Section>
      </li>
    ));
}

export default function Talks() {
  const [selectedFilter, setSelectedFilter] = useState(ALL_TALKS);

  const totalTalks = talks.length;
  const invitedCount = talks.filter(t => t.invited).length;
  const keynoteCount = talks.filter(t => t.keynote).length;

  const filteredFuture = futureTalks.filter(talk => isMatch(talk, selectedFilter));
  const filteredPast = pastTalks.filter(talk => isMatch(talk, selectedFilter));

  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        openGraph={{
          title: seoTitle,
          url: `${SiteURL}/talks`,
          description: seoDesc,
          site_name: FullName
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <div className="flex flex-col gap-10 md:gap-10">
        <div>
          <h1>Talks & Discussions</h1>
          <p className="text-secondary">
            {totalTalks} Talks • {invitedCount} Invited • {keynoteCount} Keynotes
            <br />
            Invited, keynote, and discussant talks are marked with *
          </p>
        </div>

        {/* 下拉框 */}
        <div style={{ zIndex: 5 } as React.CSSProperties}>
          <Listbox value={selectedFilter} onChange={setSelectedFilter}>
            <div className="relative">
              <Listbox.Button className="p-2 w-full max-h-60 rounded-xl backdrop-blur-lg ring-1 ring-gray-400 ring-opacity-20 text-sm focus:outline-none hover:bg-secondaryA transition-all">
                <span className="block truncate">{selectedFilter}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <ChevronUpDownIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                </span>
              </Listbox.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Listbox.Options className="absolute mt-2 w-full p-2 overflow-auto text-base origin-top-right shadow-lg max-h-60 rounded-xl bg-blur backdrop-blur-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm scroll-smooth no-scrollbar">
                  {filterOptions.map(option => (
                    <Listbox.Option
                      key={option}
                      value={option}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 rounded-md ${active ? "bg-secondaryA" : "text-primary"}`
                      }
                    >
                      {({ selected }) => (
                        <>
                          <span className={`${selected ? 'font-medium' : 'font-normal'} block truncate`}>
                            {option}
                          </span>
                          {selected && (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary">
                              <CheckIcon className="w-5 h-5" aria-hidden="true" />
                            </span>
                          )}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>

        {/* 即将进行的 Talks */}
        {filteredFuture.length > 0 && (
          <div className="flex flex-col gap-4">
            <h2>Upcoming</h2>
            <ul className="flex flex-col gap-8">{TalkList(filteredFuture)}</ul>
          </div>
        )}

        {/* 过去的 Talks */}
        {filteredPast.length > 0 && (
          <div className="flex flex-col gap-4">
            <h2>Past</h2>
            <ul className="flex flex-col gap-8">{TalkList(filteredPast)}</ul>
          </div>
        )}
      </div>
    </>
  );
}
