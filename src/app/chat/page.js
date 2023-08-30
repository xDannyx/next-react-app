export default function Page() {
  return (
    <>
      <p className="font-sans text-base">
        SŁAWO AI v0.noob bot made by Ulvhedin 🤖
      </p>
      <div className="mx-auto w-full max-w-md py-24 flex flex-col stretch">
        <div className="whitespace-pre-wrap my-6">
          <p>This is the area for messagess</p>
        </div>
        <div className="fixed w-full max-w-md bottom-0 rounded mb-8 p-2">
          <div className="flex">
            <input className="w-full border border-gray-300 rounded-md" />
            <button className="bg-black text-white rounded-md px-4 mx-1">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
