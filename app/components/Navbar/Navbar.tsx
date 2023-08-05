import Icon from "../Icon/Icon";
import SearchInput from "../SearchInput/SearchInput";

export default function Navbar() {
  return (
    <nav className="py-8 flex gap-4 justify-between">
      <div className="flex gap-4">
        <span className="text-blue-600 text-[32px] font-bold leading-[48px]">
          MORION
        </span>
        <SearchInput placeholder="Search something" />
      </div>
      <div className="flex gap-6">
        <Icon src="/heart.svg" alt="heart" />
        <Icon src="/notification.svg" alt="heart" showNotification />
        <Icon src="/setting-2.svg" alt="heart" />
      </div>
    </nav>
  );
}
