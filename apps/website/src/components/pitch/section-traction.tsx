import Image from "next/image";
import Link from "next/link";
import customers from "./customers.png";
import { Card } from "./ui";

export function SectionTraction() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-8 right-8 top-4 flex justify-between">
        <span>Traction</span>
        <span className="text-[#878787]">
          <Link href="/">Midday</Link>
        </span>
      </div>
      <div className="flex flex-col min-h-screen justify-center container">
        <div className="grid grid-cols-3 gap-8">
          <div className="space-y-8">
            <Card>
              <h2 className="text-2xl">Waitlist sign ups</h2>

              <p className="text-[#878787] text-sm text-center">
                We have built Midday in public on X and amassed nearly 4000
                signups ready to start using Midday.
              </p>

              <span className="mt-auto font-mono text-[122px]">1300</span>
            </Card>

            <Card>
              <h2 className="text-2xl">Github stars</h2>

              <p className="text-[#878787] text-sm text-center">
                Since going open source on the 20th of March 2024 we’ve gained
                834 stars on Github. Full documentation and how to contribute
                will follow soon.
              </p>

              <span className="mt-auto font-mono text-[122px]">840</span>
            </Card>
          </div>
          <div className="space-y-8">
            <Card>
              <h2 className="text-2xl">Private beta users</h2>

              <p className="text-[#878787] text-sm text-center">
                This is how many we’ve let into the system to start using it,
                joined the community and started to form Midday together with
                us.
              </p>

              <span className="mt-auto font-mono text-[122px]">3500</span>
            </Card>

            <Card>
              <h2 className="text-2xl">X Followers</h2>

              <p className="text-[#878787] text-sm text-center">
                Since building everything in public we’ve gained lots of
                engagement on our posts. We see this as great way to talk to our
                users.
              </p>

              <span className="mt-auto font-mono text-[122px]">839</span>
            </Card>
          </div>

          <div className="ml-auto w-full max-w-[820px] h-full border border-border rounded-xl p-6">
            <h2 className="mb-24 block text-[38px]">What users are saying</h2>

            <Image src={customers} width={698} alt="Customers" quality={100} />
          </div>
        </div>
      </div>
    </div>
  );
}
