import HeadingText from "@/components/ui/heading-text";
import NewBook from "@/components/ui/new-book";

export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="mx-auto max-w-screen-xl p-4 flex flex-col">
        <div className="flex items-center w-full justify-between">
        <HeadingText
        title="WritersWorld"
        description="The place to create, share, and read content from around the world"
        />
        <NewBook
        />
        </div>
      </div>
    </div>
  );
}
