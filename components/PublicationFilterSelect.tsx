import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";

type Props = {
  label: string;
  value: string;
  onChange: (nextValue: string) => void;
  options: string[];
  widthClass?: string;
};

/** Accessible, keyboard-operable dropdown sharing the existing violet filter styling. */
export default function PublicationFilterSelect({
  label,
  value,
  onChange,
  options,
  widthClass = "w-44",
}: Props) {
  const defaultValue = options[0];
  const displayText = value === defaultValue ? defaultValue : `${label}: ${value}`;

  return (
    <div className={`relative max-w-full ${widthClass}`}>
      <Listbox value={value} onChange={onChange}>
        <div className="relative">
          <Listbox.Button
            aria-label={`${label} filter: ${value}`}
            className="site-select-button flex w-full items-center text-left"
          >
            <span className="block min-w-0 flex-1 truncate" title={displayText}>
              {displayText}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon className="h-5 w-5 text-secondary" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition
            enter="transition duration-150 ease-out"
            enterFrom="translate-y-1 opacity-0"
            enterTo="translate-y-0 opacity-100"
            leave="transition duration-100 ease-in"
            leaveFrom="translate-y-0 opacity-100"
            leaveTo="translate-y-1 opacity-0"
          >
            <Listbox.Options className="site-select-options absolute z-50 mt-2 max-h-72 w-full min-w-max overflow-auto rounded-xl p-1 text-sm focus:outline-none">
              {options.map((option) => (
                <Listbox.Option
                  key={option}
                  value={option}
                  className={({ active }) =>
                    `site-select-option relative cursor-pointer select-none py-2 pl-9 pr-4 ${active ? "is-active" : ""}`
                  }
                >
                  {({ selected }) => (
                    <>
                      <span className={`${selected ? "font-semibold" : "font-normal"} block whitespace-nowrap`}>
                        {option}
                      </span>
                      {selected && (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-[var(--site-violet)]">
                          <CheckIcon className="h-4 w-4" aria-hidden="true" />
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
  );
}
