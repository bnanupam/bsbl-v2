import { GlareCard } from "../ui/glare-card";

export function Card() {
  return (
    <div className=" container grid grid-cols-1 md:grid-cols-4 gap-10">
      <GlareCard className="flex flex-col items-center justify-center p-3 group">
        <svg
          width="66"
          height="65"
          viewBox="0 0 66 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-14 w-14 text-white"
        >
          <path
            d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
            stroke="currentColor"
            strokeWidth="15"
            strokeMiterlimit="3.86874"
            strokeLinecap="round"
          />
        </svg>
        <h3 className="text-white text-2xl py-5 group-hover:text-red-600">
          Website Development
        </h3>
        <p className="text-white text-base group-hover:text-primary-foreground ">
          We delivered scalable and robust web development service to our
          clients, creating their desired web application for them.
        </p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center text-white p-3">
        <svg
          width="66"
          height="65"
          viewBox="0 0 66 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-14 w-14 text-white"
        >
          <path
            d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
            stroke="currentColor"
            strokeWidth="15"
            strokeMiterlimit="3.86874"
            strokeLinecap="round"
          />
        </svg>
        <h3 className=" text-white text-2xl py-5">Application Development</h3>
        <p className="text-white text-base px-3">
          We are expertise on all latest mobile technology which we are used to
          develop all of our android and iOS app development service. We create
          excellent trailer made solution that run smoothly on all type of
          device
        </p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center p-3">
        <svg
          width="66"
          height="65"
          viewBox="0 0 66 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-14 w-14 text-white"
        >
          <path
            d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
            stroke="currentColor"
            strokeWidth="15"
            strokeMiterlimit="3.86874"
            strokeLinecap="round"
          />
        </svg>
        <h3 className=" text-white text-2xl py-5">Digital Markiting</h3>
        <p className="text-white text-base px-3">
          We are not focus on traditional marketing strategy. We build the BRAND
          with our own marketing strategy to grow our customer business and help
          them to generate revenue. We offer SEO and SEM and strategic
          marketing.
        </p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
        <svg
          width="66"
          height="65"
          viewBox="0 0 66 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-14 w-14 text-white"
        >
          <path
            d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
            stroke="currentColor"
            strokeWidth="15"
            strokeMiterlimit="3.86874"
            strokeLinecap="round"
          />
        </svg>
        <h3 className=" text-white text-2xl py-5">360 Virtual Tour</h3>
        <p className="text-white text-base px-3">
        Our immersive virtual tours work just like a website, which your viewers will be used to. From navigation menus, to hotspots that draw attention, you can control the story. We put it together.
        </p>
      </GlareCard>

      <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
        <svg
          width="66"
          height="65"
          viewBox="0 0 66 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-14 w-14 text-white"
        >
          <path
            d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
            stroke="currentColor"
            strokeWidth="15"
            strokeMiterlimit="3.86874"
            strokeLinecap="round"
          />
        </svg>
        <h3 className=" text-white text-2xl py-5">Digital Markiting</h3>
        <p className="text-white text-base px-3">
          We are not focus on traditional marketing strategy. We build the BRAND
          with our own marketing strategy to grow our customer business and help
          them to generate revenue. We offer SEO and SEM and strategic
          marketing.
        </p>
      </GlareCard>
    </div>
  );
}
