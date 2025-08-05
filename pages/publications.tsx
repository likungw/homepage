import { useState } from "react";
import Link from "components/Link";
import Section from "components/Section";
import { NextSeo } from "next-seo";
import { FullName, SiteURL } from "./about";
import Award from "../components/Award";
import { publications } from "../data/publications";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon, CheckIcon } from "@heroicons/react/24/outline";
import { Publication } from "../types/publication";




const seoTitle = `Publications | ${FullName}`;
const seoDesc = `Selected publications by ${FullName}.`;

const ALL_YEARS = "All Years";
const years = [
  ALL_YEARS,
  ...Array.from(new Set(publications.map((p) => new Date(p.date).getFullYear().toString())))
    .sort((a, b) => Number(b) - Number(a)) // 按年份倒序排序
];

export function PublicationListGrouped(pubs: Publication[]) {
  const sorted = [...pubs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const years = Array.from(new Set(sorted.map(pub => new Date(pub.date).getFullYear().toString())))
    .sort((a, b) => Number(b) - Number(a));

  return years.map(year => {
    const yearPubs = sorted.filter(pub => new Date(pub.date).getFullYear().toString() === year);
    return (
      <li key={year}>
        <h2 className="text-xl font-bold mt-6 mb-2">{year}</h2>
        <ul className="flex flex-col gap-8">
          {yearPubs.map(pub => {
            // 如果是通信作者，就在作者列表中 Kun Li 后加 *
            let authorsText = pub.authors;
            if (pub.corresponding) {
              authorsText = authorsText.replace(/Kun Li(?!\*)/, "Kun Li*");
            }

            return (
              <Section
                key={pub.title + pub.journal + pub.date}
                heading={pub.date}
                className={pub.award ? "border-l-4 border-yellow-400 bg-yellow-50 p-4 rounded-lg" : ""}
              >
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1">
                    <h3>{pub.title}</h3>
                    <p className="text-secondary">{authorsText}</p>
                    {pub.award && (
                      <p className="text-secondary font-semibold">
                        🏆 <Award award={pub.award} />
                      </p>
                    )}
                    <p className="text-secondary">{pub.journal}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-blue-600 mt-1">
                      {pub.link && (
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline hover:text-blue-800 transition-colors"
                        >
                          📄 Paper
                        </a>
                      )}
                      {pub.repo && (
                        <a
                          href={pub.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline hover:text-blue-800 transition-colors"
                        >
                          💻 Code
                        </a>
                      )}
                      {pub.project && (
                        <a
                          href={pub.project}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline hover:text-blue-800 transition-colors"
                        >
                          🌐 Project
                        </a>
                      )}
                      {pub.slides && (
                        <a
                          href={pub.slides}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline hover:text-blue-800 transition-colors"
                        >
                          📽️ Slides
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Section>
            );
          })}
        </ul>
      </li>
    );
  });
}




export default function PublicationsPage() {
  const [showAwardsOnly, setShowAwardsOnly] = useState(false);
  const [selectedYear, setSelectedYear] = useState(ALL_YEARS);

  const totalPublications = publications.length;
  const correspondingCount = publications.filter((p) => p.corresponding).length;
  const awardsCount = publications.filter((p) => p.award).length;

  const publicationsByYear: Record<string, number> = {};
  publications.forEach((pub) => {
    const year = new Date(pub.date).getFullYear().toString();
    publicationsByYear[year] = (publicationsByYear[year] || 0) + 1;
  });

  // 双重筛选
  const displayedPublications = publications.filter((p) => {
    const matchAward = showAwardsOnly ? !!p.award : true;
    const matchYear = selectedYear === ALL_YEARS
      ? true
      : new Date(p.date).getFullYear().toString() === selectedYear;
    return matchAward && matchYear;
  });

  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        openGraph={{
          title: seoTitle,
          url: `${SiteURL}/publications`,
          description: seoDesc,
          site_name: FullName,
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />

      <div className="flex flex-col gap-10 md:gap-10">
        {/* 顶部标题 & 统计 */}
        <div>
          <h1>
            Selected Publications (For a full list, see{" "}
            <a
              href="https://scholar.google.com.hk/citations?user=2J-7nxUAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600 transition-colors duration-200"
            >
              Google Scholar
            </a>
            )
          </h1>
          <p className="text-secondary">
            {totalPublications} Publications • {correspondingCount} Corresponding Author • {awardsCount} Awards
            <br />
            {years
              .filter((y) => y !== ALL_YEARS) // 去掉 "All Years"
              .map((year) => `${year}: ${publicationsByYear[year] || 0}`)
              .join(" • ")}
            <br />
            * denotes corresponding author.
          </p>

          {/* 筛选按钮 */}
          <div className="mt-4 flex gap-4 flex-wrap">
            <button
              onClick={() => setShowAwardsOnly(false)}
              className={`px-4 py-2 rounded-lg border ${
                !showAwardsOnly
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white text-blue-500 border-blue-500"
              }`}
            >
              All Publications
            </button>
            <button
              onClick={() => setShowAwardsOnly(true)}
              className={`px-4 py-2 rounded-lg border ${
                showAwardsOnly
                  ? "bg-yellow-500 text-white border-yellow-500"
                  : "bg-white text-yellow-500 border-yellow-500"
              }`}
            >
              Awarded Publications
            </button>

            {/* 年份筛选下拉框 */}
            <div className="w-48">
              <Listbox value={selectedYear} onChange={setSelectedYear}>
                <div className="relative">
                  <Listbox.Button className="p-2 w-full rounded-lg border border-gray-300 bg-white text-left">
                    <span className="block truncate">{selectedYear}</span>
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
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-sm z-10">
                      {years.map((year) => (
                        <Listbox.Option
                          key={year}
                          value={year}
                          className={({ active }) =>
                            `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                              active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                            }`
                          }
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`${
                                  selected ? "font-medium" : "font-normal"
                                } block truncate`}
                              >
                                {year}
                              </span>
                              {selected && (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
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
          </div>
        </div>

        {/* 按年份分组渲染论文 */}
        <ul className="flex flex-col gap-8">
          {PublicationListGrouped(displayedPublications)}
        </ul>
      </div>
    </>
  );
}
