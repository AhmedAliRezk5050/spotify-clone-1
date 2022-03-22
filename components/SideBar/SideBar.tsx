import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon,
} from '@heroicons/react/outline'

const SideBar = () => {
  return (
    <div className="h-screen overflow-y-scroll border border-gray-900 p-5 text-sm text-gray-500">
      <div className="flex flex-col gap-4">
        <button className="flex items-center gap-2 hover:text-white">
          <HomeIcon className="h-5 w-5" />
          <span>Home</span>
        </button>
        <button className="flex items-center gap-2 hover:text-white">
          <SearchIcon className="h-5 w-5" />
          <span>Search</span>
        </button>
        <button className="flex items-center gap-2 hover:text-white">
          <LibraryIcon className="h-5 w-5" />
          <span>Your Libray</span>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />

        <button className="flex items-center gap-2 hover:text-white">
          <PlusCircleIcon className="h-5 w-5" />
          <span>Create Playlists</span>
        </button>
        <button className="flex items-center gap-2 hover:text-white">
          <HeartIcon className="h-5 w-5" />
          <span>Liked Songs</span>
        </button>
        <button className="flex items-center gap-2 hover:text-white">
          <RssIcon className="h-5 w-5" />
          <span>Your Episodes</span>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />
        <p className="cursor-pointer hover:text-white">Playlist...</p>
        <p className="cursor-pointer hover:text-white">Playlist...</p>
        <p className="cursor-pointer hover:text-white">Playlist...</p>
        <p className="cursor-pointer hover:text-white">Playlist...</p>
        <p className="cursor-pointer hover:text-white">Playlist...</p>
        <p className="cursor-pointer hover:text-white">Playlist...</p>
        <p className="cursor-pointer hover:text-white">Playlist...</p>
        <p className="cursor-pointer hover:text-white">Playlist...</p>
        <p className="cursor-pointer hover:text-white">Playlist...</p>
        <p className="cursor-pointer hover:text-white">Playlist...</p>
        <p className="cursor-pointer hover:text-white">Playlist...</p>
        <p className="cursor-pointer hover:text-white">Playlist...</p>
        <p className="cursor-pointer hover:text-white">Playlist...</p>
        <p className="cursor-pointer hover:text-white">Playlist...</p>
        <p className="cursor-pointer hover:text-white">Playlist...</p>
        <p className="cursor-pointer hover:text-white">Playlist...</p>
        <p className="cursor-pointer hover:text-white">Playlist...</p>
        <p className="cursor-pointer hover:text-white">Playlist...</p>
        <p className="cursor-pointer hover:text-white">Playlist...</p>
        <p className="cursor-pointer hover:text-white">Playlist...</p>
        <p className="cursor-pointer hover:text-white">Playlist...</p>
      </div>
    </div>
  )
}

export default SideBar
