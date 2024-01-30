import PageLocationBanner from "../PageLocationBanner.jsx";
import ItemHeading from "../ItemHeading.jsx";
import Paragraph from "../Paragraph.jsx";
import ContentTable from "./ContentTable.jsx";
import Subscribe from "../Subscribe.jsx";
import Inquiry from "../Inquiry.jsx";
import Intro from "./Intro.jsx";
import Facts from "./Facts.jsx";
import Reason from "./Reason.jsx";
import Place from "./Place.jsx";

import "../../css/Country/PageCountry.css";

const PageCountry = (props) => {
  const info = props.info;

  return (
    <>
      <div className="country-page w-100">
        <title>{props.countryName}</title>

        <div className="country-page-wrapper mx-auto">
          <PageLocationBanner
            heading={props.countryName}
            location={"Home/" + props.countryName}
          />

          <div className="country-page-contents">
            <div className="country-page-contents-wrapper">
              <div className="country-page-section mx-auto mt-3 pt-4">
                <ItemHeading
                  primary={"Study in " + props.countryName + " - Why?"}
                  secondary={
                    "Discover academic excellence in " +
                    props.countryName +
                    " – an ideal destination for international students."
                  }
                />

                <div className="country-page-section-contents pt-2">
                  <Intro
                    para={info.introduction}
                    imgURL={info.img.url}
                    placename={info.img.placename}
                  />
                </div>
              </div>

              <div className="country-page-section mx-auto mt-3 pt-4">
                <ItemHeading
                  primary="Do you know?"
                  secondary={
                    "Unveiling key facts that define the essence of " +
                    props.countryName +
                    "."
                  }
                />

                <div className="country-page-section-contents pt-2 country-page-facts">
                  <Facts facts={info.facts} />
                </div>
              </div>

              <div className="country-page-section mx-auto mt-3 pt-4">
                <ItemHeading
                  primary={"Reasons to Study in " + props.countryName}
                  secondary={
                    "Some of key reasons to choose " +
                    props.countryName +
                    " for your academic pursuits."
                  }
                />

                <div className="country-page-section-contents pt-2 country-page-reasons">
                  <Reason
                    color={props.color}
                    icon={info.reasons.icon}
                    caption={info.reasons.caption}
                    explaination={info.reasons.explaination}
                  />
                </div>
              </div>

              <div className="country-page-section mx-auto mt-3 pt-4">
                <ItemHeading
                  primary={"Student Visa Process for " + props.countryName}
                  secondary="Simplify your overseas studies with our assistance."
                />

                <Paragraph
                  para={info.visaProcess}
                  imgURL="/assets/img/student-illustration.jpg"
                />
              </div>

              <div className="country-page-section mx-auto mt-3 pt-4">
                <ItemHeading
                  primary={"Cost to Study in " + props.countryName}
                  secondary={
                    "Understanding the expenses for studying in  " +
                    props.countryName +
                    "."
                  }
                />

                <div className="country-page-section-contents country-page-fee">
                  <div className="country-page-fee-wrapper">
                    <p>
                      {"Here is a table offering a rough estimate of yearly tuition fees for international students in " +
                        props.countryName +
                        "."}
                    </p>

                    <div className="country-page-fee-table-wrapper">
                      <div className="country-page-fee-table">
                        <div className="w-100 h-100 d-flex">
                          <ContentTable
                            content={info.study}
                            heading={[
                              "Level of Study",
                              "Average Annual Tuition Fees (in " +
                                props.currency +
                                ")",
                            ]}
                            listState={false}
                          />
                        </div>
                      </div>
                    </div>

                    <p>
                      Note: The cost mentioned above is based on estimated
                      figures from the college and university average and does
                      not confirm the fees you may pay.
                    </p>
                  </div>

                  <div className="country-page-fee-image">
                    <span
                      style={{
                        backgroundImage: "url(/assets/img/fees.jpg)",
                      }}
                    ></span>
                  </div>
                </div>
              </div>

              <div className="country-page-section mx-auto mt-3 pt-4">
                <ItemHeading
                  primary={"Academic Institutions in " + props.countryName}
                  secondary={
                    "Key " +
                    props.lang +
                    " hubs for learning and advanced scholarly pursuits."
                  }
                />

                <div className="country-page-section-contents country-page-universities">
                  <div className="country-page-universities-wrapper">
                    <p className="mb-0">
                      {"Among these entities are distinguished representatives of the highest-ranking universities in " +
                        props.countryName +
                        "."}
                    </p>

                    <ContentTable
                      content={info.university}
                      heading={[
                        "Academic Institution",
                        "World Rank",
                        props.countryName + " Rank",
                      ]}
                    />
                  </div>

                  <div className="country-page-uni-image">
                    <span
                      style={{
                        backgroundImage: "url(/assets/img/university.jpg)",
                      }}
                    ></span>
                  </div>
                </div>
              </div>

              <div className="country-page-section mx-auto mt-3 pt-4">
                <ItemHeading
                  primary="Cost of Living"
                  secondary="Living costs encompass rent, groceries, utilities, transportation, and miscellaneous expenses."
                />

                <div className="country-page-section-contents country-page-cost">
                  <div className="country-page-cost-wrapper">
                    <ContentTable
                      content={info.livingCost}
                      heading={[
                        "Expense Category",
                        "Average Monthly Cost (in  " + props.currency + ")",
                      ]}
                    />

                    <p className="mb-0">
                      <span style={{ color: "black" }}>Note</span> : These
                      expenditures are subject to variation based on timing,
                      location, and individual preferences.
                    </p>
                  </div>

                  <div className="country-page-cost-image">
                    <span
                      style={{
                        backgroundImage: "url(/assets/img/cost.jpg)",
                      }}
                    ></span>
                  </div>
                </div>
              </div>

              <div className="country-page-section mx-auto mt-3 pt-4">
                <ItemHeading
                  primary={props.lang + " Cities for Pursuing Education"}
                  secondary={
                    "Top " +
                    props.lang +
                    " Cities for Studying: Where Educational Excellence Meets Vibrant Lifestyle."
                  }
                />

                <div className="country-page-section-contents country-page-city">
                  <div className="country-page-city-wrapper">
                    <p className="mb-0 text-center">
                      {"Discover prime " +
                        props.lang +
                        " cities for academic pursuits, blending rich history with modern amenities. Ideal locales for an enriching educational experience."}
                    </p>
                  </div>

                  <Place
                    imgURL={info.city.imgURL}
                    explaination={info.city.explaination}
                    name={info.city.name}
                  />
                </div>
              </div>

              <div className="country-page-section mx-auto mt-3 pt-4 mb-5">
                <ItemHeading
                  primary={"Skill Shortages in " + props.countryName}
                  secondary={
                    "Skill Shortages: Insights into " +
                    props.countryName +
                    "'s Workforce Dynamics."
                  }
                />

                <div className="country-page-section-contents country-page-skill">
                  <div className="country-page-skill-wrapper">
                    <p className="">
                      {props.countryName +
                        " is currently experiencing a skill shortage, particularly in sectors such as technology, healthcare, and tourism. This challenge hinders economic growth and calls for targeted efforts in education and training."}
                    </p>

                    <ContentTable
                      content={info.skill}
                      heading={["Skills Shortage in " + props.countryName]}
                      listState={true}
                    />
                  </div>

                  <div className="country-page-skill-image">
                    <span
                      style={{
                        backgroundImage: "url(/assets/img/skill.jpg)",
                      }}
                    ></span>
                  </div>
                </div>
              </div>

              <Subscribe />
              <Inquiry primary={props.primaryInquiry} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageCountry;
