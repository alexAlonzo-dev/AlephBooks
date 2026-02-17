import React from "react";
import PageTitle from "./PageTitle";

export default function About() {
  const h3Style = "text-lg font-semibold text-primary dark:text-light mb-2";
  const pStyle = "text-gray-600 dark:text-lighter";

  return (
    <div className="max-w-5xl min-h-212 mx-auto px-6 py-8 font-primary">
      <PageTitle title="About US" />

      <p className="mt-4 leading-6 mb-8 text-gray-600 dark:text-lighter">
        <span className="text-lg font-semibold text-primary dark:text-light">
          Aleph Book
        </span>{" "}
        is an online bookstore inspired by the idea of{" "}
        <em>The Aleph</em> — a point in space that contains all other points,
        from the story by Jorge Luis Borges. Just as the Aleph reveals an
        entire universe in a single glance, our platform brings together
        countless stories in one place.
      </p>

      <p className="leading-6 mb-8 text-gray-600 dark:text-lighter">
        We believe every book holds a universe within its pages. Our mission is
        to make discovering your next great read simple, enjoyable, and
        inspiring.
      </p>

      <h2 className="text-2xl leading-8 font-bold text-primary dark:text-light mb-6">
        Why Choose Aleph Book?
      </h2>
      <div className="space-y-8">
        <div>
          <h3 className={h3Style}>Curated Book Selection</h3>
          <p className={pStyle}>
            We offer a growing collection of fiction, non-fiction, classics,
            and contemporary titles carefully selected to suit different tastes
            and interests.
          </p>
        </div>

        <div>
          <h3 className={h3Style}>Community Reviews (Coming Soon)</h3>
          <p className={pStyle}>
            Soon, readers will be able to share opinions, write reviews, and
            recommend books to others. Aleph Book aims to become not just a
            store, but a community where stories are discussed and celebrated.
          </p>
        </div>

        <div>
          <h3 className={h3Style}>Simple & Secure Experience</h3>
          <p className={pStyle}>
            We focus on providing a clean interface and a smooth purchasing
            process to ensure a reliable and enjoyable shopping experience.
          </p>
        </div>

        <div>
          <h3 className={h3Style}>Built as a Full-Stack Learning Project</h3>
          <p className={pStyle}>
            Aleph Book was developed as a full-stack project using Spring Boot
            for the REST API and React for the frontend. It represents a
            practical application of modern web development technologies,
            combining backend architecture and frontend design in a real-world
            scenario.
          </p>
        </div>
      </div>
    </div>
  );
}
