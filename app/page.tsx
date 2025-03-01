import HeadingText from "@/components/ui/heading-text";

export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="mx-auto max-w-screen-xl p-4 flex flex-col">
        <HeadingText
        title="WritersWorld"
        description="The place to create, share, and read content from around the world"
        />
      </div>
    </div>
  );
}
