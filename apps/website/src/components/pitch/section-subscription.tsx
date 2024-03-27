import Link from "next/link";
import { Card } from "./ui";

export function SectionSubscription() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-8 right-8 top-4 flex justify-between">
        <span>How we will make money</span>
        <span className="text-[#878787]">
          <Link href="/">Midday</Link>
        </span>
      </div>
      <div className="flex flex-col min-h-screen justify-center container">
        <div className="mb-4">
          <h2 className="text-xl">Tiers</h2>
        </div>

        <div className="grid grid-cols-3 gap-8 mb-12">
          <Card className="pb-8">
            <span className="py-1 px-4 bg-white text-black rounded-lg text-sm font-medium mb-4">
              Base
            </span>

            <h2 className="text-xl">Free</h2>
            <p className="text-[#878787] text-sm text-center">
              We will offer a free limited plan for customers to get to know the
              platform and value.
            </p>
          </Card>

          <Card className="pb-8">
            <span className="py-1 px-4 border border-border rounded-lg text-sm font-medium mb-4">
              Pro
            </span>

            <h2 className="text-xl">TBD/ mo</h2>
            <p className="text-[#878787] text-sm text-center">
              This is the price new users will pay when we launch. The price is
              yet to be determined.
            </p>
          </Card>

          <Card className="pb-8">
            <span className="py-1 px-4 border border-border rounded-lg text-sm font-medium mb-4">
              Enterprise
            </span>

            <h2 className="text-xl">TBD</h2>
            <p className="text-[#878787] text-sm text-center">
              This plan will be offered to bigger companies with lots of seats.
              This will be licensed based and the price is yet to be determined.
            </p>
          </Card>
        </div>

        <div className="mb-4">
          <h2 className="text-xl">Add ons</h2>
        </div>

        <div className="grid grid-cols-3 gap-8 mb-12">
          <Card className="pb-8">
            <h2>Team seats</h2>
            <p className="text-[#878787] text-sm text-center">
              Additional team members will be priced around $9. The team will
              have the ability to invite however many users they want.
            </p>
          </Card>

          <Card className="pb-8">
            <h2>Vault storage</h2>
            <p className="text-[#878787] text-sm text-center">
              A limit will be set to the storage since this is also a moving
              cost for us. Everything above that limit will cost the users
              extra. Price is yet to be determined.
            </p>
          </Card>

          <Card className="pb-8">
            <h2>Custom domain</h2>
            <p className="text-[#878787] text-sm text-center">
              If the user want a custom inbox email, for example
              Receipts@acme.com, we can provide this for an additional fee.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
