import Image from "next/image";
import Button from "../components/Button/Button";
import { DatePickerDemo } from "@/components/ui/datepicker";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex gap-8 py-8">
        <div className="flex flex-col gap-5 bg-[#54A6FF] w-full p-5 bg-[url('/BG.svg')] h-[360px] rounded-[10px]">
          <h2 className="text-white text-3xl font-semibold leading-[48px] w-64">
            The Best Platform for Car Rental
          </h2>
          <span className="block w-72 text-white text-base font-medium leading-normal">
            Providing cheap car rental services and safe and comfortable
            facilities.
          </span>
          <Button btntype="primary" className="w-32">
            Rental Car
          </Button>
        </div>
        <div className="flex flex-col gap-5 bg-[#3563E9] w-full p-5 bg-[url('/BG-2.svg')] h-[360px] rounded-[10px]">
          <h2 className="text-white text-3xl font-semibold leading-[48px] w-64">
            Easy way to rent a car at a low price
          </h2>
          <span className="block w-72 text-white text-base font-medium leading-normal">
            Providing cheap car rental services and safe and comfortable
            facilities.
          </span>
          <Button btntype="secondary" className="w-32">
            Rental Car
          </Button>
        </div>
      </div>
      <div className="flex gap-8">
        <div className="w-full bg-white rounded-[10px] p-10">
          <div className="text-gray-900 text-2xl font-semibold leading-normal">
            Pick - Up
          </div>
          <div className="flex gap-5 mt-4">
            <div className="flex flex-col w-full">
              <label className="text-gray-900 text-base leading-normal">
                Locations
              </label>
              <Select>
                <SelectTrigger className="w-[180px] border-none">
                  <SelectValue placeholder="Select your city" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="istanbul">istanbul</SelectItem>
                  <SelectItem value="ankara">ankara</SelectItem>
                  <SelectItem value="izmir">izmir</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col w-full">
              <label className="text-gray-900 text-base leading-normal">
                Date
              </label>
              <DatePickerDemo placeholder={"Select your date"} />
            </div>
          </div>
        </div>
        <div className="w-2/12 flex items-center justify-center">
          <Button
            btntype="primary"
            className="w-16 items-center justify-center text-center flex py-[24px]"
          >
            <Image src="/swap.svg" alt="swap" width={18} height={18} />
          </Button>
        </div>
        <div className="w-full bg-white rounded-[10px] p-10">
          <div className="text-gray-900 text-2xl font-semibold leading-normal">
            Drop - Off
          </div>
          <div className="flex gap-5 mt-4">
            <div className="flex flex-col w-full">
              <label className="text-gray-900 text-base leading-normal">
                Locations
              </label>
              <Select>
                <SelectTrigger className="w-[180px] border-none">
                  <SelectValue placeholder="Select your city" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="istanbul">istanbul</SelectItem>
                  <SelectItem value="ankara">ankara</SelectItem>
                  <SelectItem value="izmir">izmir</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col w-full">
              <label className="text-gray-900 text-base leading-normal">
                Date
              </label>
              <DatePickerDemo placeholder={"Select your date"} />
            </div>
          </div>
        </div>
      </div>
      <div>popular cars</div>
      <div>recomendation cars</div>
      <div>footer</div>
    </div>
  );
}
