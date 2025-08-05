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
import TalkList, { Talk } from "../components/TalkList"; // ✅ 新增这一行

const seoTitle = `Talks | ${FullName}`;
const seoDesc = `Invited talks and presentations.`;

const ALL_TALKS = "All Talks";
const INVITED_TALKS = "Invited Talks";
const KEYNOTE_TALKS = "Keynotes";

const pastTalks = talks.filter((talk) => new Date(talk.date) < new Date());
const futureTalks = talks.filter((talk) => new Date(talk.date) > new Date());

const yearList = Array.from(new Set(talks.map(t => new Date(t.date).getFullYear().toString()))).sort((a, b) => Number(b) - Number(a));
const filterOptions = [ALL_TALKS, INVITED_TALKS, KEYNOTE_TALKS, ...yearList];

function isMatch(talk: Talk, selected: string): boolean {
  if (selected === ALL_TALKS) return true;
  if (selected === INVITED_TALKS) return !!talk.invited;
  if (selected === KEYNOTE_TALKS) return !!talk.keynote;
  if (!isNaN(Number(selected))) return new Date(talk.date).getFullYear().toString() === selected;
  return talk.conference === selected;
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
          </p>
        </div>

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

        {filteredFuture.length > 0 && (
          <div className="flex flex-col gap-4">
            <h2>Upcoming</h2>
            <ul className="flex flex-col gap-4">{TalkList(filteredFuture)}</ul>
          </div>
        )}

        {filteredPast.length > 0 && (
          <div className="flex flex-col gap-4">
            <h2>Past</h2>
            <ul className="flex flex-col gap-4">{TalkList(filteredPast)}</ul>
          </div>
        )}
      </div>
    </>
  );
}
