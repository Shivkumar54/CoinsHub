import { Disclosure } from "@headlessui/react"
import { BiChevronDown, BiChevronUp } from "react-icons/bi"
import { useParams } from "react-router-dom"
export default function DropDown() {
      const { id } = useParams()

  return (
    <div className="">
      <div className="backgrounder">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="dBtn">
                <span>What is your refund policy?</span>
                <BiChevronUp
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="dBtn">
                <span>Do you offer technical support?</span>
                <BiChevronDown
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {details.name}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}
