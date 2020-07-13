import React from "react";

export default function About() {
  return (
    <div className="px-16">
      <h2 className="text-2xl text-primary font-bold  text-center my-8">
        Admas University Hargeisa
      </h2>
      <div className="flex  justify-around">
        <div className="w-5/12 shadow p-2">
          <p className="mb-4">
            Admas University Hargeisa is a branch of Admas University; an
            internationally accredited and highly reputed higher education
            institution in Ethiopia. Admas University Hargeisa officially
            started its service in 2006 as the first private institute in
            Hargeisa, Somaliland. Initially the university was mainly providing
            social science field of studies for undergraduate programs but now
            it has diversified fields of studies. The university is symbolized
            for quality education assured by the Ministry of Education of
            Ethiopia through the National Quality Assurance agency known as the
            Higher Education Relevance and Quality Assurance Agency (HERQA).
          </p>
          <p>
            In its nine years of service in Somaliland, the university has
            widened its service to multidisciplinary areas of academics by
            incorporating socially relevant field of studies. As a result, so
            far it has produced more than 3,000 graduates who are serving key
            positions in government institutions, NGOs, and private sectors with
            high integrity and excellence in performance demonstrating the
            personality they developed in Admas.
          </p>
        </div>
        <div className="w-4/12">
          <img
            className="shadow-md rounded-sm"
            src="./images/graduation.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
